import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { QuestionRepository } from "../repo/question.repository";
import { CreateQuestionDto } from "../dto/create-question.dto";
import { Question } from "../entity/question.entity";
import { Quiz } from "../entity/quize.entity";
import { FindOneOptions } from "typeorm";


@Injectable()
export class QuestionService {

    constructor(@InjectRepository(Question) private readonly questionRepository: QuestionRepository) { }

    async createQuestion(question: CreateQuestionDto, quiz: Quiz): Promise<Question> {
        const newQuestion = await this.questionRepository.save({
            question: question.question
        });
        quiz.questions = [newQuestion, ...quiz.questions];
        await quiz.save()
        return newQuestion;
    }

    async findQuestionById(id: number): Promise<Question> {
        const questionId: FindOneOptions<Question> = {
            where: { id },
            relations: ['quiz','options']
        };
        return await this.questionRepository.findOne(questionId)
    }
}