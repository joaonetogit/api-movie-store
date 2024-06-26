const express = require("express");
const router = express.Router();
const authController = require("./controllers/authController");
const productsController = require("./controllers/productsController");
const authenticateToken = require("./middleware/authenticateToken");

router.post("/api/login", authController.getToken);

router.get("/api/products", authenticateToken, productsController.getAll);

router.get(
  "/api/product/:title",
  authenticateToken,
  productsController.getOneByTitle,
);

router.get(
  "/api/products/category/:category",
  authenticateToken,
  productsController.getProductsByCategory,
);

module.exports = router;
