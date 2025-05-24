import { CreateTodoDto } from '../dto/create-todo.dto';
import { UpdateTodoDto } from '../dto/update-todo.dto';
import { Todo } from '../entity/todo.entity';

export interface ITodoRepository {
  findById(id: number): Promise<Todo | null>;

  getAll(): Promise<Todo[]>;

  createTodo(todo: CreateTodoDto): Promise<void>;

  updateOneById(id: number, updatedTodo: UpdateTodoDto): Promise<void>;

  deleteOneById(id: number): Promise<void>;
}
