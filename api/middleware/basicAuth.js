const basicAuth = require("express-basic-auth");

const authChallenge = basicAuth({
  users: {
    admin: "ws87cTdeGYLgM",
  },
});

module.exports = authChallenge;
