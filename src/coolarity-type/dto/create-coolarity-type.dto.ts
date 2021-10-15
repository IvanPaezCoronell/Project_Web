import { IsNotEmpty } from "class-validator";


export class CreateCoolarityTypeDto {
    @IsNotEmpty()
    description: string;

}
