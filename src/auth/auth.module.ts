import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [ PassportModule],
  providers: [AuthService, LocalStrategy,UsersService]
})
export class AuthModule {}
