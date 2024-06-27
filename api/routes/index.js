import { Router } from "express";
import getToken from "../controllers/authController.js";
import {
  getAll,
  getOneByTitle,
  getProductsByCategory,
} from "../controllers/productsController.js";
import authenticateToken from "../middleware/authenticateToken.js";
const router = Router();

router.post("/api/login", getToken);

router.get("/api/products", authenticateToken, getAll);

router.get("/api/product/:title", authenticateToken, getOneByTitle);

router.get(
  "/api/products/category/:category",
  authenticateToken,
  getProductsByCategory,
);

export default router;
