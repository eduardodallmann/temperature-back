import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Equipamento } from './equipamento.entity';

@Injectable()
export class EquipamentoService {
  constructor(
    @InjectRepository(Equipamento)
    private equipamentoRepository: Repository<Equipamento>,
  ) {}

  async list() {
    return this.equipamentoRepository.find();
  }

  async save(equipamento: Equipamento) {
    return this.equipamentoRepository.save(equipamento);
  }

  async delete(ids: string[]) {
    return this.equipamentoRepository.delete(ids);
  }

  async getEquipamentoWithLeitores(id: string) {
    return this.equipamentoRepository.findOne({
      where: { id },
      relations: ['leitores'],
    });
  }
}
