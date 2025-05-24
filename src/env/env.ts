import z from 'zod';
import * as dotenv from 'dotenv';

dotenv.config();
const envSchema = z.object({
  MONGO_PASSWORD: z.string(),
  CONECTION_STRING: z.string(),
  JWT_SECRET: z.string(),
  POSTGRES_PASSWORD: z.string(),
  POSTGRES_HOST: z.string().default('localhost'),
  POSTGRES_PORT: z.number().default(5432),
  POSTGRES_USERNAME: z.string().optional().default('postgres'),
  PORT: z.number().optional().default(3000),
});

const envParse = envSchema.safeParse(process.env);

if (!envParse.success) {
  throw new Error('Invalid Enviromnent Variables! Please try again!');
}

export const env = envParse.data;
