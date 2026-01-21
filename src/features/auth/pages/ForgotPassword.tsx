import { useForm } from "react-hook-form";
import { NavLink } from "react-router";
import { forgotPasswordSchema, type TForgotPasswordSchema } from "../schemas/forgotpassword.schema";
import { zodResolver } from "@hookform/resolvers/zod";

function ForgotPassword() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<TForgotPasswordSchema>({
        resolver: zodResolver(forgotPasswordSchema),
    });

    const onSubmit = async (data: TForgotPasswordSchema) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Data", data);
        reset();
    }

    return (
    <div className="flex flex-col justify-center h-screen px-6 py-12 lg:px-8 bg-gray-900">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-3xl/9 font-bold tracking-tight text-white">
            Reset your password
        </h2>
        <p className="mt-4 text-sm/6 text-gray-600 dark:text-gray-400">
            Enter your email and we'll send you a link to reset your password.
        </p>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-between gap-3"
        >
          <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-100"
              >
                Email
              </label>
            <input
              type="email"
              id="email"
              className="bg-blue-200 p-2 border border-default-medium text-heading text-sm rounded-md focus:outline-none border-black"
              placeholder="email"
              {...register('email')}
            ></input>
            {errors.email && (
              <span className="text-red-400 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
          <button
            disabled={isSubmitting}
            className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            type="submit"
          >
            Reset your password
          </button>
        </form>
        <p className="mt-10 text-center text-sm/6 text-gray-400">
          Don't have an account?
          <NavLink
            to="/register"
            className="ml-1 font-semibold text-indigo-400 hover:text-indigo-300"
          >
            Sign up now
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;