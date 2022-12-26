import { Router } from 'express';
import { deleteProduct, getProduct, getProducts, postProduct, putProduct } from '../controllers/products.controller';

const router = Router();

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', postProduct);
router.put('/:id', putProduct);
router.delete('/:id', deleteProduct);

export default router;
