import { Request, Response } from "express";
import { ProductPort } from "./product.port";


export class ProductController { 
    constructor(private productPort: ProductPort) {}

    async getProducts(req: Request, res: Response): Promise<void> {
        const products = await this.productPort.getProducts();
        res.json({
            msg: 'All products',
            data: products,
        });
    }

    async getProduct(req: Request, res: Response): Promise<void> {
        const product = await this.productPort.getProduct(req.params.id);
        if (!product) {
            res.status(404).json({
                msg: 'Product not found',
            });
        }
        res.json({
            msg: 'getProduct',
            data: product,
        });
    }

    async postProduct(req: Request, res: Response): Promise<void> {
        await this.productPort.postProduct(req.body);
        res.json({
            msg: 'postProduct',
            data: req.body,
        });
    }

    async putProduct(req: Request, res: Response): Promise<void> {
        await this.productPort.putProduct(req.params.id, req.body);
        res.json({
            msg: 'putProduct',
            data: req.body,
        });
    }

    async deleteProduct(req: Request, res: Response): Promise<void> {
        await this.productPort.deleteProduct(req.params.id);
        res.json({
            msg: 'deleted Product',
            data: req.params.id,
        });
    }
}