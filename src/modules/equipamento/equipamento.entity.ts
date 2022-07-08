import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { Leitor } from '../leitor/leitor.entity';

@Entity('equipamento')
export class Equipamento extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ nullable: false, type: 'varchar' })
  nome: string;

  @Column({ nullable: false, type: 'int' })
  permanencia: number;

  @OneToMany(() => Leitor, (leitor) => leitor.equipamento)
  leitores: Leitor[];
}
