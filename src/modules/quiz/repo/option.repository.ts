import { DataSource, Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { Question } from "../entity/question.entity";
import { Option } from "../entity/option.entity";

@Injectable()
export class OptionRepository extends Repository<Option> {
    constructor(dataSource: DataSource) {
        super(Option, dataSource.createEntityManager());
    }
}