import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProfessionDto } from './dto/create-profession.dto';
import { UpdateProfessionDto } from './dto/update-profession.dto';
import { Profession } from './entities/profession.entity';

@Injectable()
export class ProfessionsService {
  constructor(@InjectRepository(Profession) private professionRepository: Repository<Profession>){}

  create(createProfessionDto: CreateProfessionDto) {
    const newProfession = this.professionRepository.create(createProfessionDto);
    return this.professionRepository.save(newProfession);
    
  }

  findAll() {
    return `This action returns all professions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} profession`;
  }

  update(id: number, updateProfessionDto: UpdateProfessionDto) {
    return `This action updates a #${id} profession`;
  }

  remove(id: number) {
    return `This action removes a #${id} profession`;
  }
}
