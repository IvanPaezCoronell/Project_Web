import { Module } from '@nestjs/common';
import { EmployesCompetencesService } from './employes-competences.service';
import { EmployesCompetencesController } from './employes-competences.controller';
import { EmployesCompetence } from './entities/employes-competence.entity';
import { EmployesModule } from 'src/employes/employes.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [EmployesModule,EmployesCompetencesModule, TypeOrmModule.forFeature([EmployesCompetence])],
  controllers: [EmployesCompetencesController],
  providers: [EmployesCompetencesService]
})
export class EmployesCompetencesModule {}
