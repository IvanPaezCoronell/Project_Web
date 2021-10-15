import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCoolarityTypeDto } from './dto/create-coolarity-type.dto';
import { UpdateCoolarityTypeDto } from './dto/update-coolarity-type.dto';
import { CoolarityType } from './entities/coolarity-type.entity';

@Injectable()
export class CoolarityTypeService {
  constructor(@InjectRepository(CoolarityType) private coolarityTypeRepository: Repository<CoolarityType>){}
  create(createCoolarityTypeDto: CreateCoolarityTypeDto) {
    const newCoolarityType = this.coolarityTypeRepository.create(createCoolarityTypeDto);
    return this.coolarityTypeRepository.save(newCoolarityType);
  }

  findAll() {
    return `This action returns all coolarityType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} coolarityType`;
  }

  update(id: number, updateCoolarityTypeDto: UpdateCoolarityTypeDto) {
    return `This action updates a #${id} coolarityType`;
  }

  remove(id: number) {
    return `This action removes a #${id} coolarityType`;
  }
}
