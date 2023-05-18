import { Injectable } from "@nestjs/common";
import { QuizRepository } from "../repo/quiz.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuizeDto } from "../dto/CreateQuize.dto";
import { Quiz } from "../entity/quize.entity";
import { FindOneOptions } from "typeorm";
import { Question } from "../entity/question.entity";


@Injectable()
export class QuizeService {
    constructor(@InjectRepository(Quiz) private readonly quizRepository: QuizRepository) { }

    async getAllQuiz(): Promise<Quiz[]> {
        return await this.quizRepository
            .createQueryBuilder('q')
            .leftJoinAndSelect('q.questions', 'qt')
            .leftJoinAndSelect('qt.options', 'o')
            // .take(1)
            .getMany();
    };

    async getQuizById(id: number): Promise<Quiz> {
        const quizId: FindOneOptions<Quiz> = {
            where: { id },
            relations: ['questions','questions.options']
        };
        return await this.quizRepository.findOne(quizId);
    }

    async createNewQuiz(quiz: CreateQuizeDto) {
        return await this.quizRepository.save(quiz);
    };
}