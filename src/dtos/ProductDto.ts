export type ProductDTO = {
  id: number;
  name: string;
  category: {
    id: number,
    name: string;
  };
  price: string;
  image: string;
};
