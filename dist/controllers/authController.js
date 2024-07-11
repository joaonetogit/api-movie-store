import generateToken from '../utils/generateToken.js';
import getUser from '../utils/getUser.js';
import httpStatusCodes from '../utils/httpStatusCodes.js';

export default function authUser(req, res) {
  const { username, password } = req.body;
  const user = getUser(username, password);
  if (!user) {
    return res.status(httpStatusCodes.NOT_FOUND).json({ message: 'User not found' });
  }
  const token = generateToken(user);
  return res.status(httpStatusCodes.OK).json({ message: 'Login successful', token });
}
