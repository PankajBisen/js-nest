import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { OptionService } from "../service/option.service";
import { CreateOptionDto } from "../dto/creare-option.dto";
import { QuestionService } from "../service/question.service";

@Controller('question/option')
export class OptionController {
    constructor(
        private optionService: OptionService, private questionService: QuestionService) { }

    @Post('')
    @UsePipes(ValidationPipe)
    async saveOptionToQuestion(@Body() createOptionDto: CreateOptionDto) {
        const question = await this.questionService.findQuestionById(createOptionDto.questionId);
        const option = await this.optionService.creatOption(createOptionDto,question)
        return { question, createOptionDto, option};
    }
}
