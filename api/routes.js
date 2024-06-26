const express = require("express");
const router = express.Router();
const authController = require("./controllers/authController");
const productsController = require("./controllers/productsController");

router.post("/api/login", authController.getToken);

router.get("/api/products", productsController.getAll);

router.get("/api/product/:title", productsController.getOneByTitle);

router.get(
  "/api/products/category/:category",
  productsController.getProductsByCategory,
);

module.exports = router;
