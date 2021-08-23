import {
  CacheModuleOptions,
  CacheOptionsFactory,
  Injectable,
} from '@nestjs/common';
import { RedisConfigService } from '../redis/config.service';
import * as redisStore from 'cache-manager-redis-store';
import RedisConfigUtil from './config.util';

/**
 * Service dealing with redis-cache config based operations.
 *
 * @class
 */
@Injectable()
export class RedisCacheConfigService implements CacheOptionsFactory {
  constructor(private readonly redisConfigService: RedisConfigService) {}

  createCacheOptions(): CacheModuleOptions {
    const redisConnectionUri = RedisConfigUtil.createRedisCacheConnectionString(
      this.redisConfigService.password,
      this.redisConfigService.host,
      this.redisConfigService.port,
    );
    return {
      store: redisStore,
      url: redisConnectionUri,
    };
  }
}
