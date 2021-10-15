import { IsNotEmpty } from "class-validator";

export class CreateJobTitleDto {
    @IsNotEmpty()
    description: string;
}


