import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkRecordsService } from './work-records.service';
import { CreateWorkRecordDto } from './dto/create-work-record.dto';
import { UpdateWorkRecordDto } from './dto/update-work-record.dto';

@Controller('work-records')
export class WorkRecordsController {
  constructor(private readonly workRecordsService: WorkRecordsService) {}

  @Post()
  create(@Body() createWorkRecordDto: CreateWorkRecordDto) {
    return this.workRecordsService.create(createWorkRecordDto);
  }

  @Get()
  findAll() {
    return this.workRecordsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workRecordsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkRecordDto: UpdateWorkRecordDto) {
    return this.workRecordsService.update(+id, updateWorkRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workRecordsService.remove(+id);
  }
}
