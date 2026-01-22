import { api } from "./api";

const endPoints = {
  products: `/products`,
};

export  const getProducts = async () => {
  return await api.get(endPoints.products);
}