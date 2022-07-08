import { Body, Controller, Get, Post } from '@nestjs/common';
import { Equipamento } from './equipamento.entity';

import { EquipamentoService } from './equipamento.service';

@Controller('equipamento')
export class EquipamentoController {
  constructor(private equipamentoService: EquipamentoService) {}

  @Get()
  async listEquipamento() {
    return this.equipamentoService.list();
  }

  @Post()
  async saveEquipamento(@Body() equipamento: Equipamento) {
    return this.equipamentoService.save(equipamento);
  }

  @Post('delete')
  async deleteEquipamento(@Body() equipamentos: { ids: string[] }) {
    return this.equipamentoService.delete(equipamentos.ids);
  }
}
