import { Module } from '@nestjs/common';
import { CoolarityTypeService } from './coolarity-type.service';
import { CoolarityTypeController } from './coolarity-type.controller';
import { CoolarityType } from './entities/coolarity-type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CoolarityType]) ],
  controllers: [CoolarityTypeController],
  providers: [CoolarityTypeService]
})
export class CoolarityTypeModule {}
