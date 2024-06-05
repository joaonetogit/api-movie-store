const express = require("express");
const app = express();
const cors = require("cors");
const products = require("./data");
const basicAuth = require("express-basic-auth");

const authChallenge = basicAuth({
  users: {
    admin: "123",
  },
});

app.use(
  cors({
    methods: ["GET"],
  }),
);

app.get("/api/products", authChallenge, (req, res) => {
  res.json({ products });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

module.exports = app;
