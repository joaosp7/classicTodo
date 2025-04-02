import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username: string;
  @IsNotEmpty()
  @Transform(({ value }) => (value = 'oi'))
  password: string;
}
