import { useEffect, useTransition } from 'react';
import { useProductStore } from '../../../store/productStore';
import LoaderComponents from '../../../components/common/Loader';

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
        <div className="h-full">
          <div
            key={product.id}
            className="group rounded-xl overflow-hidden bg-white shadow-sm border border-gray-200"
          >
            <div className="h-56 overflow-hidden">
              <img
                src={product.category.image}
                alt={product.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-5 space-y-2">
              <p className="text-lg font-semibold text-green-600">
                ${product.price}
              </p>

              <h3
                className="
            text-base font-semibold text-gray-900
            line-clamp-2
          "
              >
                {product.title}
              </h3>

              <p className="text-sm text-gray-500">{product.category.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
