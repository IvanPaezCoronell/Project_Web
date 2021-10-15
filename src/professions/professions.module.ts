import { Module } from '@nestjs/common';
import { ProfessionsService } from './professions.service';
import { ProfessionsController } from './professions.controller';
import { Profession } from './entities/profession.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Profession]) ],
  controllers: [ProfessionsController],
  providers: [ProfessionsService]
})
export class ProfessionsModule {}
