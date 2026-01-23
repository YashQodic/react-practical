import * as Dialog from '@radix-ui/react-dialog';
import { useState, useEffect } from 'react';
import {
  type ProductInterface,
  type UpdateProductInterface,
} from '../interface/product.interface';
import { useProductStore } from '../../../store/productStore';
import { X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { productSchema } from '../schemas/product.schema';
import DialogBox from '../../../components/common/DialogBox';

function UpdateProduct(props: UpdateProductInterface) {
  const [images, setImages] = useState<any>([]);
  const [categoryImage, setCategoryImage] = useState<any>();
  const [product, setProduct] = useState<ProductInterface | null>(null);
  const { categorys, getCategoryAPICall } = useProductStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(productSchema)
  });

  const onSubmit = () => {};
  const handleImageChange = (e: any) => {
    const files = Array.from(e.target.files);
    setImages((prev: any) => [...prev, ...files]);
  };

  const removeImage = (index: number) => {
    setImages((prev: any) => prev.filter((_: any, i: number) => i !== index));
  };

  const handleCategorySelection = (e: any) => {
    if (!product) return;

    const selectedCategory = categorys.find(
      (ctg) => ctg.slug === e.target.value,
    );

    if (!selectedCategory) return;

    setProduct({
      ...product,
      category: {
        ...product.category,
        name: selectedCategory.name,
        slug: selectedCategory.slug,
      },
    });
  };

  useEffect(() => {
    setProduct(props.product);
    getCategoryAPICall();
  }, []);

  useEffect(() => {
    return () => {
      images.forEach((file: any) => URL.revokeObjectURL(file));
    };
  }, [images]);

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm" />

      <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-125 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white py-6 shadow-lg focus:outline-none overflow-hidden">
        <div className="flex justify-between px-8">
          <Dialog.Title className="text-lg font-semibold text-gray-800">
            Update Product
          </Dialog.Title>
          <Dialog.Close asChild>
            <button
              className="cursor-pointer text-gray-800 hover:bg-gray-800 hover:text-white rounded-sm"
              aria-label="Close"
            >
              <X />
            </button>
          </Dialog.Close>
        </div>

        <hr className="my-4 border-gray-200" />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 scrollbar overflow-auto h-128 px-6 pb-18 lg:pb-0"
        >
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Select Category
            </label>
            <select
              value={product?.category.slug}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-100"
              onChange={(e) => {
                handleCategorySelection(e);
              }}
            >
              {categorys.length > 0 &&
                categorys.map((ctg) => (
                  <option value={ctg.slug}>{ctg.name}</option>
                ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Upload Images
            </label>

            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-600
                         file:mr-4 file:rounded-md file:border-0
                         file:bg-gray-100 file:px-4 file:py-2
                         hover:file:bg-gray-200"
            />
            <div className="grid grid-cols-3 gap-3 pt-2">
              {product?.images &&
                product?.images.map((imgUrl: string, index: number) => (
                  <div
                    key={`existing-${index}`}
                    className="relative h-24 overflow-hidden rounded-md border border-gray-200"
                  >
                    <img
                      src={imgUrl}
                      alt="preview"
                      className={`h-full w-full object-cover ${
                        imgUrl === categoryImage
                          ? 'border-4 border-green-600'
                          : ''
                      }`}
                      onClick={() => setCategoryImage(imgUrl)}
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setProduct({
                          ...product,
                          images: product.images.filter(
                            (url: string) => url !== imgUrl,
                          ),
                        })
                      }
                      className="absolute right-1 top-1 rounded-full bg-black/60 px-2 py-0.5 text-xs text-white hover:bg-black"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              {images?.length > 0 &&
                images.map((file: File, index: number) => (
                  <div
                    key={`new-${index}`}
                    className="relative h-24 overflow-hidden rounded-md border border-gray-200"
                  >
                    <img
                      src={URL.createObjectURL(file)}
                      alt="preview"
                      className={`h-full w-full object-cover ${
                        file === categoryImage
                          ? 'border-4 border-green-600'
                          : ''
                      }`}
                      onClick={() => setCategoryImage(file)}
                    />

                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute right-1 top-1 rounded-full bg-black/60 px-2 py-0.5 text-xs text-white hover:bg-black"
                    >
                      ✕
                    </button>
                  </div>
                ))}
            </div>
          </div>

          <div className="space-y-1">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={product?.title}
              {...register('title')}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-100"
              onChange={(e) =>
                product && setProduct({ ...product, title: e.target.value })
              }
            />
            {errors.title && (
              <span className="text-red-400 text-sm">
                {errors.title.message}
              </span>
            )}
          </div>

          <div className="space-y-1">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              rows={3}
              value={product?.description}
              id="description"
              {...register('description')}
              onChange={(e) =>
                product &&
                setProduct({ ...product, description: e.target.value })
              }
              className="w-full resize-none rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-100"
            />
            {errors.description && (
              <span className="text-red-400 text-sm">
                {errors.description.message}
              </span>
            )}
          </div>

          <div className="space-y-1">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              value={product?.price}
              onChange={(e) =>
                product &&
                setProduct({ ...product, price: Number(e.target.value) })
              }
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Dialog.Close asChild>
              <button
                type="button"
                className="rounded-md border px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
              >
                Cancel
              </button>
            </Dialog.Close>

            <Dialog.Close asChild>
              <button
                type="submit"
                className="rounded-md bg-blue-600 px-5 py-2 text-sm text-white hover:bg-blue-700 cursor-pointer"
                disabled={isSubmitting}
              >
                Update
              </button>
            </Dialog.Close>
          </div>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}

export default UpdateProduct;
