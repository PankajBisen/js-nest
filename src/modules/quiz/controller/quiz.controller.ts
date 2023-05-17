import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { QuizeService } from '../service/quiz.service';
import { CreateQuizeDto } from '../dto/CreateQuize.dto';

@Controller('quiz')
export class QuizController {
    constructor(private readonly quizService: QuizeService) { }

    @Get('/')
    getAllQuiz() {
        return this.quizService.getAllQuiz();
    }

    @Post('/create')
    @UsePipes(ValidationPipe)
    async createQuiz(@Body() quizeData: CreateQuizeDto) {
        return await this.quizService.createNewQuiz(quizeData);
    }
}
