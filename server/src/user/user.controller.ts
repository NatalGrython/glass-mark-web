import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':id')
  getUserById(@Param() id: string) {
    this.userService.getUserById(id);
  }

  @Get()
  getUsers() {
    this.userService.getAllUsers();
  }
}
