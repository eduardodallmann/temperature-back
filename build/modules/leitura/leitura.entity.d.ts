import { BaseEntity } from 'typeorm';
import { Leitor } from '../leitor/leitor.entity';
export declare enum StatusLeitura {
    DENTRO = "DENTRO",
    ACIMA = "ACIMA",
    FORA = "FORA"
}
export declare type QueryLeitura = {
    equipamentoId: string;
    dataInicial: Date;
    dataFinal: Date;
};
export declare class Leitura extends BaseEntity {
    id?: string;
    data: Date;
    temperatura: number;
    status: StatusLeitura;
    leitor: Leitor;
}
