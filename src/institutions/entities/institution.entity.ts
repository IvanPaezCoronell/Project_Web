import { EmployesStudy } from "src/employes-studies/entities/employes-study.entity";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn,OneToMany,ManyToOne } from "typeorm";
@Entity()
export class Institution {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @CreateDateColumn()
    creat_at: string;
    @UpdateDateColumn()
    updated_at: string;
    @OneToMany(() => EmployesStudy, (institutions) => institutions.id)
    institutions: EmployesStudy[];


}
