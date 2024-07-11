import dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import HttpStatusCodes from '../types/HttpStatusCodes';

dotenv.config();

const codeJWTSecret = process.env.JWT_SECRET;

export default function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(HttpStatusCodes.NOT_FOUND).json({ message: 'No token provided' });
  }

  const token = authorization.replace('Bearer ', '');

  if (!token) {
    return res.status(HttpStatusCodes.UNAUTHORIZED).json({ message: 'Token unauthorized' });
  }

  try {
    jwt.verify(token, codeJWTSecret);
  } catch (error) {
    return res.status(HttpStatusCodes.FORBIDDEN).json({ message: 'Invalid token' });
  }

  return next();
}
