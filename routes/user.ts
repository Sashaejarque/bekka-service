import { Router } from 'express';
import { check } from 'express-validator';
import { createUser, deleteUser, getUsers, updateUser } from '../controllers/user.controller';
import { isUserDeleted, isUserInDbByEmail, isUserInDbById } from '../helpers/dbValidator';
import { errorValidation } from '../middlewares/fieldValidation';
import validateJWT from '../middlewares/validateJWT';

const usersRoutes = Router();
// La idea seria que todos los endpoints esten protegidos con jwt cosa de tener un unico usuario master
// get user por ahora no tiene mucha funcionalidad 

usersRoutes.get('/', [
    validateJWT,
], getUsers);

usersRoutes.post('/', [
    validateJWT,
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    check('password', 'La contraseña debe tener al menos 6 caracteres').isLength({ min: 6 }),
    check('email').custom(isUserInDbByEmail),
    errorValidation
], createUser);

usersRoutes.put('/:id', [
    validateJWT,
    check('id', 'The id is not valid').isMongoId(),
    check('id').custom(isUserInDbById),
    errorValidation
], updateUser);

usersRoutes.delete('/:id', [
    validateJWT,
    check('id', 'The id is not valid').isMongoId(),
    check('id').custom(isUserDeleted),
    errorValidation
], deleteUser);

export default usersRoutes;
