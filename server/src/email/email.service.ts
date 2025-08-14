import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { emailTemplates } from './templates/template';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get<string>('app.smtpHost'),
      port: this.configService.get<number>('app.smtpPort'),
      secure: this.configService.get<number>('app.smtpPort') === 465,
      auth: {
        user: this.configService.get<string>('app.smtpUser'),
        pass: this.configService.get<string>('app.smtpPassword'),
      },
    });
  }

  async sendEmail(to: string, subject: string, templateName: string, context: any) {
    const templateFn = emailTemplates[templateName];
    if (!templateFn) throw new Error(`Template "${templateName}" not found`);

    const html = templateFn(context);

    await this.transporter.sendMail({
      from: this.configService.get<string>('app.emailFrom'),
      to,
      subject,
      html,
    });
  }
}
 