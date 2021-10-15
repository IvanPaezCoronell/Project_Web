import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateJobTitleDto } from './dto/create-job-title.dto';
import { UpdateJobTitleDto } from './dto/update-job-title.dto';
import { JobTitle } from './entities/job-title.entity';

@Injectable()
export class JobTitlesService {
  constructor(@InjectRepository(JobTitle) private jobTitleRepository: Repository<JobTitle>){}

  create(createJobTitleDto: CreateJobTitleDto) {
    const newJobTitle = this.jobTitleRepository.create(createJobTitleDto);
    return this.jobTitleRepository.save(newJobTitle);
  }

  findAll() {
    return `This action returns all jobTitles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jobTitle`;
  }

  update(id: number, updateJobTitleDto: UpdateJobTitleDto) {
    return `This action updates a #${id} jobTitle`;
  }

  remove(id: number) {
    return `This action removes a #${id} jobTitle`;
  }
}
