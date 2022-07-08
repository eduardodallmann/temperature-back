import { Repository } from 'typeorm';
import { Leitor } from './leitor.entity';
export declare class LeitorRepository extends Repository<Leitor> {
    listLeitors(congregacaoId: string): Promise<{
        leitores: Leitor[];
        total: number;
    }>;
}
