import { Module } from '@nestjs/common';
import { QuizController } from './controller/quiz.controller';
import { QuizeService } from './service/quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entity/quize.entity';
import { QuestionController } from './controller/question.controller';
import { QuestionService } from './service/question.service';
import { Question } from './entity/question.entity';

@Module({
    controllers: [QuizController,QuestionController],
    imports: [TypeOrmModule.forFeature([Quiz,Question])],
    providers: [QuizeService,QuestionService]
})
export class QuizModule {}
