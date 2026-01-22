import { useNavigate } from 'react-router';
import { type ProductInterface } from '../interface/product.interface';
import { routesPath } from '../../../utils/constants';

type ProductListProps = {
  product: ProductInterface;
};

function ProductList({ product }: ProductListProps) {
  const navigation = useNavigate();
  const handleNavigaiton = (id: number) => {
    navigation(routesPath.productDetail, {
      state: { id },
    });
  };
  return (
    <div className="h-full" onClick={()=>handleNavigaiton(product.id)}>
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
  );
}

export default ProductList;
