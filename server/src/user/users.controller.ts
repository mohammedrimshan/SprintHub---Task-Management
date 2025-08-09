import { Controller, Get, Put, Param, Body, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { BlockUserDto } from './dto/block-user.dto';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from '../common/interfaces/role.enum';

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN)
  async findAll() {
    return this.usersService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Put(':id/block')
  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN)
  async block(@Param('id') id: string, @Body() blockUserDto: BlockUserDto) {
    return this.usersService.block(id, blockUserDto);
  }
}