import { Body, Controller, Get, HttpCode, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { QuizeService } from '../service/quiz.service';
import { CreateQuizeDto } from '../dto/CreateQuize.dto';
import { Quiz } from '../entity/quize.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Quiz')
@Controller('quiz')
export class QuizController {
    constructor(private readonly quizService: QuizeService) { }

    @Get('/')
    async getAllQuiz(): Promise<Quiz[]> {
        return await this.quizService.getAllQuiz();
    }

    @Get('/:id')
    async getQuizById(@Param('id', ParseIntPipe) id: number):Promise<Quiz> {
        return await this.quizService.getQuizById(id);
    }

    @Post('/create')
    @UsePipes(ValidationPipe)
    async createQuiz(@Body() quizeData: CreateQuizeDto) {
        return await this.quizService.createNewQuiz(quizeData);
    }
}
