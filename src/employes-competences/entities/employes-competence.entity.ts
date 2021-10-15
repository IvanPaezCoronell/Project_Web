import { type } from "os";
import { Competence } from "src/competences/entities/competence.entity";
import { Employe } from "src/employes/entities/employe.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity,UpdateDateColumn,CreateDateColumn, PrimaryGeneratedColumn, PrimaryColumn, OneToMany, ManyToOne } from "typeorm";

@Entity()
export class EmployesCompetence{
    @PrimaryGeneratedColumn()
    id: number;  
    @CreateDateColumn()
    created_at: string;
    @UpdateDateColumn()
    updated_at: string;
    @ManyToOne(() => Employe, (employes) => employes.id)
    employes: Employe;
    @ManyToOne(() => Competence, (competence) => competence.id)
    competence: Competence;

}

