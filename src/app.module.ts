import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { EmployesModule } from './employes/employes.module';
import { EmployesCompetencesModule } from './employes-competences/employes-competences.module';
import { CompetencesModule } from './competences/competences.module';
import { EmployesStudiesModule } from './employes-studies/employes-studies.module';
import { CoolarityTypeModule } from './coolarity-type/coolarity-type.module';
import { InstitutionsModule } from './institutions/institutions.module';
import { ProfessionsModule } from './professions/professions.module';
import { WorkRecordsModule } from './work-records/work-records.module';
import { JobTitlesModule } from './job-titles/job-titles.module';
import { Employe } from './employes/entities/employe.entity';


@Module({
  imports: [UsersModule, 
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'prueba_web',
      autoLoadEntities: true,
      synchronize: true,}
      
      ), EmployesModule, EmployesCompetencesModule, CompetencesModule, EmployesStudiesModule, CoolarityTypeModule, InstitutionsModule, ProfessionsModule, WorkRecordsModule, JobTitlesModule,
    
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
