const express = require("express");
const router = express.Router();
const authChallenge = require("./middleware/basicAuth");
const productsController = require("./controllers/productsController");

router.get("/api/products", authChallenge, productsController.getAll);

router.get(
  "/api/product/:title",
  authChallenge,
  productsController.getOneByTitle,
);

router.get(
  "/api/products/category/:category",
  authChallenge,
  productsController.getProductsByCategory,
);

module.exports = router;
