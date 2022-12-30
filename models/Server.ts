import express, { Application } from 'express';
import dbConnection from '../database/config';
import productsRoutes from '../routes/products';
import loginRoutes from '../routes/auth';
import cors from 'cors';
import usersRoutes from '../routes/user';

class Server {
    private app: Application;
    private port: number | string;
    private apiPaths = {
        products: '/api/products',
        login: '/api/auth',
        users: '/api/users'
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.connectDb();
        this.middlewares();
        this.routes();
    }

    async connectDb() {
        await dbConnection();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

        // Directorio publico
        this.app.use(express.static('public'));


    }

    routes() {
        this.app.use(this.apiPaths.products, productsRoutes);
        this.app.use(this.apiPaths.login, loginRoutes);
        this.app.use(this.apiPaths.users, usersRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}

export default Server;