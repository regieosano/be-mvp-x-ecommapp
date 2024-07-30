export interface Category {
  _id: string;
  name: string;
  description: string;
}

export interface Product {
  _id: string;
  category: string;
  name: string;
  description: string;
  price: number;
  qty: number;
}

export interface ShoppingCart {
  _id: string;
  shopper: string;
  products: [string];
}
