import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [PassportModule, PassportModule, JwtModule.register({
    secret: process.env.SECRET,
    signOptions: {expiresIn: '60s'}
  })],
  providers: [AuthService, LocalStrategy, UsersService, SessionSerializer,JwtStrategy],
  exports:[AuthService,JwtStrategy]
})
export class AuthModule {}
