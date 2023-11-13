import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateDoctorRegisterDto } from './dto/create-doctor_register.dto';
import { UpdateDoctorRegisterDto } from './dto/update-doctor_register.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DoctorRegister } from './entities/doctor_register.entity';
import { Repository } from 'typeorm';
import { User } from 'models/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class DoctorRegisterService {
    constructor(
        @InjectRepository(DoctorRegister) private readonly doctorRepository: Repository<DoctorRegister>,
        private readonly jwtService: JwtService
    ) { }

    async registerDoctor(user: User, body: CreateDoctorRegisterDto) {
        const { id } = user;

        const transition = await this.doctorRepository.manager.connection.createQueryRunner();

        await transition.connect();
        await transition.startTransaction();

        try {

        } catch (error) {
            await transition.rollbackTransaction();
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        } finally {
            await transition.release();
        }

        const query = await this.doctorRepository.createQueryBuilder("doctor")
            .insert().into(DoctorRegister)
            .values({
                ...body,
                userId: id
            }).execute()

    }

    // async activeDoctor(user: User) { }
}