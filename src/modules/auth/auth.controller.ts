import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { promises } from 'dns';
import { JwtAuthGuard } from './jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@Request() request): Promise<any> {
        return this.authService.generateToken(request.user)
    }

    @UseGuards(JwtAuthGuard)
    @Get('/user')
    async user(@Request() request): Promise<any> {
        return request.user;
    }
}
