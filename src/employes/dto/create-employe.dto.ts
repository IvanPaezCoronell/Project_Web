import { IsNotEmpty } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
export class CreateEmployeDto {

    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    lastName: string;
    @IsNotEmpty()
    user: number;
}
