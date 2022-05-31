import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private httpService: HttpService) {}

  getUserById(id: string) {
    const host = process.env.PROXY_SERVICE_HOST;
    const port = Number(process.env.PROXY_SERVICE_PORT);
    return this.httpService
      .get(`http://${host}:${port}/user/${id}`)
      .pipe(map((item) => item.data));
  }

  getAllUsers() {
    const host = process.env.PROXY_SERVICE_HOST;
    const port = Number(process.env.PROXY_SERVICE_PORT);
    return this.httpService
      .get(`http://${host}:${port}/user/`)
      .pipe(map((item) => item.data));
  }
}
