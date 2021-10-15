import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createUserDto: CreateUserDto) {
    return {
      success: true,
      user: await this.usersService.create(createUserDto),
      message: 'User created successfully.'
    }

  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll() {
    return {
      success: true,
      user: await this.usersService.findAll(),
    
    }
  
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') id: string) {
    return {
      success: true,
      user: await this.usersService.findOne(+id),
      message: 'User found successfully.'
    }
    
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    await this.usersService.update(+id, updateUserDto);
    return {
      success: true,
      message: 'User updated successfully.'
    };
    
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async remove(@Param('id') id: string) {
    await this.usersService.remove(+id);
    return {
      success: true,
      message: 'User removed successfully.'
    };
    
  }
}
