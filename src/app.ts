import dotenv from 'dotenv';
import express, { Application } from 'express';
import router from './api/products.routes';
import cors from 'cors';


/* dotenv.config(); */
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api/products', router);

export default app;