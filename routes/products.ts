import { Router } from 'express';
import { check } from 'express-validator';
import { deleteProduct, getProduct, getProducts, postProduct, putProduct } from '../controllers/products.controller';
import { isProductInDb } from '../helpers/dbValidator';
import { errorValidation } from '../middlewares/fieldValidation';

const router = Router();

router.get('/', getProducts);

router.get('/:id', [
    check('id', 'The id is not valid').isMongoId(),
    check('id').custom(isProductInDb),
    errorValidation,
], getProduct);

router.post('/', [
    check('name', 'The name is required').not().isEmpty(),
    check('price', 'The price is required').not().isEmpty(),
    check('stock', 'The stock is required').not().isEmpty(),
    errorValidation,
], postProduct);

router.put('/:id', [
    check('id', 'The id is not valid').isMongoId(),
    check('id').custom(isProductInDb),
    errorValidation,
], putProduct);

router.delete('/:id', [
    check('id', 'The id is not valid').isMongoId(),
    check('id').custom(isProductInDb),
    errorValidation,
], deleteProduct);

export default router;
