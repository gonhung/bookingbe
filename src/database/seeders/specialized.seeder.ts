import { Specialized } from "models/specialized/entities/specialized.entity";
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";

export class SpecializedSeeder implements Seeder {
    async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {
        const specializedRepository = dataSource.getRepository(Specialized)

        const data = [
            'Accident and emergency medicine',
            'Allergology',
            'Anaesthetics',
            'Biological hematology',
            'Cardiology',
            'Child psychiatry',
            'Clinical biology',
            'Clinical chemistry',
            'Clinical neurophysiology',
            'Clinical radiology',
            'Dental, oral and maxillo-facial surgery',
            'Dermato-venerology',
            'Dermatology',
            'Endocrinology',
            'Gastro-enterologic surgery',
            'Gastroenterology',
            'General hematology',
            'General Practice',
            'General surgery',
            'Geriatrics',
            'Immunology',
            'Infectious diseases',
            'Internal medicine',
            'Laboratory medicine',
            'Maxillo-facial surgery',
            'Microbiology',
            'Nephrology',
            'Neuro-psychiatry',
            'Neurology',
            'Neurosurgery',
            'Nuclear medicine',
            'Obstetrics and gynecology',
            'Occupational medicine',
            'Ophthalmology',
            'Orthopaedics',
            'Otorhinolaryngology',
            'Paediatric surgery',
            'Paediatrics',
            'Pathology',
            'Pharmacology',
            'Physical medicine and rehabilitation',
            'Plastic surgery',
            'Podiatric Medicine',
            'Podiatric Surgery',
            'Psychiatry',
            'Public health and Preventive Medicine',
            'Radiology',
            'Radiotherapy',
            'Respiratory medicine',
            'Rheumatology',
            'Stomatology',
            'Thoracic surgery',
            'Tropical medicine',
            'Urology',
            'Vascular surgery',
            'Venereology'
        ]

        for await (const dt of data) {
            await specializedRepository.insert([{ name: dt }])
        }
    }
}