import { Router } from 'express';
import { postImage } from "../controllers/uploads.controller";


const uploadsRoutes = Router();

uploadsRoutes.post('/', postImage);

export default uploadsRoutes;

