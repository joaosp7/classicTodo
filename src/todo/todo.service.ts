import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Todos } from '../schemas/todo.schema';
import { Model } from 'mongoose';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoRepository } from './repository/todo.repository';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todos.name) private todoModel: Model<Todos>,
    private readonly todoRepository: TodoRepository,
  ) {}

  async create(createTodoDto: CreateTodoDto, userId: string) {
    const todo = new this.todoModel({ ...createTodoDto, userId: userId });
    return await todo.save();
  }

  async findAll() {
    return await this.todoModel.find();
  }

  async findOne(id: string) {
    return await this.todoModel.findOne({ id });
  }

  async updateOneById(id: string, newTodo: UpdateTodoDto) {
    return await this.todoModel.updateOne({ id }, newTodo);
  }

  async deleteTodoById(id: string) {
    return await this.todoModel.deleteOne({ id });
  }

  async createTodo(createtodoDto: CreateTodoDto) {
    return await this.todoRepository.createTodo(createtodoDto);
  }

  async getTodos() {
    return await this.todoRepository.getAll();
  }

  async getOneTodo(id: number) {
    return await this.todoRepository.findById(id);
  }

  async updateOneTodo(dto: UpdateTodoDto, id: number) {
    return await this.todoRepository.updateOneById(id, dto);
  }

  async delete(id: number) {
    return await this.todoRepository.deleteOneById(id);
  }
}
