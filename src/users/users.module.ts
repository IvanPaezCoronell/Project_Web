import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Employe } from 'src/employes/entities/employe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User]) ],

  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],


})
export class UsersModule {}
