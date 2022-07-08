import { Repository } from 'typeorm';
import { LeitorService } from '../leitor/leitor.service';
import { Leitura, StatusLeitura } from './leitura.entity';
export declare class LeituraService {
    private leituraRepository;
    private leitorService;
    constructor(leituraRepository: Repository<Leitura>, leitorService: LeitorService);
    private calcStatus;
    save(leitura: {
        temperatura: number;
        leitorId: string;
    }): Promise<{
        leitor: {
            id: string;
        };
        temperatura: number;
        data: Date;
        status: StatusLeitura;
    } & Leitura>;
}
