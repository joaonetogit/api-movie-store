const rateLimit = require("express-rate-limit");

const MILLISECONDS_IN_A_SECOND = 1000;
const SECONDS_IN_A_MINUTE = 60;
const MINUTES = 15;

const timerToMaxAuth = MINUTES * SECONDS_IN_A_MINUTE * MILLISECONDS_IN_A_SECOND;

const limiter = rateLimit({
  windowMs: timerToMaxAuth,
  max: 100,
});

module.exports = limiter;
