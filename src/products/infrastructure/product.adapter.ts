import { prisma } from "../../db";
import { ProductPort } from "../application/product.port";
import { Product } from "../domain/Product";

  export class MongoDBProductAdapter implements ProductPort {
  
    async getAll(): Promise<Product[]> {
      const products = await prisma.product.findMany();
      console.log(products)
      return products.map(p => new Product(p.id, p.name, p.price, p.stock, p.image, p.state ));
    }
  
    async getById(id: string): Promise<Product | null> {
      const product = await prisma.product.findUnique({ where: { id } });
      if (!product) return null;
      return new Product(product.id, product.name, product.price, product.stock, product.image, product.state);
    }
  
    async create(product: Product): Promise<void> {
      await prisma.product.create({ data: product });
    }
  
    async update(id: string, product: Product): Promise<void> {
      await prisma.product.update({ where: { id }, data: product });
    }
  
    async delete(id: string): Promise<void> {
      await prisma.product.delete({ where: { id } });
    }
  }

