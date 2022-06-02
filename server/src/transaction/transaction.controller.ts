import { Body, Controller, Post, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TransactionService } from './transaction.service';

@ApiTags('Transaction')
@Controller('transaction')
export class TransactionController {
  constructor(private transactionService: TransactionService) {}

  @Post()
  createTransaction(
    @Body() createTransactionDto: any,
    @Req() req: Express.Request,
  ) {
    return this.transactionService.createTransaction(createTransactionDto, req);
  }
}
