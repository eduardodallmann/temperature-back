import { Repository } from 'typeorm';
import { Leitura } from './leitura.entity';
export declare class LeituraRepository extends Repository<Leitura> {
    listLeituras(congregacaoId: string): Promise<{
        leituras: Leitura[];
        total: number;
    }>;
}
