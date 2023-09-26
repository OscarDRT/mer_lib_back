export interface Price {
  currency: string;
  amount: number;
  decimals: number;
}

export interface Item {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity?: number;
  description?: string;
  seller: {
    country: string;
    state: string;
    city: string;
  };
}

export interface Author {
  name: string;
  lastname: string;
}

export interface SearchResult {
  author: Author;
  items: Item[];
  categories: string[];
}

export interface ItemResult {
  author: Author;
  item: Item;
}
