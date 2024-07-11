import { Router } from 'express';
import authUser from '../controllers/authController';
import {
  addProduct,
  deleteProduct,
  getAll,
  getOneByTitle,
  getProductsByCategory,
  updateProduct,
} from '../controllers/productsController';
import authenticateToken from '../middleware/authenticateToken';

const router = Router();

router.post('/login', authUser);
router.post('/product', authenticateToken, addProduct);
router.put('/product/:id', authenticateToken, updateProduct);
router.delete('/product/:id', authenticateToken, deleteProduct);
router.get('/product/:title', getOneByTitle);
router.get('/products', getAll);
router.get('/products/category/:category', getProductsByCategory);

export default router;
