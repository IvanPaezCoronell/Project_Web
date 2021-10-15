import { IsNotEmpty } from "class-validator";

export class CreateEmployesStudyDto {
    @IsNotEmpty()
    year: number;
    @IsNotEmpty()
    endeded: number;
}
