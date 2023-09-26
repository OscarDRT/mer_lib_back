export interface SearchAPI {
  results: ItemAPI[];
  filters: Filter[];
}

export interface ItemAPI {
  id: string;
  title: string;
  currency_id: string;
  price: number;
  thumbnail: string;
  condition: string;
  shipping: Shipping;
  sold_quantity: number;
  seller_address: {
    country: { name: string };
    state: { name: string };
    city: { name: string };
  };
}

export interface Filter {
  id: string;
  name: string;
  type: string;
  values: Value[];
}

export interface Value {
  id: string;
  name: string;
  path_from_root?: PathFromRoot[];
}

export interface PathFromRoot {
  id: string;
  name: string;
}

interface Shipping {
  free_shipping: boolean;
}

export interface ItemDescription {
  text: string;
  plain_text: string;
}
