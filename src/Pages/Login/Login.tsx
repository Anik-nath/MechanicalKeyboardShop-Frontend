import { SubmitHandler, useForm } from "react-hook-form";
import { useLoginMutation } from "../../Redux/api/api";
import { toast } from "react-toastify";
import { useEffect } from "react";

export default function Login() {
    type TLogin = {
      email:string;
      password: string;
    }
    const { register, handleSubmit } = useForm<TLogin>();
    const [login, { isSuccess, isError }] = useLoginMutation();
    const onSubmit: SubmitHandler<TLogin> = data => login(data);
    useEffect(() => {
      if (isSuccess) {
        toast.success('Successfully Signed Up!');
      }
      if (isError) {
        toast.error('Failed to Sign Up!');
      }
    }, [isSuccess, isError]);
  return (
    <div className="py-20 text-white mx-auto max-w-screen-2xl sm:px-6 lg:px-12 bg-gray-900">
      <div className="mx-auto lg:max-w-7xl lg:mt-12 grid grid-cols-3">
        <div className="hidden lg:block">
          <img
            className="w-full"
            src="https://i.postimg.cc/Dwhc7Ddm/photo-1597380162318-ac49db1dbcf0.jpg"
            alt=""
          />
        </div>
        <div className="col-span-3 md:col-span-2 lg:col-span-2 bg-gray-800 px-12 py-8 mx-6 md:mx-0 mt-8 md:mt-0">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="text-center space-y-2">
              <h1 className="font-semibold text-xl">Login</h1>
              <p className="text-gray-400">
                Login below to access your account
              </p>
            </div>
            
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-white"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                {...register("email")}
                  type="email"
                  id="email"
                  placeholder="example@gmail.com"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 bg-transparent gradient-border text-white shadow-sm outline-none placeholder:text-gray-600"
                  name="email"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="Password"
                className="block text-sm font-semibold leading-6 text-white"
              >
                Password
              </label>
              <div className="mt-2.5">
                <input {...register("password")}
                  type="password"
                  id="password"
                  placeholder="************"
                  autoComplete="password"
                  className="block w-full rounded-md border-0 px-3.5 py-2 bg-transparent gradient-border text-white shadow-sm outline-none placeholder:text-gray-600"
                  name="password"
                />
              </div>
            </div>
            <button type="submit" className="gradient-button block w-full mt-4 font-semibold">
              Login
            </button>
            <div className="flex items-center w-full py-8">
              <span className="flex-grow bg-gray-200 gradient-border"></span>
              <span className="mx-3 text-lg font-medium">Or</span>
              <span className="flex-grow bg-gray-200 gradient-border"></span>
            </div>
            <button className="w-full font-bold shadow-sm py-2 bg-gray-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
              <div className="bg-white p-2 rounded-full">
                <svg className="w-4" viewBox="0 0 533.5 544.3">
                  <path
                    d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                    fill="#4285f4"
                  />
                  <path
                    d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                    fill="#34a853"
                  />
                  <path
                    d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                    fill="#fbbc04"
                  />
                  <path
                    d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                    fill="#ea4335"
                  />
                </svg>
              </div>
              <span className="ml-4">Sign In with Google</span>
            </button>
            <p className="text-center mt-4 text-md">
              New User?
              <a className="gradient-text" href="/register">
                Create account here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
