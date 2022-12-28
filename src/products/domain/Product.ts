export class Product {
    id: string;
    name: string;
    price: number;
    stock: number;
    image: string;
    state: boolean;

    constructor(id: string, name: string, price: number, stock: number, image: string, state: boolean) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.image = image;
        this.state = state;
    }
}