import { Controller, Get, Param, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':id')
  getUserById(@Param('id') id: string, @Req() req: Express.Request) {
    return this.userService.getUserById(id, req);
  }

  @Get()
  getUsers(@Req() req: Express.Request) {
    return this.userService.getAllUsers(req);
  }
}
