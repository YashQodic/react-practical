import { useForm } from "react-hook-form";
import { NavLink } from "react-router";
import { registerSchema, type TRegisterSchema } from "../schemas/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { routesPath } from "../../../utils/constants";

function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<TRegisterSchema>({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = async (data: TRegisterSchema) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Data", data);
        reset();
    }

    return (
      <div className="flex flex-col justify-center h-screen px-6 py-12 lg:px-8 bg-gray-900">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-3xl/9 font-bold tracking-tight text-white">
            Sign up for an account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-between gap-3"
          >
            <div className="flex flex-col gap-1">
              <label
                htmlFor="username"
                className="block text-sm/6 font-medium text-gray-100"
              >
                Username:
              </label>
              <input
                type="text"
                id="username"
                className="bg-blue-200 p-2 border border-default-medium text-heading text-sm rounded-md focus:outline-none border-black"
                placeholder="Email address"
                {...register('username')}
              ></input>
              {errors.username && (
                <span className="text-red-400 text-sm">
                  {errors.username.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-100"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-blue-200 p-2 border border-default-medium text-heading text-sm rounded-md focus:outline-none border-black"
                placeholder="password"
                {...register('password')}
              ></input>
              {errors.password && (
                <span className="text-red-400 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>
                <div className="flex flex-col gap-1">
              <label
                htmlFor="conformPassword"
                className="block text-sm/6 font-medium text-gray-100"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="conformPassword"
                className="bg-blue-200 p-2 border border-default-medium text-heading text-sm rounded-md focus:outline-none border-black"
                placeholder="password"
                {...register('comformPassword')}
              ></input>
              {errors.comformPassword && (
                <span className="text-red-400 text-sm">
                  {errors.comformPassword.message}
                </span>
              )}
            </div>
            <button
              disabled={isSubmitting}
              className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              type="submit"
            >
              Sing Up
            </button>
          </form>
          <p className="mt-10 text-center text-sm/6 text-gray-400">
            Do you have an account?
            <NavLink
              to={routesPath.home}
              className="ml-1 font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Sign in now
            </NavLink>
          </p>
        </div>
      </div>
    );
}

export default Register;