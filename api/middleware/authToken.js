require("dotenv").config();

const jwt = require("jsonwebtoken");
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

module.exports = authenticateToken;
