import { Body, Controller, Post, Req } from '@nestjs/common';
import { TableService } from './table.service';

@Controller('table')
export class TableController {
  constructor(private tableService: TableService) {}

  @Post()
  getFullTable(@Body() getFullTableDto: any, @Req() req: Express.Request) {
    return this.tableService.getFullTable(getFullTableDto, req);
  }
}
