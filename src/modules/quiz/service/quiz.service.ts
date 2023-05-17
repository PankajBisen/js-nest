import { Injectable } from "@nestjs/common";
import { QuizRepository } from "../repo/quiz.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuizeDto } from "../dto/CreateQuize.dto";
import { Quiz } from "../entity/quize.entity";
import { FindOneOptions } from "typeorm";


@Injectable()
export class QuizeService {
    constructor(@InjectRepository(Quiz) private readonly quizRepository: QuizRepository) { }

    getAllQuiz() {
        return [1, 2, 3];
    };

    async getQuizById(id: number): Promise<Quiz>{
        const quizId: FindOneOptions<Quiz> = { where: { id } };
        return await this.quizRepository.findOne(quizId);
    }
    

    async createNewQuiz(quiz: CreateQuizeDto) {
        return await this.quizRepository.save(quiz);
    };
}