import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import moment from 'moment';
import { Between, Repository } from 'typeorm';
import { EquipamentoService } from '../equipamento/equipamento.service';
import { Leitura, QueryLeitura } from '../leitura/leitura.entity';
import { Leitor } from './leitor.entity';

@Injectable()
export class LeitorService {
  constructor(
    @InjectRepository(Leitor)
    private leitorRepository: Repository<Leitor>,
    private equipamentoService: EquipamentoService,
  ) {}

  async list(equipamento: string) {
    return this.equipamentoService.getEquipamentoWithLeitores(equipamento);
  }

  async getByEquipamento(id: string) {
    return this.leitorRepository.find({
      where: { equipamento: { id } },
    });
  }

  async getById(leitorId: string) {
    return this.leitorRepository.findOneByOrFail({ id: leitorId });
  }

  async save(leitor: Leitor) {
    return this.leitorRepository.save(leitor);
  }

  async delete(ids: string[]) {
    return this.leitorRepository.delete(ids);
  }

  private media(arr: number[]) {
    return arr.reduce((acc, n, _, a) => acc + n / a.length, 0);
  }

  async listLeituras(query: QueryLeitura) {
    const leitores = await this.leitorRepository.find({
      relations: { leituras: true },
      where: {
        equipamento: { id: query.equipamentoId },
        leituras: {
          data: Between(
            moment(query.dataInicial).hour(0).minute(0).second(0).toDate(),
            moment(query.dataFinal).hour(23).minute(59).second(59).toDate(),
          ),
        },
      },
    });

    const limiteToleranciaMaxima = this.media(
      leitores.map((d) => d.limiteToleranciaMaxima),
    );
    const toleranciaMaxima = this.media(
      leitores.map((d) => d.toleranciaMaxima),
    );
    const toleranciaMinima = this.media(
      leitores.map((d) => d.toleranciaMinima),
    );
    const limiteToleranciaMinima = this.media(
      leitores.map((d) => d.limiteToleranciaMinima),
    );

    const leituras: Leitura[] = [];
    leitores.forEach((d) =>
      leituras.push(
        ...d.leituras.filter((l) =>
          moment(l.data).isBetween(
            query.dataInicial,
            query.dataFinal,
            'days',
            '[]',
          ),
        ),
      ),
    );

    return {
      limiteToleranciaMaxima,
      toleranciaMaxima,
      toleranciaMinima,
      limiteToleranciaMinima,
      leituras,
    };
  }
}
