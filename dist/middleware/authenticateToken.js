import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import httpStatusCodes from '../utils/httpStatusCodes.js';

dotenv.config();
const codeJWTSecret = process.env.JWT_SECRET;
export default function authenticateToken(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(httpStatusCodes.NOT_FOUND).json({ message: 'No token provided' });
  }
  const token = authorization.replace('Bearer ', '');
  if (!token) {
    return res.status(httpStatusCodes.UNAUTHORIZED).json({ message: 'Token unauthorized' });
  }
  try {
    jwt.verify(token, codeJWTSecret);
  } catch (error) {
    return res.status(httpStatusCodes.FORBIDDEN).json({ message: 'Invalid token' });
  }
  return next();
}
