import { Module } from '@nestjs/common';
import { TestModule } from './test/test.module';
import { MongooseConfigModule } from './config/database/mongoose/config.module';
import { ConfigModule } from '@nestjs/config';
import { AppConfigModule } from './config/app/config.module';
import { RedisCacheModule } from './config/database/cache/config.module';

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: !ENV ? `dev.env` : `${ENV}.env`,
    }),
    AppConfigModule,
    MongooseConfigModule,
    RedisCacheModule,
    TestModule,
  ],
})
export class AppModule {}
