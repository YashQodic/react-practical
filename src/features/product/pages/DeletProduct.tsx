import * as Dialog from '@radix-ui/react-dialog';
import { type DeletProductInterface } from '../interface/product.interface';


function DeletProduct(props: DeletProductInterface) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-blackA-9 " />
      <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-125 -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray-1 p-6 shadow-(--shadow-6) focus:outline-none">
        <Dialog.Title className="m-0 text-[17px] font-bold text-gray-800">
          Delet Product
        </Dialog.Title>
        <Dialog.Description className="mb-5 mt-2.5 text-[15px] leading-normal text-gray-500">
          Are you sure you want to delet this product.
        </Dialog.Description>
        <div className="flex gap-4">
          <Dialog.Close asChild>
            <button className="flex-1 rounded-xl bg-yellow-200 px-4 py-2 text-black font-medium hover:bg-gray-400 transition cursor-pointer">
              No
            </button>
          </Dialog.Close>
          <button
            className="flex-1 rounded-xl bg-yellow-200 px-6 py-3 text-black font-medium hover:bg-gray-400 transition cursor-pointer"
            onClick={() => props.handleDeleteProduct(props.productId)}
          >
            Yes
          </button>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
export default DeletProduct;
