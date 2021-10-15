import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployesCompetenceDto } from './create-employes-competence.dto';

export class UpdateEmployesCompetenceDto extends PartialType(CreateEmployesCompetenceDto) {}
