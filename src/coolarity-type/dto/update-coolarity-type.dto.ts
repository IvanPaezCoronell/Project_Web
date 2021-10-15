import { PartialType } from '@nestjs/mapped-types';
import { CreateCoolarityTypeDto } from './create-coolarity-type.dto';

export class UpdateCoolarityTypeDto extends PartialType(CreateCoolarityTypeDto) {}
