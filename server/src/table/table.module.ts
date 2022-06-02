import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { NodeModule } from 'src/node/node.module';
import { UserModule } from 'src/user/user.module';
import { TableController } from './table.controller';
import { TableService } from './table.service';

@Module({
  controllers: [TableController],
  providers: [TableService],
  imports: [HttpModule, NodeModule, UserModule],
})
export class TableModule {}
