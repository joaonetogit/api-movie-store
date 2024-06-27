import { Router } from "express";
import getToken from "../controllers/authController.js";
import {
  deleteProduct,
  getAll,
  getOneByTitle,
  getProductsByCategory,
  newProduct,
  updateProduct,
} from "../controllers/productsController.js";
import authenticateToken from "../middleware/authenticateToken.js";
const router = Router();

router.post("/api/login", getToken);

router.post("/api/product", authenticateToken, newProduct);

router.put("/api/product/:id", authenticateToken, updateProduct);

router.delete("/api/product/:id", authenticateToken, deleteProduct);

router.get("/api/products", authenticateToken, getAll);

router.get("/api/product/:title", authenticateToken, getOneByTitle);

router.get(
  "/api/products/category/:category",
  authenticateToken,
  getProductsByCategory,
);

export default router;
