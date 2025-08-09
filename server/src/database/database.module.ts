import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoConnect } from './database.service';

@Module({
  imports: [MongooseModule.forFeature([])],
  providers: [MongoConnect],
  exports: [MongoConnect],
})
export class DatabaseModule {}
