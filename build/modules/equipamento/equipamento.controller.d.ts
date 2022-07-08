import { Equipamento } from './equipamento.entity';
import { EquipamentoService } from './equipamento.service';
export declare class EquipamentoController {
    private equipamentoService;
    constructor(equipamentoService: EquipamentoService);
    listEquipamento(): Promise<Equipamento[]>;
    saveEquipamento(equipamento: Equipamento): Promise<Equipamento>;
    deleteEquipamento(equipamentos: {
        ids: string[];
    }): Promise<import("typeorm").DeleteResult>;
}
