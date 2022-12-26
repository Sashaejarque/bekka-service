import express, { Application } from 'express';
import dbConnection from '../database/config';
import productsRoutes from '../routes/products';

class Server {
    private app: Application;
    private port: number | string;
    private apiPaths = {
        products: '/api/products'
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.connectDb();
        this.routes();
    }

    async connectDb() {
        await dbConnection();
    }

    routes() {
        this.app.use(this.apiPaths.products, productsRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}

export default Server;