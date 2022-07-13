import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquipamentoController } from './equipamento.controller';
import { Equipamento } from './equipamento.entity';
import { EquipamentoService } from './equipamento.service';

@Module({
  imports: [TypeOrmModule.forFeature([Equipamento])],
  providers: [EquipamentoService],
  controllers: [EquipamentoController],
  exports: [EquipamentoService, TypeOrmModule.forFeature([Equipamento])],
})
export class EquipamentoModule {}
