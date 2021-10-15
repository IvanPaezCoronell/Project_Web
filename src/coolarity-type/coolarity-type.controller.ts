import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoolarityTypeService } from './coolarity-type.service';
import { CreateCoolarityTypeDto } from './dto/create-coolarity-type.dto';
import { UpdateCoolarityTypeDto } from './dto/update-coolarity-type.dto';

@Controller('coolarity-type')
export class CoolarityTypeController {
  constructor(private readonly coolarityTypeService: CoolarityTypeService) {}

  @Post()
  create(@Body() createCoolarityTypeDto: CreateCoolarityTypeDto) {
    return this.coolarityTypeService.create(createCoolarityTypeDto);
  }

  @Get()
  findAll() {
    return this.coolarityTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coolarityTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoolarityTypeDto: UpdateCoolarityTypeDto) {
    return this.coolarityTypeService.update(+id, updateCoolarityTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coolarityTypeService.remove(+id);
  }
}
