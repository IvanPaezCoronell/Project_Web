import { Injectable , NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateEmployeDto } from './dto/create-employe.dto';
import { Employe } from './entities/employe.entity';

@Injectable()
export class EmployesService {

  constructor(@InjectRepository(Employe) private employeRepository: Repository<Employe>,
  private userService: UsersService

  ) {}


 
  async create(createEmployeDto: CreateEmployeDto) {
    const getUser = await this.userService.findOne(createEmployeDto.user)
    const newEmploye = this.employeRepository.create({...createEmployeDto, user: getUser})
    return this.employeRepository.save(newEmploye)

  }

  findAll() {
    return this.employeRepository.find({relations: ['user'],});
    
  }

  async findOne(id: number) {
    const getEmploye = await this.employeRepository.findOne(id);
    if(!getEmploye){
      throw new NotFoundException('Employe not found')
    }
    return getEmploye;
  }

}
