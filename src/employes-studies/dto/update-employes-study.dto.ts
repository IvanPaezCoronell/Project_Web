import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployesStudyDto } from './create-employes-study.dto';

export class UpdateEmployesStudyDto extends PartialType(CreateEmployesStudyDto) {}
