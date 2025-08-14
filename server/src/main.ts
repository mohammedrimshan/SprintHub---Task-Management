import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import chalk from 'chalk';
import { AllExceptionsFilter } from './common/filter/exceptions.filter';
import { SuccessResponseInterceptor } from './common/interceptor/success-response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalInterceptors(new SuccessResponseInterceptor());
  const configService = app.get(ConfigService);
  const port = configService.get<number>('app.port') ?? 3000;
  await app.listen(port);

  console.log(
    chalk.bgGreen.black(' ✅ CONNECTED ') +
      chalk.green(`  App running on port ${port}`),
  );
}

bootstrap();
