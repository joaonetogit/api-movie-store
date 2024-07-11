import dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';

dotenv.config();

// const codeJWTSecret = process.env.JWT_SECRET as string;

export default function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.status(403).send('No token provided');
  }

  return next();
  // return jwt.verify(token, codeJWTSecret, (err, user) => {
  //   if (err) {
  //     return res.status(403).send('Invalid token');
  //   }
  //   req.user = user as any;
  //   next();
  // });
}
