const express = require("express");
const app = express();
const cors = require("cors");
const products = require("./data");
const authChallenge = require("./middleware/basicAuth");
const limiter = require("./middleware/rateLimiter");
const normalizeTitle = require("./utils/normalizeText");

app.use(limiter);

app.use(
  cors({
    methods: ["GET"],
  }),
);

app.get("/api/products", authChallenge, (req, res) => {
  res.json({ products });
});

app.get("/api/products/:title", authChallenge, (req, res) => {
  const { title } = req.params;
  const normalizedTitle = normalizeTitle(title);
  const product = products.find(
    (item) => normalizeTitle(item.title) === normalizedTitle,
  );
  product ? res.json(product) : res.status(404).send("Produto não encontrado");
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

module.exports = app;
