export type Category = {
  _id: string;
  name: string;
  description: string;
};

export type Product = {
  _id: string;
  category: string;
  name: string;
  description: string;
  price: number;
  qty: number;
};

export type ShoppingCart = {
  _id: string;
  shopper: string;
  products: [string];
};
