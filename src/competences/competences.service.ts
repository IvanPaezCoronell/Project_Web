import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCompetenceDto } from './dto/create-competence.dto';
import { UpdateCompetenceDto } from './dto/update-competence.dto';
import { Competence } from './entities/competence.entity';

@Injectable()
export class CompetencesService {
  constructor(@InjectRepository(Competence) private competenceRepository: Repository<Competence>,) {}

  async create(createCompetenceDto: CreateCompetenceDto) {
    const newCompetence = this.competenceRepository.create(createCompetenceDto);
    return this.competenceRepository.save(newCompetence);
  }

  findAll() {
    return this.competenceRepository.find();
  }

  async findOne(id: number): Promise<Competence> {
    const getCompetence = await this.competenceRepository.findOne(id);
    if(!getCompetence){
      throw new NotFoundException('Competence not found.')
    }
    return getCompetence;
  }

  async update(id: number, updateCompetenceDto: UpdateCompetenceDto): Promise<void> {
    const getCompetence = await this.findOne(id);
    const mergeDataCompetence = this.competenceRepository.merge(getCompetence, updateCompetenceDto)
    this.competenceRepository.save(mergeDataCompetence)
  }

  async remove(id: number): Promise<void> {
    const getCompetence = await this.findOne(id);
    this.competenceRepository.remove(getCompetence)
  }
}
