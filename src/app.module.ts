import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { MongooseModule } from '@nestjs/mongoose';
import { env } from './env/env';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './db/data-source';

@Module({
  imports: [
    TodoModule,
    MongooseModule.forRoot(env.CONECTION_STRING),
    UsersModule,
    AuthModule,
    TypeOrmModule.forRoot(dataSourceOptions),
  ],
})
export class AppModule {}
