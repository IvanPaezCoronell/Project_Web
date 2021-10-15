import { EmployesCompetence } from "src/employes-competences/entities/employes-competence.entity";
import { Column, Entity, PrimaryGeneratedColumn, PrimaryColumn, OneToMany, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class Competence {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    description: string;
    @CreateDateColumn()
    created_at: string;
    @UpdateDateColumn()
    updated_at: string;
    @OneToMany(() => EmployesCompetence, (employeCompetence) => employeCompetence.id)
    employeCompetence: EmployesCompetence[];
    

}
