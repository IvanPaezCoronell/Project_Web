import { type } from "os";
import { EmployesStudy } from "src/employes-studies/entities/employes-study.entity";
import { Employe } from "src/employes/entities/employe.entity";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn,OneToMany,ManyToOne } from "typeorm";

@Entity()
export class CoolarityType {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    description: string;
    @CreateDateColumn()
    creat_at: string;
    @UpdateDateColumn()
    updated_at: string;
    @OneToMany(() => EmployesStudy, (employesStudy) => employesStudy.id)
    employesStutdy: EmployesStudy[];

}
