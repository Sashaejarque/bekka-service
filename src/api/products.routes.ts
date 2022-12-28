import { Router } from 'express';
import { ProductController } from '../products/application/product.controller';
import { MongoDBProductAdapter } from '../products/infrastructure/product.adapter';

const router = Router();
const productController = new ProductController(new MongoDBProductAdapter());

router.get('/', productController.getAll);
router.get('/:id', productController.getById);
router.post('/', productController.create);
router.put('/:id', productController.update);
router.delete('/:id', productController.delete);

export default router;
