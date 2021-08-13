import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppConfigService } from "./config/app/config.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Takeopp Backend Service')
    .setDescription('The Takeopp API Swagger Documentation')
    .setVersion('1.0')
    .addTag('takeopp')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const appConfigService = app.get(AppConfigService);

  await app.listen(appConfigService.port);
}
bootstrap();
