import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserRegisterRequestDto } from "./dto/user-register.req.dto";
import { SETTINGS } from "src/app.utils";
import { User } from "./user.entity";
import { ApiBadRequestResponse, ApiCreatedResponse, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('User')
@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post('/register')
    @ApiCreatedResponse({ description: 'Created user object as respose', type: User })
    @ApiBadRequestResponse({ description: 'User cannot register .Try again!' })
    async doUserRegistration(@Body(SETTINGS.VALIDATION_PIPE) userRegister: UserRegisterRequestDto): Promise<User> {
        return await this.userService.doUserRegistration(userRegister);
    }
}