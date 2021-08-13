import { CacheModule, Module } from '@nestjs/common';
import { TestModule } from './test/test.module';
import * as redisStore from 'cache-manager-redis-store';
import { MongooseConfigModule } from './config/database/mongoose/config.module';
import { ConfigModule } from '@nestjs/config';
import { AppConfigModule } from './config/app/config.module';

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: !ENV ? `dev.env` : `${ENV}.env`,
    }),
    AppConfigModule,
    MongooseConfigModule,
    CacheModule.register({
      store: redisStore,
      host: 'localhost',
      port: 7000,
    }),
    TestModule,
  ],
})
export class AppModule {}
