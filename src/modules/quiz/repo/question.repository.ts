import { DataSource, Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { Question } from "../entity/question.entity";

@Injectable()
export class QuestionRepository extends Repository<Question> {
    constructor(dataSource: DataSource) {
        super(Question, dataSource.createEntityManager());
    }
}