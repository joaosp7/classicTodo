import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  username: string;

  @Column({ nullable: false })
  password: string;
}
