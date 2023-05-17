import { Module } from '@nestjs/common';
import { QuizController } from '../controller/quiz.controller';
import { QuizeService } from '../service/quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from '../entity/quize.entity';

@Module({
    controllers: [QuizController],
    imports: [TypeOrmModule.forFeature([Quiz])],
    providers: [QuizeService]
})
export class QuizModule {}
