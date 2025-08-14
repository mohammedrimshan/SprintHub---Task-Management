import { Injectable, BadRequestException } from '@nestjs/common';
import { OtpRepository } from './otp.repository';
import { EmailService } from 'src/email/email.service';

@Injectable()
export class OtpService {
  constructor(
    private readonly otpRepository: OtpRepository,
    private readonly emailService: EmailService,
  ) {}

  private generateOtp(): string {
    return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
  }

  private otpExpiryMinutes = 10;

  async generateAndSendOtp(email: string, userName: string) {
    const existingOtp = await this.otpRepository.findByEmail(email);
    if (existingOtp) {
      const updatedAt = existingOtp.updatedAt ?? new Date(0);
      const timePassed = (new Date().getTime() - updatedAt.getTime()) / 1000;

      if (timePassed < 60) {
        throw new BadRequestException(
          'Please wait before requesting another OTP.',
        );
      }
    }

    const otpCode = this.generateOtp();
    const expires = new Date(Date.now() + this.otpExpiryMinutes * 60 * 1000);

    await this.otpRepository.createOrUpdate(email, otpCode, expires);
    console.log(`✅ OTP for ${email}: ${otpCode}`);
    await this.emailService.sendEmail(email, 'Your Signup OTP', 'otp', {
      name: userName,
      otp: otpCode,
      expiry: this.otpExpiryMinutes,
    });

    return { message: `OTP sent to ${email}` };
  }

  async verifyOtp(email: string, otp: string) {
    const otpRecord = await this.otpRepository.findByEmail(email);

    if (!otpRecord) throw new BadRequestException('OTP not found.');
    if (otpRecord.expires < new Date()) {
      await this.otpRepository.delete(email);
      throw new BadRequestException('OTP expired.');
    }
    if (otpRecord.code !== otp) throw new BadRequestException('Invalid OTP.');
    await this.otpRepository.delete(email);
    return true;
  }
}
