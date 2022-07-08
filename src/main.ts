import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'typeorm';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  app.enableCors({ exposedHeaders: ['Content-Disposition'] });
  app.useGlobalPipes(
    new ValidationPipe({
      stopAtFirstError: true,
      transformOptions: {
        // enableImplicitConversion causa conversão de objetos em string, não usar
        // enableImplicitConversion: true,
      },
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
