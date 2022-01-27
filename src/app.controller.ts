import { Controller, Get,Post ,Request, UseGuards} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  //POST Login
  @UseGuards(LocalAuthGuard)
  @Post('login')
  userLogin(@Request() req): any {
    return req.user;
  }


  @UseGuards(AuthenticatedGuard)
  @Get('protected')
  getHello(@Request() req:any): any{
    return req.user;
  }
}
