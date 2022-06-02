import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { NodeService } from 'src/node/node.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class TableService {
  constructor(
    private httpService: HttpService,
    private nodeService: NodeService,
    private userService: UserService,
  ) {}

  async getFullTable(getFullTableDto: any, req: Express.Request) {
    const currentNode = await firstValueFrom(
      this.nodeService.getNodeById(getFullTableDto.nodeId),
    );
    const { data: chain } = await firstValueFrom(
      this.httpService.get(
        `http://${currentNode.host}:${currentNode.port}/api/chain`,
      ),
    );

    const currentBlockChain = chain.reverse();

    const allUsers = await firstValueFrom(this.userService.getAllUsers(req));
    const students = allUsers.filter((item) => item.role === 'student');
    const table = currentBlockChain.reduce((acc, block) => {
      students.forEach((user) => {
        if (block.mappingData[user.address]) {
          acc.push({
            login: user.login,
            balance: block.mappingData[user.address],
            transactions: block.transactions
              .filter((tx) => tx.receiver === user.address)
              .map((item) => ({
                sender: item.sender,
                value: item.value,
                reason: item.reason,
                hash: item.currentHash,
              })),
          });
        }
      });
      return acc;
    }, []);

    const updatedTable = table.map((col) => ({
      ...col,
      transactions: col.transactions.map((tx) => {
        const currentSender = allUsers.find(
          (user) => tx.sender === user.address,
        );
        if (currentSender) {
          return { ...tx, sender: currentSender.login };
        }
        return { ...tx, sender: 'SYSTEM' };
      }),
    }));

    return updatedTable;
  }
}
