import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
/**
 * Service dealing with mongo config based operations.
 *
 * @class
 */
@Injectable()
export class MongoConfigService {
  constructor(private configService: ConfigService) {}

  get host(): string {
    return this.configService.get<string>('mongo.host');
  }
  get port(): number {
    return Number(this.configService.get<number>('mongo.port'));
  }
  get db(): string {
    return this.configService.get<string>('mongo.db');
  }
  get user(): string {
    return this.configService.get<string>('mongo.user');
  }
  get password(): string {
    return this.configService.get<string>('mongo.password');
  }
}
