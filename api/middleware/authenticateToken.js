import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

const codeJWTSecret = process.env.JWT_SECRET;

const authenticateToken = (req, res, next) => {
  const token =
    req.headers["authorization"] && req.headers["authorization"].split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, codeJWTSecret, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

export default authenticateToken;
