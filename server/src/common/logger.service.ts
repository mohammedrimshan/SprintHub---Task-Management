import { Injectable, LoggerService as NestLoggerService, Logger } from '@nestjs/common';
import chalk from 'chalk';

@Injectable()
export class AppLogger implements NestLoggerService {
  private readonly logger = new Logger('SprintHub');

  log(message: string) {
    this.logger.log(chalk.blue(message));
  }

  error(message: string, trace?: string) {
    this.logger.error(chalk.red(message), trace);
  }

  warn(message: string) {
    this.logger.warn(chalk.yellow(message));
  }

  debug(message: string) {
    this.logger.debug(chalk.green(message));
  }

  verbose(message: string) {
    this.logger.verbose(chalk.magenta(message));
  }
}
