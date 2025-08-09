import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/user/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signup(email: string, password: string, name: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.usersService.create({ email, password: hashedPassword, name });
    return this.generateToken(user);
  }

  async login(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid credentials');
    }
    if (user.blocked) throw new Error('User is blocked');
    return this.generateToken(user);
  }

  private generateToken(user: any) {
    const payload = { email: user.email, sub: user._id, role: user.role };
    return { access_token: this.jwtService.sign(payload) };
  }
}