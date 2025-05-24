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
import { GetUser } from '../decorators/getUser.decorator';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto, @GetUser('sub') userId: string) {
    return this.todoService.create(createTodoDto, userId);
  }

  @Post('postgres')
  async createTodo(@Body() createTodo) {
    return await this.todoService.createTodo(createTodo);
  }

  @Get('postgres')
  async findAllTodos() {
    return await this.todoService.getTodos();
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
