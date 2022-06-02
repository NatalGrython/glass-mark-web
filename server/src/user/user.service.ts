import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { catchError, firstValueFrom, map, of } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private httpService: HttpService) {}

  async getUserById(id: string, req: Express.Request) {
    const users: any[] = await firstValueFrom(this.getAllUsers(req));
    const currentUser = users.find((item) => item.id === Number(id));
    return currentUser;
  }

  getAllUsers(req: Express.Request) {
    return this.httpService
      .get(`/user`, {
        headers: {
          //@ts-ignore
          Authorization: req.headers.authorization,
        },
      })
      .pipe(
        map((item) => item.data),
        catchError((err) => of(err)),
      );
  }
}
