import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployesCompetenceDto } from './dto/create-employes-competence.dto';
import { UpdateEmployesCompetenceDto } from './dto/update-employes-competence.dto';
import { EmployesCompetence } from './entities/employes-competence.entity';

@Injectable()
export class EmployesCompetencesService {
  constructor(@InjectRepository(EmployesCompetence) private employeCompetenceRepository: Repository<EmployesCompetence>){}
  
  create(createEmployesCompetenceDto: CreateEmployesCompetenceDto) {
    return 'This action adds a new employesCompetence';
  }

  findAll() {
    return `This action returns all employesCompetences`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employesCompetence`;
  }

  update(id: number, updateEmployesCompetenceDto: UpdateEmployesCompetenceDto) {
    return `This action updates a #${id} employesCompetence`;
  }

  remove(id: number) {
    return `This action removes a #${id} employesCompetence`;
  }
}
