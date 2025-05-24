import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Todos, TodoSchema } from '../schemas/todo.schema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoRepository } from './repository/todo.repository';
import { Todo } from './entity/todo.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Todos.name, schema: TodoSchema }]),
    TypeOrmModule.forFeature([Todo]),
  ],
  controllers: [TodoController],
  providers: [TodoService, TodoRepository],
})
export class TodoModule {}
