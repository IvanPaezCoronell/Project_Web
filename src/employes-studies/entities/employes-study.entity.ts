import { CoolarityType } from "src/coolarity-type/entities/coolarity-type.entity";
import { Employe } from "src/employes/entities/employe.entity";
import { Institution } from "src/institutions/entities/institution.entity";
import { Profession } from "src/professions/entities/profession.entity";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn,OneToMany,ManyToOne } from "typeorm";
@Entity()
export class EmployesStudy {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    year: number;
    @Column()
    endeded: number;
    @CreateDateColumn()
    creat_at: string;
    @UpdateDateColumn()
    updated_at: string;
    @ManyToOne(() => CoolarityType, (coolarityType) => coolarityType.id)
    coolarityType: CoolarityType;
    @ManyToOne(() => Institution, (institutions) => institutions.id)
    institutions: CoolarityType;
    @ManyToOne(() => Profession, (profession) => profession.id)
    profession: Profession;
    @ManyToOne(() => Employe, (employes) => employes.id)
    employes: Employe;
}
