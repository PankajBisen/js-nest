import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, Length, MATCHES, Matches } from "class-validator";
import { MESSAGE, REGEX } from "src/app.utils";
export class UserRegisterRequestDto {


    @ApiProperty({
        description: 'The name of the user ',
        example: 'Pankaj Bisen'
    })
    @IsNotEmpty()
    name: string;


    @ApiProperty({
        description: 'The email address of the user',
        example: 'pankajpkj7888@gmail.com'
    })
    @IsNotEmpty()
    @IsEmail()
    email: string;


    @ApiProperty({
        description: 'The Password of the user',
        example: 'Pankaj@7888'
    })
    @IsNotEmpty()
    @Length(8, 24)
    @Matches(REGEX.PASSWORD_RULE, { message: MESSAGE.PASSWORD_RULE_MESSAGE })
    password: string;


    @ApiProperty({
        description: 'Confirm the password',
        example: 'Pankaj@7888'
    })
    @IsNotEmpty()
    @Length(8, 24)
    @Matches(REGEX.PASSWORD_RULE, { message: MESSAGE.PASSWORD_RULE_MESSAGE })
    confirmPassword: string;
}