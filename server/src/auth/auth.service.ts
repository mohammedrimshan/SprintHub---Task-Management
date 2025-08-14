import { Injectable, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/user/users.service';
import * as bcrypt from 'bcrypt';
import { OtpService } from 'src/otp/otp.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private otpService: OtpService,
  ) {}

  async signupRequest(email: string, password: string, name: string) {
    const existingUser = await this.usersService.findByEmail(email);
    if (existingUser) throw new BadRequestException('User already exists.');

    await this.otpService.generateAndSendOtp(email, name);
    return { message: 'OTP sent successfully' };
  }

  async signupVerify(
    email: string,
    otp: string,
    password: string,
    name: string,
  ) {
    await this.otpService.verifyOtp(email, otp);

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.usersService.create({
      email,
      password: hashedPassword,
      name,
    });

    return {
      message: 'User registered successfully',
      data: this.generateToken(user),
    };
  }

  async login(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password)))
      throw new BadRequestException('Invalid credentials.');
    if (user.blocked) throw new BadRequestException('User is blocked.');

    return { message: 'Login successful', data: this.generateToken(user) };
  }

  private generateToken(user: any) {
    const payload = { email: user.email, sub: user._id, role: user.role };
    return { access_token: this.jwtService.sign(payload) };
  }
}
