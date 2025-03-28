import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from '../schemas/todo.schema';
import { Model } from 'mongoose';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) {}

  async create(createTodoDto: CreateTodoDto) {
    const todo = new this.todoModel({ ...createTodoDto });
    return await todo.save();
  }

  async findAll() {
    return await this.todoModel.find();
  }

  async findOne(id: string) {
    console.log(id + 'TODOOOOOO');
    return await this.todoModel.findOne({ id });
  }
}
