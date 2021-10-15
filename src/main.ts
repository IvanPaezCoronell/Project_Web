import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const looger = new Logger();
  app.useGlobalPipes(new ValidationPipe);
  await app.listen(3010);
  Logger.log('Server running in localHost:3010')
}
bootstrap();
