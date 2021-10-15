import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWorkRecordDto } from './dto/create-work-record.dto';
import { UpdateWorkRecordDto } from './dto/update-work-record.dto';
import { WorkRecord } from './entities/work-record.entity';

@Injectable()
export class WorkRecordsService {
  constructor(@InjectRepository(WorkRecord) private workRecordRepository: Repository<WorkRecord>){}

  create(createWorkRecordDto: CreateWorkRecordDto) {
    const newWorkRecord = this.workRecordRepository.create(createWorkRecordDto);
    return this.workRecordRepository.save(newWorkRecord);
  }

  findAll() {
    return `This action returns all workRecords`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workRecord`;
  }

  update(id: number, updateWorkRecordDto: UpdateWorkRecordDto) {
    return `This action updates a #${id} workRecord`;
  }

  remove(id: number) {
    return `This action removes a #${id} workRecord`;
  }
}
