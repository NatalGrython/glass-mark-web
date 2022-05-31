import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { LoginUserDto } from './dto/login-user.dto';
import { RegistrationUserDto } from './dto/register-user.dto';

@Injectable()
export class AuthService {
  constructor(private httpService: HttpService) {}

  registration(registrationUserDto: RegistrationUserDto) {
    const host = process.env.PROXY_SERVICE_HOST;
    const port = Number(process.env.PROXY_SERVICE_PORT);
    return this.httpService
      .post(`http://${host}:${port}/registration`, registrationUserDto)
      .pipe(map((item) => item.data));
  }

  login(loginUserDto: LoginUserDto) {
    const host = process.env.PROXY_SERVICE_HOST;
    const port = Number(process.env.PROXY_SERVICE_PORT);
    return this.httpService
      .post(`http://${host}:${port}/login`, loginUserDto)
      .pipe(map((item) => item.data));
  }
}
