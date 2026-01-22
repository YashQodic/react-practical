import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { profileSchema, type TProfileSchema } from '../schemas/profile.schema';
import { zodResolver } from '@hookform/resolvers/zod';
function Profile({setOpen}: {setOpen: (open: boolean) => void}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting  },
    reset,
  } = useForm<TProfileSchema>({
    resolver: zodResolver(profileSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    setOpen(false);
    reset();
  };

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-blackA-9 " />
      <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-125 -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray-1 p-6 shadow-(--shadow-6) focus:outline-none">
        <Dialog.Title className="m-0 text-[17px] font-bold text-gray-800">
          Edit profile
        </Dialog.Title>
        <Dialog.Description className="mb-5 mt-2.5 text-[15px] leading-normal text-gray-500">
          Make changes to your profile here. Click save when you're done.
        </Dialog.Description>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="mb-3.75 gap-5 ">
            <label
              className="w-[90px] text-right text-[15px] text-gray-800"
              htmlFor="email"
            >
              Email
            </label>
            <div className='mt-1'>
              <input
                type="email"
                className="inline-flex h-8.75 w-full rounded px-2.5 text-[15px]
             text-gray-800 shadow-[0_0_0_1px] shadow-violet-7
             outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet-8"
                id="email"
                placeholder="Email"
                {...register('email')}
              />
              {errors.email && (
                <span className="text-red-400 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
          </fieldset>
          <fieldset className="mb-3.75 gap-5">
            <label
              className="w-22.5 text-right text-[15px] text-gray-800 mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <div className='mt-1'>
              <input
                className="inline-flex h-8.75 w-full rounded px-2.5 text-[15px]
             text-gray-800 shadow-[0_0_0_1px] shadow-violet-7
             outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet-8"
                id="username"
                placeholder="Username"
                {...register('username')}
              />
              {errors.username && (
                <span className="text-red-400 text-sm">
                  {errors.username.message}
                </span>
              )}
            </div>
          </fieldset>
          <div  className="mt-6.25 flex justify-end">
            <button
              className="inline-flex h-8.75 items-center justify-center rounded
             bg-gray-300 px-4 font-medium text-gray-800
             hover:bg-gray-800 hover:text-white focus-visible:outline-2
             focus-visible:outline-green-6 cursor-pointer"
              type="submit"
              disabled={isSubmitting}
            >
              Save changes
            </button>
          </div >
        </form>
        <Dialog.Close asChild>
          <button
            className="absolute right-2.5 top-2.5 inline-flex size-6.25
             items-center justify-center rounded-full
             bg-gray-3 text-violet-11 hover:bg-violet-4
             focus:shadow-[0_0_0_2px] focus:shadow-violet-7"
            aria-label="Close"
          >
            <X />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
}

export default Profile;
