import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquipamentoModule } from '../equipamento/equipamento.module';

import { LeitorController } from './leitor.controller';
import { Leitor } from './leitor.entity';
import { LeitorService } from './leitor.service';

@Module({
  imports: [EquipamentoModule, TypeOrmModule.forFeature([Leitor])],
  providers: [LeitorService],
  controllers: [LeitorController],
  exports: [LeitorService, TypeOrmModule.forFeature([Leitor])],
})
export class LeitorModule {}
