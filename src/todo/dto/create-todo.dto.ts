import { IsDate, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty()
  title: string;
  @IsOptional()
  description?: string;
  @IsNotEmpty()
  @IsDate()
  dueDate: Date;
  @IsOptional()
  project?: string;
}
