import { NestFactory, NestApplication } from '@nestjs/core';
import { AppModule } from './app.module';

import { EntityNotFoundExceptionFilter } from './filters/entity-not-found-exception.filter';
import { Logger } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true, });
  app.useGlobalFilters(new EntityNotFoundExceptionFilter());
  await app.listen(process.env.APP_PORT);
  Logger.log(`Application is listening on ${await app.getUrl()}`, NestApplication.name);
}
bootstrap();
