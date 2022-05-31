import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { NodeService } from './node.service';

@ApiTags('Node')
@Controller('node')
export class NodeController {
  constructor(private nodeService: NodeService) {}

  @Get()
  @ApiResponse({
    description: 'All Blockchain Nodes',
    status: 200,
  })
  getAllNodes() {
    return this.nodeService.getAllNodes();
  }
}
