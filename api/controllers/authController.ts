import { Request, Response } from 'express';
import { HttpStatusCode } from '../types/HttpStatusCode';
import { generateToken } from '../utils/generateToken';
import { getUser } from '../utils/getUser';

export function authUser(req: Request, res: Response) {
  const { username, password } = req.body;
  const user = getUser(username, password);

  if (!user) {
    return res.status(HttpStatusCode.NOT_FOUND).json({ message: 'User not found' });
  }

  const token = generateToken(user);
  return res.status(HttpStatusCode.OK).json({ message: 'Login successful', token });
}
