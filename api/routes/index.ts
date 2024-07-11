import { Router } from 'express';
import authUser from '../controllers/authController.js';
import {
  addProduct,
  deleteProduct,
  getAll,
  getOneByTitle,
  getProductsByCategory,
  updateProduct,
} from '../controllers/productsController.js';
import authenticateToken from '../middleware/authenticateToken.js';

const router = Router();

router.post('/login', authUser);

router.post('/product', authenticateToken, addProduct);

router.put('/product/:id', authenticateToken, updateProduct);

router.delete('/product/:id', authenticateToken, deleteProduct);

router.get('/products', authenticateToken, getAll);

router.get('/product/:title', authenticateToken, getOneByTitle);

router.get('/products/category/:category', authenticateToken, getProductsByCategory);

export default router;
