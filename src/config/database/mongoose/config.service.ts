import { Injectable } from '@nestjs/common';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';
import { MongoConfigService } from '../mongo/config.service';
import MongooseConfigUtil from './config.util';
/**
 * Service dealing with mongoose config based operations.
 *
 * @class
 */
@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(private mongoConfigService: MongoConfigService) {}

  createMongooseOptions(): MongooseModuleOptions {
    const mongooseConnectionUri =
      MongooseConfigUtil.createMongooseConnectionString(
        this.mongoConfigService.user,
        this.mongoConfigService.password,
        this.mongoConfigService.host,
        this.mongoConfigService.port,
        this.mongoConfigService.db,
      );

    return {
      uri: mongooseConnectionUri,
      authSource: 'admin',
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoCreate: true,
    };
  }
}
