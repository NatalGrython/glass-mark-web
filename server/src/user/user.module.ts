import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  providers: [UserService],
  controllers: [UserController],
  imports: [HttpModule],
})
export class UserModule {}
