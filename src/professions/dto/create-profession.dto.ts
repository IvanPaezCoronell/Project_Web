import { IsNotEmpty } from "class-validator";
export class CreateProfessionDto {
    @IsNotEmpty()
    description: string;
}
