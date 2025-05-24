import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodoSchema } from '../schemas/todo.schema';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }]),
    TypeOrmModule.forFeature([Todo]),
  ],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
