import { type } from "os";
import { EmployesCompetence } from "src/employes-competences/entities/employes-competence.entity";
import { EmployesStudy } from "src/employes-studies/entities/employes-study.entity";
import { User } from "src/users/entities/user.entity";
import { WorkRecord } from "src/work-records/entities/work-record.entity";
import { Column, Entity, PrimaryGeneratedColumn, PrimaryColumn, OneToMany, ManyToOne } from "typeorm";

@Entity()
export class Employe {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;
    @Column()
    lastName: string;
    @ManyToOne(() => User, (user) => user.employes)
    user: User;
    @OneToMany(() => EmployesCompetence, (employeCompetence) => employeCompetence.id)
    employeCompetence: EmployesCompetence[];

    @OneToMany(() => WorkRecord, (workRecord) => workRecord.id)
    //@PrimaryColumn()
    workRecord: WorkRecord[];
    @OneToMany(() => EmployesStudy, (employeStudy) => employeStudy.id)
    employeStudy: EmployesStudy[];

}
