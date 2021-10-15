import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode, ParseIntPipe } from '@nestjs/common';
import { EmployesService } from './employes.service';
import { CreateEmployeDto } from './dto/create-employe.dto';


@Controller('employes')
export class EmployesController {
  constructor(private readonly employesService: EmployesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createEmployeDto: CreateEmployeDto) {
    return {
      succes: true,
      employe: await this.employesService.create(createEmployeDto),
      message: 'Employe created successfully'
    }
    
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(){
    return {
     succes: true,
     employes: await this.employesService.findAll(),
     message: 'Id found succesfully' 
    }
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') id: string){
    return {
      succes: true,
      employe: await this.employesService.findOne(+id),
      message: 'Id found succesfully' ,
     }
  }



}