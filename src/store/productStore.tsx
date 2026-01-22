import { create } from "zustand";
import { getProducts } from "../services/auth.api";
import { type ProductInterface } from "../features/product/interface/product.interface";

interface ProductState {
  products: ProductInterface[];
  setProducts: (products: ProductInterface[]) => void;
  getProductsAPICall: () => Promise<void>;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],

  setProducts: (products) => set({ products }),

  getProductsAPICall: async () => {
    try {
      const response = await getProducts();
      set({ products: response.data });
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  },
}));
