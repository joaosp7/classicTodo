import { PartialType } from '@nestjs/mapped-types';
import { SignInAuthDto } from './signInAuth.dto';

export class UpdateAuthDto extends PartialType(SignInAuthDto) {}
