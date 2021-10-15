import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployesStudiesService } from './employes-studies.service';
import { CreateEmployesStudyDto } from './dto/create-employes-study.dto';
import { UpdateEmployesStudyDto } from './dto/update-employes-study.dto';

@Controller('employes-studies')
export class EmployesStudiesController {
  constructor(private readonly employesStudiesService: EmployesStudiesService) {}

  @Post()
  create(@Body() createEmployesStudyDto: CreateEmployesStudyDto) {
    return this.employesStudiesService.create(createEmployesStudyDto);
  }

  @Get()
  findAll() {
    return this.employesStudiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employesStudiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployesStudyDto: UpdateEmployesStudyDto) {
    return this.employesStudiesService.update(+id, updateEmployesStudyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employesStudiesService.remove(+id);
  }
}
