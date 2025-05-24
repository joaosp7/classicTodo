import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { MongooseModule } from '@nestjs/mongoose';
import { env } from './env/env';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TodoModule,
    MongooseModule.forRoot(env.CONECTION_STRING),
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
