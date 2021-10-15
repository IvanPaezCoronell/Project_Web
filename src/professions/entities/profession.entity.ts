import { EmployesStudy } from "src/employes-studies/entities/employes-study.entity";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn,OneToMany,ManyToOne } from "typeorm";
@Entity()
export class Profession {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    description: string;
    @CreateDateColumn()
    creat_at: string;
    @UpdateDateColumn()
    updated_at: string;
    @OneToMany(() => EmployesStudy, (profession) => profession.id)
    profession: EmployesStudy[];
}
