import { create } from "zustand";
import { getCategory, getProducts } from "../services/product.api";
import { type ProductInterface, type ProductCategory } from "../features/product/interface/product.interface";

interface ProductState {
  products: ProductInterface[];
  categorys: ProductCategory[];
  setProducts: (products: ProductInterface[]) => void;
  getProductsAPICall: () => Promise<void>;
  getCategoryAPICall: () => Promise<void>;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  categorys: [],
  setProducts: (products) => set({ products }),
  getProductsAPICall: async () => {
    try {
      const response = await getProducts();
      set({ products: response.data });
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  },
  getCategoryAPICall: async () =>{
    try {
      const response = await getCategory();
      set({ categorys: response.data });
    } catch (error) {
      console.error("Failed to fetch category", error);
    }
  },
}));
