import { IsNotEmpty } from "class-validator";
export class CreateInstitutionDto {
    @IsNotEmpty()
    name: string;
}
