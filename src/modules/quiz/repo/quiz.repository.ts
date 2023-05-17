import { DataSource, Repository } from "typeorm";
import { Quiz } from "../entity/quize.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class QuizRepository extends Repository<Quiz> {
    constructor(dataSource: DataSource) {
        super(Quiz, dataSource.createEntityManager());
    }
}