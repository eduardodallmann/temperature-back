import { Repository } from 'typeorm';
import { EquipamentoService } from '../equipamento/equipamento.service';
import { Leitura, QueryLeitura } from '../leitura/leitura.entity';
import { Leitor } from './leitor.entity';
export declare class LeitorService {
    private leitorRepository;
    private equipamentoService;
    constructor(leitorRepository: Repository<Leitor>, equipamentoService: EquipamentoService);
    list(equipamento: string): Promise<import("../equipamento/equipamento.entity").Equipamento>;
    getById(leitorId: string): Promise<Leitor>;
    save(leitor: Leitor): Promise<Leitor>;
    delete(ids: string[]): Promise<import("typeorm").DeleteResult>;
    private media;
    listLeituras(query: QueryLeitura): Promise<{
        limiteToleranciaMaxima: number;
        toleranciaMaxima: number;
        toleranciaMinima: number;
        limiteToleranciaMinima: number;
        leituras: Leitura[];
    }>;
}
