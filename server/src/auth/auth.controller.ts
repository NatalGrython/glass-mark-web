import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { RegistrationUserDto } from './dto/register-user.dto';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/registration')
  @ApiResponse({
    status: 201,
    description: 'Registrations success',
  })
  registration(@Body() registrationUserDto: RegistrationUserDto) {
    return this.authService.registration(registrationUserDto);
  }

  @Post('/login')
  @ApiResponse({
    status: 201,
    description: 'Login success',
  })
  login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }
}
