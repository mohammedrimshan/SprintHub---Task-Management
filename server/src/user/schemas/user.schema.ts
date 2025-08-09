import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role } from 'src/common/interfaces/role.enum';
import * as bcrypt from 'bcrypt';

@Schema()
export class User extends Document {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  name: string;

  @Prop({ default: Role.USER })
  role: Role;

  @Prop({ default: false })
  blocked: boolean;

  @Prop()
  refreshToken?: string; 
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.methods.isRefreshTokenValid = async function (token: string): Promise<boolean> {
  if (!this.refreshToken) return false;
  return bcrypt.compare(token, this.refreshToken);
};
