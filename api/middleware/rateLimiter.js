const rateLimit = require("express-rate-limit");

const numberInMinutes = 15 * 60 * 1000;

const limiter = rateLimit({
  windowMs: numberInMinutes,
  max: 100,
});

module.exports = limiter;
