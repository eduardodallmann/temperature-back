import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Equipamento } from './modules/equipamento/equipamento.entity';
import { EquipamentoModule } from './modules/equipamento/equipamento.module';
import { Leitor } from './modules/leitor/leitor.entity';
import { LeitorModule } from './modules/leitor/leitor.module';
import { Leitura } from './modules/leitura/leitura.entity';
import { LeituraModule } from './modules/leitura/leitura.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: `${process.env.DATABASE_URL}?sslmode=require`,
      entities: [Equipamento, Leitor, Leitura],
      synchronize: true,
      // logging: ['query', 'error'],
    }),
    EquipamentoModule,
    LeitorModule,
    LeituraModule,
  ],
  controllers: [AppController],
  providers: [ConfigService],
})
export class AppModule {}
