import { prisma } from "../../db";
import { ProductPort } from "../application/product.port";
import { Product } from "../domain/Product";

export class MongoDBProductAdapter implements ProductPort {
  async getProducts(): Promise<Product[]> {
    const products = await prisma.product.findMany();
    return products.map(
      (p) => new Product(p.id, p.name, p.price, p.stock, p.image, p.state)
    );
  }

  async getProduct(id: string): Promise<Product | null> {
    const product = await prisma.product.findUnique({ where: { id } });
    if (!product) return null;
    return new Product(
      product.id,
      product.name,
      product.price,
      product.stock,
      product.image,
      product.state
    );
  }
  async postProduct(product: Product): Promise<void> {
    await prisma.product.create({ data: product });
  }

  async putProduct(id: string, product: Product): Promise<void> {
    await prisma.product.update({ where: { id }, data: product });
  }

  async deleteProduct(id: string): Promise<void> {
    await prisma.product.update({ where: { id }, data: { state: false}});
  }
}
