import dotenv from 'dotenv';

dotenv.config();
export default function getUser(username, password) {
  const adminUsername = process.env.SECRET_USER;
  const passRegistered = process.env.SECRET_PASS;
  if (username === adminUsername && password === passRegistered) {
    return { username: adminUsername, password: passRegistered };
  }
  return null;
}
