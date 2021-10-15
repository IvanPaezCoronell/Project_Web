import { Module } from '@nestjs/common';
import { WorkRecordsService } from './work-records.service';
import { WorkRecordsController } from './work-records.controller';
import { WorkRecord } from './entities/work-record.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([WorkRecord]) ],
  controllers: [WorkRecordsController],
  providers: [WorkRecordsService]
})
export class WorkRecordsModule {}
