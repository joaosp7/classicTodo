import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { MongooseModule } from '@nestjs/mongoose';
import { env } from './env/env';

@Module({
  imports: [TodoModule, MongooseModule.forRoot(env.CONECTION_STRING)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
