import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) { }

    async validateUserCredential(email: string, password: string): Promise<any> {
        const user = await this.userService.getUserByEmail(email);
        if (!user) throw new BadRequestException();
        const isMatch = await bcrypt.compare(password, user.password);
        console.log(isMatch)
        if (!(await bcrypt.compare(password, user.password))) {
            throw new UnauthorizedException();
        }
        return user;
    }

    generateToken(user: any) {
        return {
            access_token: this.jwtService.sign({
                name: user.name,
                sub: user.id
            })
        };
    }
}
