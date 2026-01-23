import { api } from "./api";

const endPoints = {
  products: '/products',
  category: '/categories'
};

export  const getProducts = async () => {
  return await api.get(endPoints.products);
}

export const getCategory = async () =>{
  return await api.get(endPoints.category)
}