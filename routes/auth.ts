import { Router } from 'express';
import { check } from 'express-validator';
import { handleLogin } from '../controllers/auth.controller';
import { errorValidation } from '../middlewares/fieldValidation';

const loginRoutes = Router();

loginRoutes.post('/login', [
    check('email', 'The email is required').isEmail(),
    check('password', 'The password is required').not().isEmpty(),
    errorValidation,
], handleLogin)

export default loginRoutes;
