import { Employe } from "src/employes/entities/employe.entity";
import { JobTitle } from "src/job-titles/entities/job-title.entity";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn,OneToMany,ManyToOne, PrimaryColumn, JoinColumn } from "typeorm";
@Entity()
export class WorkRecord {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    begin_date: number;
    @Column()
    end_date: number;
    @Column()
    company_name: string;
    @Column()
    boss_name: string;
    @Column()
    phone_company: number;
    @CreateDateColumn()
    creat_at: string;
    @UpdateDateColumn()
    updated_at: string;
    @ManyToOne(() => JobTitle, (jobTitle) => jobTitle.id)
    jobTitle: JobTitle;
    
    @ManyToOne(() => Employe, (employes) => employes.id)
    employes: Employe;
}
