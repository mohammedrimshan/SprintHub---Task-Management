import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OtpDocument = Otp & Document;

@Schema({ timestamps: true })
export class Otp {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  code: string;

  @Prop({ required: true })
  expires: Date;

  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}

export const OtpSchema = SchemaFactory.createForClass(Otp);
