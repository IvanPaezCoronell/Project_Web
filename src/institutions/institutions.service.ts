import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInstitutionDto } from './dto/create-institution.dto';
import { UpdateInstitutionDto } from './dto/update-institution.dto';
import { Institution } from './entities/institution.entity';

@Injectable()
export class InstitutionsService {
  constructor(@InjectRepository(Institution) private institutionsRepository: Repository<Institution>){}

  create(createInstitutionDto: CreateInstitutionDto) {
    const newInstitutions = this.institutionsRepository.create(createInstitutionDto);
    return this.institutionsRepository.save(newInstitutions);
  }

  findAll() {
    return `This action returns all institutions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} institution`;
  }

  update(id: number, updateInstitutionDto: UpdateInstitutionDto) {
    return `This action updates a #${id} institution`;
  }

  remove(id: number) {
    return `This action removes a #${id} institution`;
  }
}
