import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { NodeController } from './node.controller';
import { NodeService } from './node.service';

@Module({
  controllers: [NodeController],
  providers: [NodeService],
  imports: [HttpModule],
  exports: [NodeService],
})
export class NodeModule {}
