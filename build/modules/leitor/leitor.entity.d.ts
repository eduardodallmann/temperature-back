import { BaseEntity } from 'typeorm';
import { Equipamento } from '../equipamento/equipamento.entity';
import { Leitura } from '../leitura/leitura.entity';
export declare class Leitor extends BaseEntity {
    id?: string;
    nome: string;
    frequencia: number;
    limiteToleranciaMaxima: number;
    toleranciaMaxima: number;
    toleranciaMinima: number;
    limiteToleranciaMinima: number;
    equipamento: Equipamento;
    leituras: Leitura[];
}
