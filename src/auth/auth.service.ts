import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}
  async singIn(username: string, pass: string) {
    const user = await this.userService.findOneUser(username);
    if (!user) throw new Error('User dont exist!');
    if (user?.password !== pass) throw new UnauthorizedException();
    const payload = { sub: user._id, username: user.username };

    return { access_token: await this.jwtService.signAsync(payload) };
  }
}
