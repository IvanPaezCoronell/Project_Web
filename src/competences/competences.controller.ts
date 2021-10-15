import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { CompetencesService } from './competences.service';
import { CreateCompetenceDto } from './dto/create-competence.dto';
import { UpdateCompetenceDto } from './dto/update-competence.dto';

@Controller('competences')
export class CompetencesController {
  constructor(private readonly competencesService: CompetencesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createCompetenceDto: CreateCompetenceDto) {
    return {
      success: true,
      competence: await this.competencesService.create(createCompetenceDto),
      message: "Competence created successfully."
    }
    }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll() {
    return{
      success: true,
      competence: await this.competencesService.findAll(),
    } 
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') id: string) {
    return{
      success: true,
      competence: await this.competencesService.findOne(+id),
      message: 'Competence found successfully.'
    } ;
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: string, @Body() updateCompetenceDto: UpdateCompetenceDto) {
    await this.competencesService.update(+id, updateCompetenceDto);
    return {
      success: true,
      message: 'Competence updated successfully.'
    }
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async remove(@Param('id') id: string) {
    await this.competencesService.remove(+id);
    return {
      success: true,
      message: 'Competence removed successfully.'
    };
  }
}
