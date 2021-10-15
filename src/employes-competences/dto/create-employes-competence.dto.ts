import { IsNotEmpty } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
export class CreateEmployesCompetenceDto {

    @IsNotEmpty()
    employe: number;

}
