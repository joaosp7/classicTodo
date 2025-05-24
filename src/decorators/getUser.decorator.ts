import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

export const GetUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1]; // position 0 is Bearer;

    if (!token) {
      return null;
    }

    const jwtService = new JwtService({
      secret: process.env.JWT_SECRET,
    });

    try {
      const decoded = jwtService.verify(token);

      if (data) {
        console.log(`Returning : ${decoded[data]}`);
        return decoded[data];
      }
      console.log(`Returnig ${decoded}`);
      return decoded;
    } catch (err: any) {
      console.error('Error getting the userId: ', err);
      return null;
    }
  },
);
