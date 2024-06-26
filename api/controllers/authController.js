require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const passRegistered = process.env.SECRET_PASS;

const adminUsername = process.env.SECRET_USER;
const adminPasswordHash = bcrypt.hashSync(passRegistered, 10);

exports.getToken = (req, res) => {
  const { username, password } = req.body;

  if (username !== adminUsername) {
    return res.status(400).send("User not found");
  }

  if (bcrypt.compareSync(password, adminPasswordHash)) {
    const accessToken = jwt.sign(
      { username: adminUsername },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );
    res.json({ accessToken });
  } else {
    res.send("Wrong password!");
  }
};
