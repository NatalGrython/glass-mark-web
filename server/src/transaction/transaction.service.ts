import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom, map } from 'rxjs';
import { NodeService } from 'src/node/node.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class TransactionService {
  constructor(
    private nodeService: NodeService,
    private httpService: HttpService,
    private userService: UserService,
  ) {}

  async createTransaction(createTransactionDto: any, req: Express.Request) {
    const currentNode = await firstValueFrom(
      this.nodeService.getNodeById(createTransactionDto.nodeId),
    );

    const sender = await this.userService.getUserById(
      createTransactionDto.sender,
      req,
    );
    const receiver = await this.userService.getUserById(
      createTransactionDto.receiver,
      req,
    );

    console.log({ sender, receiver });

    return firstValueFrom(
      this.httpService
        .post(
          `http://${currentNode.host}:${currentNode.port}/api/transaction`,
          {
            address: sender.address,
            privateKey: sender.privateKey,
            value: Number(createTransactionDto.value),
            recipient: receiver.address,
            reason: createTransactionDto.reason,
          },
        )
        .pipe(map((item) => item.data)),
    );
  }
}
