import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types, Schema as MongooseSchema } from 'mongoose';
import { v4 } from 'uuid';

export type TodoDocument = HydratedDocument<Todo>;

@Schema({ collection: 'todos', timestamps: true })
export class Todo {
  @Prop({
    default: function () {
      return v4().toLocaleUpperCase();
    },
    required: false,
  })
  id: string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  dueDate: string;

  @Prop()
  project: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  userId: Types.ObjectId;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
