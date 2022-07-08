import { Leitor } from './leitor.entity';
import { LeitorService } from './leitor.service';
export declare class LeitorController {
    private leitorService;
    constructor(leitorService: LeitorService);
    listLeitor(query: {
        equipamentoId: string;
    }): Promise<import("../equipamento/equipamento.entity").Equipamento>;
    saveEquipamento(leitor: Leitor): Promise<Leitor>;
    deleteEquipamento(leitores: {
        ids: string[];
    }): Promise<import("typeorm").DeleteResult>;
}
