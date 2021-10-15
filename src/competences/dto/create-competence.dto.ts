import { IsNotEmpty } from "class-validator";
export class CreateCompetenceDto {
    @IsNotEmpty()
    description: string;
}
