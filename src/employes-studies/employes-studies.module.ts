import { Module } from '@nestjs/common';
import { EmployesStudiesService } from './employes-studies.service';
import { EmployesStudiesController } from './employes-studies.controller';
import { EmployesStudy } from './entities/employes-study.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EmployesStudy]) ],
  controllers: [EmployesStudiesController],
  providers: [EmployesStudiesService]
})
export class EmployesStudiesModule {}
