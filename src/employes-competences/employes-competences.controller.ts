import { Controller, Get, Post, Body, Patch, Param, Delete,HttpCode,HttpStatus } from '@nestjs/common';
import { EmployesCompetencesService } from './employes-competences.service';
import { CreateEmployesCompetenceDto } from './dto/create-employes-competence.dto';
import { UpdateEmployesCompetenceDto } from './dto/update-employes-competence.dto';

@Controller('employes-competences')
export class EmployesCompetencesController {
  constructor(private readonly employesCompetencesService: EmployesCompetencesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() CreateEmployesCompetenceDto: CreateEmployesCompetenceDto) {
    return {
      success: true,
      employeCompetence: await this.employesCompetencesService.create(CreateEmployesCompetenceDto),
      message: "employe competence add successfully."
    }
    }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll() {
    return {
      success: true,

      employees: await this.employesCompetencesService.findAll(),
    }
    
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') id: string) {
    return {
      success: true,
  
      employees: this.employesCompetencesService.findOne(+id),
      message: 'Employe competence successfully',
    } 
    }


  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: string, @Body() updateEmployesCompetenceDto: UpdateEmployesCompetenceDto) {
    await this.employesCompetencesService.update(+id, updateEmployesCompetenceDto);
    return {
      success: true,
      message: 'Employe competence update successfully',

    }
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async remove(@Param('id') id: string) {
    await this.employesCompetencesService.remove(+id);
    return {
      success: true,

      message: 'Employe competence removed successfully',
    }
  }
}
