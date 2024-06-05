const basicAuth = require("express-basic-auth");

const authChallenge = basicAuth({
  users: {
    admin: "ws87cT$deGYLgM",
  },
});

module.exports = authChallenge;
