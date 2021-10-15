import { type } from "os";
import { Employe } from "src/employes/entities/employe.entity";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn,OneToMany,OneToOne,ManyToOne } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    email: string;
    @Column()
    password: string;
    @CreateDateColumn()
    created_at: string;
    @UpdateDateColumn()
    updated_at: string;
    @OneToMany(() => Employe, (employes) => employes.user)
    employes: Employe[];
    

}
