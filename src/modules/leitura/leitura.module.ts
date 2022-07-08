import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeitorModule } from '../leitor/leitor.module';

import { LeituraController } from './leitura.controller';
import { Leitura } from './leitura.entity';
import { LeituraService } from './leitura.service';

@Module({
  imports: [LeitorModule, TypeOrmModule.forFeature([Leitura])],
  providers: [LeituraService],
  controllers: [LeituraController],
  exports: [TypeOrmModule.forFeature([Leitura])],
})
export class LeituraModule {}
