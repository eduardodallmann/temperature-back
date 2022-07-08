import { LeitorService } from '../leitor/leitor.service';
import { QueryLeitura } from './leitura.entity';
import { LeituraService } from './leitura.service';
export declare class LeituraController {
    private leituraService;
    private leitorService;
    constructor(leituraService: LeituraService, leitorService: LeitorService);
    saveLeitura(leitura: {
        temperatura: number;
        leitorId: string;
    }): Promise<{
        leitor: {
            id: string;
        };
        temperatura: number;
        data: Date;
        status: import("./leitura.entity").StatusLeitura;
    } & import("./leitura.entity").Leitura>;
    listLeituras(query: QueryLeitura): Promise<{
        limiteToleranciaMaxima: number;
        toleranciaMaxima: number;
        toleranciaMinima: number;
        limiteToleranciaMinima: number;
        leituras: import("./leitura.entity").Leitura[];
    }>;
}
