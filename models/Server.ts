import express, { Application } from 'express';
import dbConnection from '../database/config';
import productsRoutes from '../routes/products';
import loginRoutes from '../routes/auth';
import cors from 'cors';
import usersRoutes from '../routes/user';
import fileUpload from 'express-fileupload';
import uploadsRoutes from '../routes/uploads';

class Server {
    private app: Application;
    private port: number | string;
    private apiPaths = {
        PRODUCTS: '/api/products',
        LOGIN: '/api/auth',
        USERS: '/api/users',
        UPLOADS: '/api/uploads'
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

        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/'
        }));

        this.app.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", process.env.ALLOWED_ORIGINS);
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
          });


    }

    routes() {
        this.app.use(this.apiPaths.PRODUCTS, productsRoutes);
        this.app.use(this.apiPaths.LOGIN, loginRoutes);
        this.app.use(this.apiPaths.USERS, usersRoutes);
        this.app.use(this.apiPaths.UPLOADS, uploadsRoutes)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}

export default Server;