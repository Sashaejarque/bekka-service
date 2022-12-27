import { Router } from 'express';
import { ProductController } from '../products/application/product.controller';
import { MongoDBProductAdapter } from '../products/infrastructure/product.adapter';

const router = Router();
const productController = new ProductController(new MongoDBProductAdapter());

router.get('/', productController.getProduct);
router.get('/:id', productController.getProduct);
router.post('/', productController.postProduct);
router.put('/:id', productController.putProduct);
router.delete('/:id', productController.deleteProduct);

export default router;
