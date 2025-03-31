import z from 'zod';
import * as dotenv from 'dotenv';
dotenv.config();
const envSchema = z.object({
  DB_PASSWORD: z.string(),
  CONECTION_STRING: z.string(),
});

const envParse = envSchema.safeParse(process.env);

if (!envParse.success) {
  throw new Error('Invalid Enviromnent Variables! Please try again!');
}

export const env = envParse.data;
