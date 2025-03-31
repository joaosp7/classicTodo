import { env } from '../env/env';

export const jwtConstants = {
  secret: env.JWT_SECRET,
};
