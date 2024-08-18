

export default function Register() {
  return (
    <div className="py-20 text-white mx-auto max-w-screen-2xl sm:px-6 lg:px-12 bg-gray-900">
    <div className="mx-auto lg:max-w-7xl lg:mt-12 grid grid-cols-3">
      <div className="hidden lg:block">
          <img className="w-full" src="https://i.postimg.cc/Dwhc7Ddm/photo-1597380162318-ac49db1dbcf0.jpg" alt="" />
      </div>
      <div className="col-span-3 md:col-span-2 lg:col-span-2 bg-gray-800 px-12 py-8 mx-6 md:mx-0 mt-8 md:mt-0">
        <form>
          <div className="text-center space-y-2">
              <h1 className="font-semibold text-xl">Create Account</h1>
              <p className="text-gray-400">Create below to register your account</p>
          </div>
          <div className="flex gap-4 justify-between">

          
          <div className="mt-4 w-full">
            <label
              htmlFor="Name"
              className="block text-sm font-semibold leading-6 text-white"
            >
              Name
            </label>
            <div className="mt-2.5">
              <input
                type="name"
                id="name"
                placeholder="Anik Nath"
                autoComplete="name"
                className="block w-full rounded-md border-0 px-3.5 py-2 bg-transparent gradient-border text-white shadow-sm outline-none placeholder:text-gray-600"
                name="name"
              />
            </div>
          </div>
          <div className="mt-4 w-full">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-white"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                id="email"
                placeholder="example@gmail.com"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 bg-transparent gradient-border text-white shadow-sm outline-none placeholder:text-gray-600"
                name="email"
              />
            </div>
          </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="password"
              className="block text-sm font-semibold leading-6 text-white"
            >
              Password
            </label>
            <div className="mt-2.5">
              <input
                type="password"
                id="password"
                placeholder="********"
                autoComplete="password"
                className="block w-full rounded-md border-0 px-3.5 py-2 bg-transparent gradient-border text-white shadow-sm outline-none placeholder:text-gray-600"
                name="password"
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="re-password"
              className="block text-sm font-semibold leading-6 text-white"
            >
              Confirm Password
            </label>
            <div className="mt-2.5">
              <input
                type="password"
                id="re-password"
                placeholder="********"
                autoComplete="password"
                className="block w-full rounded-md border-0 px-3.5 py-2 bg-transparent gradient-border text-white shadow-sm outline-none placeholder:text-gray-600"
                name="re-password"
              />
            </div>
          </div>
          <div className="flex flex-row gap-4 justify-between">
          <div className="mt-4 w-full">
            <label
              htmlFor="phone"
              className="block text-sm font-semibold leading-6 text-white"
            >
              Phone
            </label>
            <div className="mt-2.5">
              <input
                type="phone"
                id="phone"
                placeholder="01811223344"
                autoComplete="phone"
                className="block w-full rounded-md border-0 px-3.5 py-2 bg-transparent gradient-border text-white shadow-sm outline-none placeholder:text-gray-600"
                name="phone"
              />
            </div>
          </div>
          <div className="mt-4 w-full">
            <label
              htmlFor="address"
              className="block text-sm font-semibold leading-6 text-white"
            >
              Address
            </label>
            <div className="mt-2.5">
              <input
                type="address"
                id="address"
                placeholder="ABCD Road, Chittagong"
                autoComplete="address"
                className="block w-full rounded-md border-0 px-3.5 py-2 bg-transparent gradient-border text-white shadow-sm outline-none placeholder:text-gray-600"
                name="address"
              />
            </div>
          </div>
          </div>
          <button className="gradient-button block w-full mt-4 font-semibold">Register</button>
          <p className="text-center mt-4 text-md">Already have an account? <a className="gradient-text" href="/login">Login here</a></p>
        </form>
      </div>
    </div>
  </div>
  )
}
