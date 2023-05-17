import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionController } from '../controller/question.controller';
import { QuestionService } from '../service/question.service';
import { Question } from '../entity/question.entity';

@Module({
    controllers: [QuestionController],
    imports: [TypeOrmModule.forFeature([Question])],
    providers: [QuestionService]
})
export class QuestionModule { }
