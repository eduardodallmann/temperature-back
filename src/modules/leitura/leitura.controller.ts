import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { LeitorService } from '../leitor/leitor.service';
import { QueryLeitura } from './leitura.entity';

import { LeituraService } from './leitura.service';

@Controller('leitura')
export class LeituraController {
  constructor(
    private leituraService: LeituraService,
    private leitorService: LeitorService,
  ) {}

  @Post()
  async saveLeitura(
    @Body() leitura: { temperatura: number; leitorId: string },
  ) {
    return this.leituraService.save(leitura);
  }

  @Get()
  async listLeituras(@Query() query: QueryLeitura) {
    console.log(query);
    return this.leitorService.listLeituras(query);
  }
}
