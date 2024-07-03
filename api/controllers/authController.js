import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

const passRegistered = process.env.SECRET_PASS;

const adminUsername = process.env.SECRET_USER;
const adminPasswordHash = bcrypt.hashSync(passRegistered, 10);

function getToken(req, res) {
  const { username, password } = req.body;

  if (username !== adminUsername) {
    return res.status(400).send("User not found");
  }

  if (bcrypt.compareSync(password, adminPasswordHash)) {
    const accessToken = jwt.sign(
      { username: adminUsername },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );
    res.json({ accessToken });
  } else {
    res.send("Wrong password!");
  }
}

export default getToken;
