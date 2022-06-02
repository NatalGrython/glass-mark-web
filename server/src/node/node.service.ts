import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';

@Injectable()
export class NodeService {
  constructor(private httpService: HttpService) {}

  getAllNodes() {
    const host = process.env.PROXY_SERVICE_HOST;
    const port = Number(process.env.PROXY_SERVICE_PORT);

    return this.httpService
      .get<{ host: string; port: number }[]>(`http://${host}:${port}/node`)
      .pipe(map((item) => item.data));
  }

  getNodeById(id: string) {
    const host = process.env.PROXY_SERVICE_HOST;
    const port = Number(process.env.PROXY_SERVICE_PORT);

    return this.httpService
      .get<{ host: string; port: number }>(`http://${host}:${port}/node/${id}`)
      .pipe(map((item) => item.data));
  }
}
