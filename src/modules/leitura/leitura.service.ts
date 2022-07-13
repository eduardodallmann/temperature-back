import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import moment from 'moment';
import { In, MoreThan, Repository } from 'typeorm';
import { EquipamentoService } from '../equipamento/equipamento.service';
import { Leitor } from '../leitor/leitor.entity';
import { LeitorService } from '../leitor/leitor.service';
import { LeituraGateway } from './events.gateway';
import { Leitura, ResponseDash, StatusLeitura } from './leitura.entity';

@Injectable()
export class LeituraService {
  constructor(
    @InjectRepository(Leitura)
    private leituraRepository: Repository<Leitura>,
    private equipamentoService: EquipamentoService,
    private leitorService: LeitorService,
    private gateway: LeituraGateway,
  ) {}

  private calcStatus(
    temperatura: number,
    {
      limiteToleranciaMaxima,
      limiteToleranciaMinima,
      toleranciaMaxima,
      toleranciaMinima,
    }: Leitor,
  ) {
    if (
      temperatura < limiteToleranciaMinima ||
      temperatura > limiteToleranciaMaxima
    ) {
      return StatusLeitura.FORA;
    }
    if (temperatura < toleranciaMinima || temperatura > toleranciaMaxima) {
      return StatusLeitura.ACIMA;
    }
    return StatusLeitura.DENTRO;
  }

  async save(leitura: { temperatura: number; leitorId: string }) {
    const leitor = await this.leitorService.getById(leitura.leitorId);

    const leituraSalva = await this.leituraRepository.save({
      leitor: { id: leitura.leitorId },
      temperatura: leitura.temperatura,
      data: new Date(),
      status: this.calcStatus(leitura.temperatura, leitor),
    });

    this.gateway.notification();

    return leituraSalva;
  }

  async getDash() {
    const equipamentos = await this.equipamentoService.list();

    const dashOk: ResponseDash[] = [];
    const dashBad: ResponseDash[] = [];

    for (const equipamento of equipamentos) {
      const leitores = await this.leitorService.getByEquipamento(
        equipamento.id,
      );
      const leitura = await this.leituraRepository.findOne({
        where: { leitor: { id: In(leitores.map((l) => l.id)) } },
        order: { data: 'DESC' },
      });

      if (leitura) {
        dashOk.push({
          temperatura: leitura.temperatura,
          hora: leitura.data.toISOString(),
          nome: equipamento.nome,
          status: leitura.status,
        });
      }

      const leituraBad = await this.leituraRepository.find({
        where: {
          leitor: { id: In(leitores.map((l) => l.id)) },
          status: StatusLeitura.FORA,
          data: MoreThan(moment().subtract(1, 'day').toDate()),
        },
        order: { data: 'DESC' },
      });

      if (leituraBad.length) {
        dashBad.push({
          temperatura: leituraBad[0].temperatura,
          hora: leituraBad[0].data.toISOString(),
          nome: equipamento.nome,
          status: StatusLeitura.FORA,
          qtdErros: leituraBad.length,
        });
      }
    }

    return { dashOk, dashBad };
  }
}
