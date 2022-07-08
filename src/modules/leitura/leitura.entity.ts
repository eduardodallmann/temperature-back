import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

import { Leitor } from '../leitor/leitor.entity';

export enum StatusLeitura {
  DENTRO = 'DENTRO',
  ACIMA = 'ACIMA',
  FORA = 'FORA',
}

export type QueryLeitura = {
  equipamentoId: string;
  dataInicial: Date;
  dataFinal: Date;
};

@Entity('leitura')
export class Leitura extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ nullable: false, type: 'timestamp' })
  data: Date;

  @Column({ nullable: false, type: 'decimal', precision: 5, scale: 2 })
  temperatura: number;

  @Column({ nullable: false, type: 'varchar' })
  status: StatusLeitura;

  @ManyToOne((_) => Leitor, (leitor) => leitor.id, {
    nullable: false,
  })
  leitor: Leitor;
}
