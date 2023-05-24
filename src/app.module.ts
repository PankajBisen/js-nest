import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz/module/quiz.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfigAsync } from './modules/config/typeorm.config';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.modules';
import { AuthService } from './modules/auth/auth.service';
import { AuthController } from './modules/auth/auth.controller';

@Module({
  imports: [
    QuizModule,
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
                