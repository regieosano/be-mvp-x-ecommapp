export type Category = {
  _id: string;
  name: string;
  description: string;
};

export type Product = {
  _id: string;
  category: string;
  name: string;
  image: string;
  description: string;
  price: number;
  qty: number;
  isApproved: boolean;
  isAvailable: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type ShoppingCart = {
  _id: string;
  shopper: string;
  products: [string];
};

export type ProductList = Product[] | null;
export type ShopperId = string | undefined;
export type ShoppingCartList = ShoppingCart[] | null;
export type ShoppingEntity = ShoppingCart | undefined | never[];
