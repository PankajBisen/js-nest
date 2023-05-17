import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateQuestionDto } from "../dto/create-question.dto";
import { QuestionService } from "../service/question.service";
import { Question } from "../entity/question.entity";
import { QuizeService } from "../service/quiz.service";

@Controller('question')
export class QuestionController {
    constructor(
        private  questionService: QuestionService,
        private  quizService: QuizeService){}

    @Post('')   
    @UsePipes(ValidationPipe)
    async saveQuestion(@Body() question: CreateQuestionDto): Promise<Question> {
        const quiz = await this.quizService.getQuizById(question.quizId)
        return await this.questionService.createQuestion(question,quiz);
    }
}
