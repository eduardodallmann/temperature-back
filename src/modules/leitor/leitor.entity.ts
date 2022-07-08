import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Equipamento } from '../equipamento/equipamento.entity';
import { Leitura } from '../leitura/leitura.entity';

@Entity('leitor')
export class Leitor extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ nullable: false, type: 'varchar' })
  nome: string;

  @Column({ nullable: false, type: 'int' })
  frequencia: number;

  @Column({ nullable: false, type: 'decimal', precision: 5, scale: 2 })
  limiteToleranciaMaxima: number;

  @Column({ nullable: false, type: 'decimal', precision: 5, scale: 2 })
  toleranciaMaxima: number;

  @Column({ nullable: false, type: 'decimal', precision: 5, scale: 2 })
  toleranciaMinima: number;

  @Column({ nullable: false, type: 'decimal', precision: 5, scale: 2 })
  limiteToleranciaMinima: number;

  @ManyToOne((_) => Equipamento, (quipamento) => quipamento.id, {
    nullable: false,
  })
  equipamento: Equipamento;

  @OneToMany(() => Leitura, (leitura) => leitura.leitor)
  leituras: Leitura[];
}
