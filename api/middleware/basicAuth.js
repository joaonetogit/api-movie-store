const basicAuth = require("express-basic-auth");
require("dotenv").config();

const secretKey = process.env.SECRET_KEY;

if (!secretKey) {
  throw new Error("SECRET_KEY is not defined in the environment variables");
}

const authChallenge = basicAuth({
  users: {
    admin: secretKey,
  },
});

module.exports = authChallenge;
