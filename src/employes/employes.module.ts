import { Module } from '@nestjs/common';
import { EmployesService } from './employes.service';
import { EmployesController } from './employes.controller';
import { Employe } from './entities/employe.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [UsersModule,TypeOrmModule.forFeature([Employe,])],
  controllers: [EmployesController],
  providers: [EmployesService]
})
export class EmployesModule {}
