import { Module } from '@nestjs/common';
import { QuizController } from '../controller/quiz.controller';
import { QuizeService } from '../service/quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from '../entity/quize.entity';
import { QuestionController } from '../controller/question.controller';
import { OptionController } from '../controller/option.controller';
import { Question } from '../entity/question.entity';
import { Option } from '../entity/option.entity';
import { QuestionService } from '../service/question.service';
import { OptionService } from '../service/option.service';

@Module({
    controllers: [QuizController,QuestionController,OptionController],
    imports: [TypeOrmModule.forFeature([Quiz,Question,Option])],
    providers: [QuizeService,QuestionService,OptionService]
})
export class QuizModule {}
