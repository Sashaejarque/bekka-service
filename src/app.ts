import dotenv from 'dotenv';
import express, { Application } from 'express';
import router from './api/products.routes';
import cors from 'cors';
import dbConnection, { prisma } from './db';


/* dotenv.config(); */
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api/products', router);

async function main() {
  app.listen(process.env.PORT || 8080, () => {
    console.log(`Running on port ${process.env.PORT || 8080}`);
  });
 await dbConnection();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

export default app;