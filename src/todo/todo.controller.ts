import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
  }

  @Get()
  findAll() {
    return this.todoService.findAll();
  }

  @Get('/:id')
  async findByID(@Param('id') id: string) {
    return await this.todoService.findOne(id);
  }

  @Patch('/:id')
  async updateTodo(@Param('id') id: string, @Body() newTodo: UpdateTodoDto) {
    return await this.todoService.updateOneById(id, newTodo);
  }

  @Delete('/:id')
  async deleteTodo(@Param('id') id: string) {
    return await this.todoService.deleteTodoById(id);
  }
}
