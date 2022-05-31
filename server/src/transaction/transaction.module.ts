import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { NodeModule } from '../node/node.module';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';

@Module({
  controllers: [TransactionController],
  providers: [TransactionService],
  imports: [NodeModule, HttpModule],
})
export class TransactionModule {}
