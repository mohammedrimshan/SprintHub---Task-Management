import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  port: parseInt(process.env.PORT ?? '3000', 10),
  mongoUri: process.env.MONGO_URI ?? 'mongodb://localhost:27017/sprinthub',
  jwtSecret: process.env.JWT_SECRET ?? 'defaultSecretKey',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN ?? '3600s',
}));
