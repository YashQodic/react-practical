export interface ProductInterface   {
    id: number;
    title: string;
    slug: string;
    price: number;
    description: string;
    category: {
      id: number;
      name: string;
      slug: string;
      image: string;
      creationAt: string;
      updatedAt: string
    };
    images: string[];
    creationAt: string;
    updatedAt: string;
}

export interface DeletProductInterface {
  handleDeleteProduct: (productId: number) => void;
  productId: number;
}

export interface UpdateProductInterface {
  handleUpdateProduct: (product: ProductInterface) => void;
  product: ProductInterface;
}

export interface ProductCategory {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}