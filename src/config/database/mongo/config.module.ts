import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import config from './config';
import { MongoConfigService } from './config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
/**
 * Import and provide mongo configuration related classes.
 *
 * @module
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      validationSchema: Joi.object({
        MONGO_HOST: Joi.string().default('localhost'),
        MONGO_PORT: Joi.number().default(27017),
        MONGO_DB: Joi.string().default('development'),
        MONGO_USER: Joi.string().default('admin'),
        MONGO_PASSWORD: Joi.string().default('password'),
      }),
    }),
  ],
  providers: [ConfigService, MongoConfigService],
  exports: [ConfigService, MongoConfigService],
})
export class MongoConfigModule {}
