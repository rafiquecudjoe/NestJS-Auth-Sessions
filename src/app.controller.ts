import { Controller, Get,Post ,Request, UseGuards} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { JwtAuthGuard } from './auth/jwtauth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService:AuthService) {}


  //POST Login
  @UseGuards(LocalAuthGuard)
  @Post('login')
  userLogin(@Request() req): any {
    return this.authService.login(req.user); // TODO : return JWT Token
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Request() req:any): any{  //TODO : require a token and check if valid
    return req.user;
  }
}
