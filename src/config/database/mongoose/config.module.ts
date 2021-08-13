import { Module } from '@nestjs/common';
import { MongooseConfigService } from './config.service';
import { MongoConfigService } from '../mongo/config.service';
import { MongoConfigModule } from '../mongo/config.module';
import { MongooseModule } from '@nestjs/mongoose';

/**
 * Import and provide app configuration related classes.
 *
 * @module
 */
@Module({
  imports: [
    MongoConfigModule,
    MongooseModule.forRootAsync({
      imports: [MongooseConfigModule],
      useExisting: MongooseConfigService,
    }),
  ],
  providers: [MongoConfigService, MongooseConfigService],
  exports: [MongooseConfigService],
})
export class MongooseConfigModule {}
