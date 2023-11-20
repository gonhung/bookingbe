import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// @Entity()
export class PatientRegister extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    symptom: string;

    @Column({ nullable: true })
    insurance: string
}
