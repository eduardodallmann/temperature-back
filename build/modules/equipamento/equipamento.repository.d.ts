import { Repository } from 'typeorm';
import { Equipamento } from './equipamento.entity';
export declare class EquipamentoRepository extends Repository<Equipamento> {
    listEquipamentos(): Promise<{
        equipamentos: Equipamento[];
        total: number;
    }>;
    saveEquipamentos(): Promise<string>;
}
