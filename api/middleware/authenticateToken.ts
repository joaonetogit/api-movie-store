import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
dotenv.config();

const codeJWTSecret = process.env.JWT_SECRET as string;

const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const token =
    req.headers["authorization"] && req.headers["authorization"].split(" ")[1];
  if (token == null) return res.status(403).send("No token provided");

  jwt.verify(token, codeJWTSecret, (err, user) => {
    if (err) return res.status(403).send("Invalid token");
    req.user = user;
    next();
  });
};

export default authenticateToken;
