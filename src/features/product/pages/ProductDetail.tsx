import { NavLink, useLocation } from 'react-router';
import { useProductStore } from '../../../store/productStore';
import { useEffect, useState } from 'react';
import type { ProductInterface } from '../interface/product.interface';
import {
  AlignRight,
  ArrowRight,
  MoveRight,
  MoveRightIcon,
  PanelRight,
  PanelRightOpen,
  ToggleRight,
} from 'lucide-react';
import { routesPath } from '../../../utils/constants';

function ProductDetail() {
  const location = useLocation();
  const { products } = useProductStore();
  const [productDetail, setProductDetail] = useState<ProductInterface | null>(
    null,
  );
  const [productImage, setProductImage] = useState<string | null>(null);

  useEffect(() => {
    if (!location.state?.id || !products.length) return;

    const detail = products.find((product) => product.id === location.state.id);

    setProductDetail(detail || null);
  }, [location.state?.id, products]);

  if (!productDetail) {
    return <div className="p-6 text-gray-500">Loading product details...</div>;
  }

  return (
    <div className="max-w-6xl p-6">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <NavLink
                to={routesPath.product}
                className="hover:text-gray-900 transition"
              >
                Product List
              </NavLink>
            </li>

            <li className="text-gray-400">/</li>

            <li className="font-medium text-gray-900 truncate max-w-[240px]">
              {productDetail.title}
            </li>
          </ol>
        </nav>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        <div className="space-y-4">
          <div className="overflow-hidden rounded-xl border">
            <img
              src={productImage ? productImage : productDetail.images[0]}
              alt={productDetail.title}
              className="w-full h-105 object-cover"
            />
          </div>

          <div className="flex gap-3">
            {productDetail.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="thumbnail"
                className="h-20 w-20 rounded-lg border object-cover cursor-pointer hover:ring-2 hover:ring-green-500"
                onClick={() => setProductImage(img)}
              />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-500">
              {productDetail.category.name}
            </p>
            <h1 className="text-2xl font-bold text-gray-900">
              {productDetail.title}
            </h1>
          </div>

          <p className="text-3xl font-semibold text-green-600">
            ${productDetail.price}
          </p>

          <p className="text-gray-600 leading-relaxed">
            {productDetail.description}
          </p>

          <div className="flex gap-4 pt-4">
            <button className="flex-1 rounded-xl bg-green-600 px-6 py-3 text-white font-medium hover:bg-green-700 transition">
              Add to Cart
            </button>

            <button className="flex-1 rounded-xl border border-gray-300 px-6 py-3 font-medium hover:bg-gray-100 transition">
              Buy Now
            </button>
          </div>

          <div className="border-t pt-4 text-sm text-gray-500">
            <p>Product ID: {productDetail.id}</p>
            <p>
              Created: {new Date(productDetail.creationAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
