import { IsNotEmpty } from "class-validator";

export class CreateWorkRecordDto {
    @IsNotEmpty()
    begin_date: number;
    @IsNotEmpty()
    end_date: number;
    @IsNotEmpty()
    company_name: string;
    @IsNotEmpty()
    boss_name: string;
    @IsNotEmpty()
    phone_company: number;

}
