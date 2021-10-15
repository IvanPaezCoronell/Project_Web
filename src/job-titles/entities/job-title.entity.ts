import { WorkRecord } from "src/work-records/entities/work-record.entity";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn,OneToMany,ManyToOne } from "typeorm";
@Entity()
export class JobTitle {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    description: string;
    @CreateDateColumn()
    creat_at: string;
    @UpdateDateColumn()
    updated_at: string;
    @OneToMany(() => WorkRecord, (jobTitle) => jobTitle.id)
    jpbTitle: WorkRecord[];
}
