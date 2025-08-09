import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import mongoose from 'mongoose';
import chalk from 'chalk';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MongoConnect implements OnModuleInit, OnModuleDestroy {
  private readonly dbUrl: string;

  constructor(private readonly configService: ConfigService) {
    this.dbUrl = this.configService.get<string>('database.uri')!;
    console.log(chalk.blue('🔍 MongoDB URI:'), this.dbUrl);
  }

  async onModuleInit() {
    try {
      await mongoose.connect(this.dbUrl);
      console.log(chalk.bgGreen.black(' ✅ MONGODB ') + chalk.green(' Connected successfully!'));

      mongoose.connection.on('error', (error) => {
        console.error(chalk.bgRed.white(' ❌ MONGODB ') + chalk.red(` Connection error: ${error}`));
      });

      mongoose.connection.on('disconnected', () => {
        console.log(chalk.bgYellow.black(' ⚠️ MONGODB ') + chalk.yellow(' Disconnected'));
      });
    } catch (error) {
      console.error(chalk.bgRed.white(' 💥 MONGODB ') + chalk.red(` Connection failed: ${error}`));
      throw error;
    }
  }

  async onModuleDestroy() {
    try {
      await mongoose.disconnect();
      console.log(chalk.bgBlue.white(' 👋 MONGODB ') + chalk.blue(' Disconnected successfully'));
    } catch (error) {
      console.error(chalk.bgYellow.black(' ⚠️ MONGODB ') + chalk.yellow(` Disconnect error: ${error}`));
    }
  }
}
