import { Router } from 'express';
import { check } from 'express-validator';
import { deleteProduct } from '../controllers/products.controller';
import { createUser, deleteUser, getUsers, updateUser } from '../controllers/user.controller';
import { errorValidation } from '../middlewares/fieldValidation';

const usersRoutes = Router();
// La idea seria que todos los enpoints esten protegidos con jwt cosa de tener un unico usuario master
// get user por ahora no tiene mucha funcionalidad 

usersRoutes.get('/', getUsers);

usersRoutes.post('/', [
], createUser);

usersRoutes.put('/:id', [
], updateUser);

usersRoutes.delete('/:id', [
], deleteUser);

export default usersRoutes;
