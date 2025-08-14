import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  // =====================
  // App & Server
  // =====================
  port: parseInt(process.env.PORT ?? '3000', 10),

  // =====================
  // Database
  // =====================
  mongoUri: process.env.MONGO_URI ?? 'mongodb://localhost:27017/sprinthub',

  // =====================
  // JWT Auth
  // =====================
  jwtSecret: process.env.JWT_SECRET ?? 'defaultSecretKey',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN ?? '3600s',

  // =====================
  // OTP Config
  // =====================
  otpExpiryMinutes: parseInt(process.env.OTP_EXPIRY_MINUTES ?? '10', 10),
  otpResendCooldownSeconds: parseInt(process.env.OTP_RESEND_COOLDOWN_SECONDS ?? '60', 10),

  // =====================
  // SMTP / Email Config
  // =====================
  smtpHost: process.env.SMTP_HOST ?? '',
  smtpPort: parseInt(process.env.SMTP_PORT ?? '465', 10),
  smtpUser: process.env.SMTP_USER ?? '',
  smtpPassword: process.env.SMTP_PASSWORD ?? '',
  emailFrom: process.env.EMAIL_FROM ?? '',
  
  // =====================
  // Frontend URL
  // =====================
  frontendUrl: process.env.FRONTEND_URL ?? 'http://localhost:3000',
}));
