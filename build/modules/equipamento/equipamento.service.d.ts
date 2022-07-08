import { Repository } from 'typeorm';
import { Equipamento } from './equipamento.entity';
export declare class EquipamentoService {
    private equipamentoRepository;
    constructor(equipamentoRepository: Repository<Equipamento>);
    list(): Promise<Equipamento[]>;
    save(equipamento: Equipamento): Promise<Equipamento>;
    delete(ids: string[]): Promise<import("typeorm").DeleteResult>;
    getEquipamentoWithLeitores(id: string): Promise<Equipamento>;
}
