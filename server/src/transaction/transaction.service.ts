import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom, map } from 'rxjs';
import { NodeService } from 'src/node/node.service';

@Injectable()
export class TransactionService {
  constructor(
    private nodeService: NodeService,
    private httpService: HttpService,
  ) {}

  async createTransaction(createTransactionDto: any) {
    const currentNode = await firstValueFrom(
      this.nodeService.getNodeById(createTransactionDto.nodeId),
    );

    const { nodeId, ...createTransactionPayload } = createTransactionDto;

    return firstValueFrom(
      this.httpService
        .post(
          `http://${currentNode.address}:${currentNode.port}`,
          createTransactionPayload,
        )
        .pipe(map((item) => item.data)),
    );
  }
}
