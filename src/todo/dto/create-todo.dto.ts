import { IsISO8601, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty()
  title: string;
  @IsOptional()
  description?: string;
  @IsNotEmpty()
  @IsISO8601()
  dueDate: Date;
  @IsOptional()
  project?: string;
}
