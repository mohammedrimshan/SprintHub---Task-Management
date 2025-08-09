import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import envConfig from './config/env.config';
import databaseConfig from './config/database.config';

import { CommonModule } from './common/common.module';
import { UsersModule } from './user/users.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [envConfig, databaseConfig],
    }),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('database.uri'),
        ...configService.get('database.options'),
      }),
      inject: [ConfigService],
    }),

    CommonModule,
    DatabaseModule,
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
