import { Injectable } from '@nestjs/common';
import { UpdateTodoDto } from '../dto/update-todo.dto';
import { Todo } from '../entity/todo.entity';
import { ITodoRepository } from './todo.repository.interface';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTodoDto } from '../dto/create-todo.dto';

@Injectable()
export class TodoRepository implements ITodoRepository {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  async createTodo(todo: CreateTodoDto): Promise<void> {
    try {
      const todoEntity = await this.todoRepository.create(todo);
      await this.todoRepository.save(todoEntity);
    } catch (err) {
      console.error('Error creating Todo: ', err);
      throw err;
    }
    return;
  }

  async findById(id: number): Promise<Todo | null> {
    const [todo] = await this.todoRepository.find({ where: { id } });
    if (!todo) return null;
    return todo;
  }
  async getAll(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }
  async updateOneById(id: number, updatedTodo: UpdateTodoDto): Promise<void> {
    try {
      await this.todoRepository.update({ id }, updatedTodo);
    } catch (err) {
      console.error('Problem updating todo: ', err);
      throw err;
    }
    return;
  }
  async deleteOneById(id: number): Promise<void> {
    try {
      await this.todoRepository.delete({ id });
    } catch (err) {
      console.error('Problem deleting Todo: ', err);
      throw err;
    }
  }
}
