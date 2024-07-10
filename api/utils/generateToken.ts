import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { IUserPayload } from "../types/utils/generateToken";
dotenv.config();

export function generateToken(payload: IUserPayload): string {
  return jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: "1h",
  });
}
