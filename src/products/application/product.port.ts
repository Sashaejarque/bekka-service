import { Product } from '../domain/Product';

export interface ProductPort {
    getProducts(): Promise<Product[]>;
    getProduct(id: string): Promise<Product | null>;
    postProduct(product: Product): Promise<void>;
    putProduct(id: string, product: Product): Promise<void>;
    deleteProduct(id: string): Promise<void>;
}