import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();
export default function generateToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
}
