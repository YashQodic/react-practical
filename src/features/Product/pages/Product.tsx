import { useEffect, useTransition } from 'react';
import { useProductStore } from '../../../store/productStore';
import LoaderComponents from '../../../components/common/Loader';
import ProductList from './ProductList';

function Product() {
  const { products, getProductsAPICall } = useProductStore();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => getProductsAPICall());
  }, [getProductsAPICall]);

  return isPending ? (
    <LoaderComponents/>
  ) : (
    <div
      className="
    grid gap-6 overflow-y-auto h-[85vh]
    grid-cols-[repeat(auto-fit,minmax(280px,1fr))]
    p-4
  "
    >
      {products.map((product) => (
       <ProductList product={product}/>
      ))}
    </div>
  );
}

export default Product;
