import { BaseEntity } from 'typeorm';
import { Leitor } from '../leitor/leitor.entity';
export declare class Equipamento extends BaseEntity {
    id?: string;
    nome: string;
    permanencia: number;
    leitores: Leitor[];
}
