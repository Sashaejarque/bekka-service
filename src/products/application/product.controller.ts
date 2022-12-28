import { Request, Response } from "express";
import { Product } from "../domain/Product";
import { ProductPort } from "./product.port";


export class ProductController {
  constructor(public productPort: ProductPort) {}
  
    async getAll(req: Request, res: Response): Promise<void> {
      const productList = await this.productPort.getAll();
      res.json({
        data: productList,
      })
      res.json({
        'message': 'Hello Worl'
      })
    }
  
    async getById(req: Request, res: Response): Promise<void | Response> {
      const product = await this.productPort.getById(req.params.id);
      if (!product) return res.status(404).send({ message: "Product not found" });
      res.send(product);
    }
  
    async create(req: Request, res: Response): Promise<void> {
      const product = new Product(req.body.id, req.body.name, req.body.price, req.body.stock, req.body.image, req.body.state);
      await this.productPort.create(product);
      res.send();
    }
  
    async update(req: Request, res: Response): Promise<void> {
      const product = new Product(req.body.id, req.body.name, req.body.price, req.body.stock, req.body.image, req.body.state);
      await this.productPort.update(req.params.id, product);
      res.send();
    }
  
    async delete(req: Request, res: Response): Promise<void> {
      await this.productPort.delete(req.params.id);
      res.send();
    }
  }