import dotenv from 'dotenv';
import express, { Application } from 'express';
import productsRoutes from '../src/api/products.routes';

dotenv.config();
const app: Application = express();

app.use('/api/products', productsRoutes);

export default app;