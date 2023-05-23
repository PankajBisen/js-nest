import { HttpStatus, ValidationPipe } from "@nestjs/common";

const PASSWORD_RULE = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/;

const PASSWORD_RULE_MESSAGE = 'Invalid Password'

const VALIDATION_PIPE = new ValidationPipe({
    errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
});

export const REGEX = {
    PASSWORD_RULE,
};

export const MESSAGE = {
    PASSWORD_RULE_MESSAGE
};

export const SETTINGS = {
    VALIDATION_PIPE
};