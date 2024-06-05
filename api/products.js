const express = require("express");
const app = express();
const cors = require("cors");
const products = require("./data");

app.use(
  cors({
    methods: ["GET"],
  }),
);

app.get("/api/products", (req, res) => {
  res.json({ products });
});

module.exports = app;
