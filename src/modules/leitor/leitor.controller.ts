import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Leitor } from './leitor.entity';

import { LeitorService } from './leitor.service';

@Controller('leitor')
export class LeitorController {
  constructor(private leitorService: LeitorService) {}

  @Get()
  async listLeitor(@Query() query: { equipamentoId: string }) {
    return this.leitorService.list(query.equipamentoId);
  }

  @Post()
  async saveEquipamento(@Body() leitor: Leitor) {
    return this.leitorService.save(leitor);
  }

  @Post('delete')
  async deleteEquipamento(@Body() leitores: { ids: string[] }) {
    return this.leitorService.delete(leitores.ids);
  }
}
