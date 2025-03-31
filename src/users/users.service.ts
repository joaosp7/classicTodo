import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '../schemas/users.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private todoModel: Model<User>) {}
  async create(createUserDto: CreateUserDto) {
    const user = await this.todoModel.create(createUserDto);
    return user.save();
  }

  async findOneUser(username: string) {
    return await this.todoModel.findOne({ username });
  }

  async update(updateUserDto: UpdateUserDto) {
    return await this.todoModel.updateOne(
      { username: updateUserDto.username },
      updateUserDto,
    );
  }

  async remove(username: string) {
    return await this.todoModel.deleteOne({ username });
  }
}
