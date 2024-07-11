import { Request, Response } from 'express';
import HttpStatusCodes from '../types/HttpStatusCodes';
import generateToken from '../utils/generateToken';
import getUser from '../utils/getUser';

export default function authUser(req: Request, res: Response) {
  const { username, password } = req.body;
  const user = getUser(username, password);

  if (!user) {
    return res.status(HttpStatusCodes.NOT_FOUND).json({ message: 'User not found' });
  }

  const token = generateToken(user);
  return res.status(HttpStatusCodes.OK).json({ message: 'Login successful', token });
}
