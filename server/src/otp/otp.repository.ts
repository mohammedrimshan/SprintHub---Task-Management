import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Otp, OtpDocument } from './schemas/otp.schema';

@Injectable()
export class OtpRepository {
  constructor(@InjectModel(Otp.name) private otpModel: Model<OtpDocument>) {}

  async findByEmail(email: string): Promise<Otp | null> {
    return this.otpModel.findOne({ email }).exec();
  }

  async createOrUpdate(email: string, code: string, expires: Date) {
    return this.otpModel.findOneAndUpdate(
      { email },
      { code, expires },
      { upsert: true, new: true }
    ).exec();
  }

  async delete(email: string) {
    return this.otpModel.deleteOne({ email }).exec();
  }
}
