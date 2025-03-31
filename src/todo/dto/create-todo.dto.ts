export class CreateTodoDto {
  title: string;
  description?: string;
  dueDate: Date;
  project?: string;
}
