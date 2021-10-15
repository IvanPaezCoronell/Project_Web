import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployesStudyDto } from './dto/create-employes-study.dto';
import { UpdateEmployesStudyDto } from './dto/update-employes-study.dto';
import { EmployesStudy } from './entities/employes-study.entity';

@Injectable()
export class EmployesStudiesService {
  constructor(@InjectRepository(EmployesStudy) private employeStudyRepository: Repository<EmployesStudy>){}

  create(createEmployesStudyDto: CreateEmployesStudyDto) {
    const newEmployeStudy = this.employeStudyRepository.create(createEmployesStudyDto);
    return this.employeStudyRepository.save(newEmployeStudy);
  }

  findAll() {
    return `This action returns all employesStudies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employesStudy`;
  }

  update(id: number, updateEmployesStudyDto: UpdateEmployesStudyDto) {
    return `This action updates a #${id} employesStudy`;
  }

  remove(id: number) {
    return `This action removes a #${id} employesStudy`;
  }
}
