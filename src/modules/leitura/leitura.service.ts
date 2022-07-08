import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Leitor } from '../leitor/leitor.entity';
import { LeitorService } from '../leitor/leitor.service';
import { LeituraGateway } from './events.gateway';
import { Leitura, StatusLeitura } from './leitura.entity';

@Injectable()
export class LeituraService {
  constructor(
    @InjectRepository(Leitura)
    private leituraRepository: Repository<Leitura>,
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
      return StatusLeitura.ACIMA;
    }
    if (temperatura < toleranciaMinima || temperatura > toleranciaMaxima) {
      return StatusLeitura.FORA;
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
}
