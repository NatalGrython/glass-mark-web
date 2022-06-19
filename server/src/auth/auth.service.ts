import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { catchError, map, of } from 'rxjs';
import { LoginUserDto } from './dto/login-user.dto';
import { RegistrationUserDto } from './dto/register-user.dto';

@Injectable()
export class AuthService {
  constructor(private httpService: HttpService) {}

  registration(registrationUserDto: RegistrationUserDto) {
    const host = process.env.PROXY_SERVICE_HOST;
    const port = Number(process.env.PROXY_SERVICE_PORT);
    return this.httpService
      .post(`http://${host}:${port}/auth/registration`, registrationUserDto)
      .pipe(map((item) => item.data));
  }

  login(loginUserDto: LoginUserDto) {
    try {
      const host = process.env.PROXY_SERVICE_HOST;
      const port = Number(process.env.PROXY_SERVICE_PORT);
      return this.httpService
        .post(`http://${host}:${port}/auth/login`, loginUserDto)
        .pipe(
          map((item) => item.data),
          catchError((error) => {
            console.log(error.data);
            return of(error);
          }),
        );
    } catch (error) {
      console.log(error);
      return 'ne ok';
    }
  }
}
