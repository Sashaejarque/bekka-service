import { Product } from '../domain/Product';

export interface ProductPort {

  getAll(): Promise<Product[]>;

  getById(id: string): Promise<Product | null>;

  create(product: Product): Promise<void>;

  update(id: string, product: Product): Promise<void>;

  delete(id: string): Promise<void>;
}