import { Injectable } from "@nestjs/common";
import { CreateQuizeDto } from "../dto/CreateQuize.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { QuizRepository } from "../repo/quiz.repository";
import { QuestionRepository } from "../repo/question.repository";
import { CreateQuestionDto } from "../dto/create-question.dto";
import { Question } from "../entity/question.entity";
import { Quiz } from "../entity/quize.entity";


@Injectable()
export class QuestionService {
    constructor(@InjectRepository(Question) private readonly questionRepository: QuestionRepository) { }

    async createQuestion(question: CreateQuestionDto, quiz:Quiz): Promise<Question> {
        const newQuestion = await this.questionRepository.save({
            question : question.question
        });
        quiz.questions = [newQuestion,...quiz.questions];
            await quiz.save()
        return newQuestion;
    }
}