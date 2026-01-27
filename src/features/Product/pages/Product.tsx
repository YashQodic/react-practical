import { useEffect, useState, useTransition, useMemo } from 'react';
import { useProductStore } from '../../../store/productStore';
import LoaderComponents from '../../../components/common/Loader';
import ProductList from './ProductList';
import UpdateProduct from './UpdateProduct';
import type { ProductInterface } from '../interface/product.interface';
import DialogBox from '../../../components/common/DialogBox';

function Product() {
  const { products, getProductsAPICall } = useProductStore();
  const [isPending, startTransition] = useTransition();
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    startTransition(() => getProductsAPICall());
  }, [getProductsAPICall]);

  const filteredProducts = useMemo(() => {
    if (!search.trim()) return products;

    const query = search.toLowerCase();

    return products.filter(
      (product) =>
        product.title.toLowerCase().includes(query) ||
        product.category.name.toLowerCase().includes(query),
    );
  }, [products, search]);

  const handleUpdateProduct = (product:ProductInterface) => {
    console.log("New product added :",product);
  }

  if (isPending) {
    return <LoaderComponents />;
  }

  return (
    <>
      <div className="flex justify-between p-4">
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search product..."
            className="
            w-full max-w-md px-4 py-2
            border border-gray-300 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-green-500
          "
          />
        </div>
        <DialogBox
              triggerChild={
             <button className="rounded-xl bg-green-300 px-6 py-3 text-gray-800 font-medium hover:bg-green-500 transition cursor-pointer">
          Add new
        </button>
              }
              portalChild={<UpdateProduct handleUpdateProduct={handleUpdateProduct} setOpen={setOpen}/>}
              open={open} setOpen={setOpen}
            />
      
      </div>
      <div
        className="
        grid gap-6 overflow-y-auto h-[79vh]
        grid-cols-[repeat(auto-fit,minmax(280px,1fr))]
        p-4 scrollbar
      "
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductList key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found
          </p>
        )}
      </div>
    </>
  );
}

export default Product;
