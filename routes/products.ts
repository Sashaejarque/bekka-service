import { Router } from 'express';
import { check } from 'express-validator';
import { deleteProduct, getProduct, getProducts, postProduct, putProduct } from '../controllers/products.controller';
import { isProductInDb } from '../helpers/dbValidator';
import { errorValidation } from '../middlewares/fieldValidation';
import validateJWT from '../middlewares/validateJWT';

const router = Router();

router.get('/', getProducts);

router.get('/:id', [
    check('id', 'The id is not valid').isMongoId(),
    check('id').custom(isProductInDb),
    errorValidation,
], getProduct);

router.post('/', [
    validateJWT,
    check('name', 'The name is required').not().isEmpty(),
    check('price', 'The price is required').not().isEmpty(),
    check('price', 'The price must be a number').isNumeric(),
    check('stock', 'The stock is required').not().isEmpty(),
    check('stock', 'The stock must be a number').isNumeric(),
    errorValidation,
], postProduct);

router.put('/:id', [
    validateJWT,
    check('id', 'The id is not valid').isMongoId(),
    check('id').custom(isProductInDb),
    errorValidation,
], putProduct);

router.delete('/:id', [
    validateJWT,
    check('id', 'The id is not valid').isMongoId(),
    check('id').custom(isProductInDb),
    errorValidation,
], deleteProduct);

export default router;
