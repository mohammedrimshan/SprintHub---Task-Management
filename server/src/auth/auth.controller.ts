import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup-request')
  async signupRequest(@Body() body: { email: string; password: string; name: string }) {
    return this.authService.signupRequest(body.email, body.password, body.name);
  }

  @Post('signup-verify')
  async signupVerify(@Body() body: { email: string; otp: string; password: string; name: string }) {
    return this.authService.signupVerify(body.email, body.otp, body.password, body.name);
  }

  @Post('resend-otp')
  async resendOtp(@Body() body: { email: string }) {
    return this.authService.signupRequest(body.email, '', ''); // Reuse signupRequest for resend, password and name ignored
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    return this.authService.login(body.email, body.password);
  }
}
