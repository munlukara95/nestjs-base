import { CacheModule, Module } from '@nestjs/common';
import { RedisConfigModule } from '../redis/config.module';
import { RedisCacheConfigService } from './config.service';
import { RedisConfigService } from '../redis/config.service';

/**
 * Import and provide redis-cache configuration related classes.
 *
 * @module
 */
@Module({
  imports: [
    RedisConfigModule,
    CacheModule.register({
      imports: [RedisCacheModule],
      useExisting: RedisCacheConfigService,
    }),
  ],
  providers: [RedisConfigService, RedisCacheConfigService],
  exports: [RedisCacheConfigService],
})
export class RedisCacheModule {}
