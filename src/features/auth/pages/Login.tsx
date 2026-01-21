import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { signUpSchema, type TSingUpSchema } from '../schemas/login.schema';
import { NavLink, useNavigate } from 'react-router';
import { Loader } from 'lucide-react';
import { localStorageKeys, routesPath } from '../../../utils/constants';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TSingUpSchema>({
    resolver: zodResolver(signUpSchema),
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<TSingUpSchema> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('Data', data);
    reset();
    localStorage.setItem(localStorageKeys.userLogin, JSON.stringify(true));
    navigate(routesPath.product);
  };

  return (
    <div className="flex flex-col justify-center h-screen px-6 py-12 lg:px-8 bg-gray-900">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-3xl/9 font-bold tracking-tight text-white">
          Sign in to your account
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
              placeholder="Username"
              {...register('username')}
            ></input>
            {errors.username && (
              <span className="text-red-400 text-sm">
                {errors.username.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-100"
              >
                Password
              </label>
              <div className="text-sm">
                <NavLink
                  to={routesPath.forgotPassword}
                  className="font-semibold text-indigo-400 hover:text-indigo-300"
                >
                  Forgot password?
                </NavLink>
              </div>
            </div>
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
          <button
            disabled={isSubmitting}
            className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            type="submit"
          >
             {isSubmitting ? <Loader className="h-4 w-4 animate-spin" /> : 'Sign in'}
          </button>
        </form>
        <p className="mt-10 text-center text-sm/6 text-gray-400">
          Don't have an account?
          <NavLink
            to={routesPath.register}
            className="ml-1 font-semibold text-indigo-400 hover:text-indigo-300"
          >
            Sign up now
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Login;
