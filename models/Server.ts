import express, { Application } from 'express';
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
        this.routes();
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