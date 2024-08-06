const Newsletter = () => {
  return (
    <div className="bg-gray-900 pt-8">
      <div className=" bg-gray-800 max-w-screen-2xl mx-6 sm:mx-12 lg:mx-12">
        <div className="mx-auto px-4 py-12 sm:px-6 lg:py-16">
          <div className="lg:flex md:flex justify-between items-center lg:items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white">
                Email Newsletter
              </h2>
              <p className="mt-6 text-lg leading-6 text-gray-300">
                Sign up for our email newsletter to stay up to date.
              </p>
            </div>
            <div className="mt-4">
              <form className="flex flex-row" target="_blank">
                <input
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full py-0 px-5 bg-transparent gradient-border text-white shadow-sm outline-none placeholder:text-gray-600"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gradient-button rounded-none"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-3 text-sm text-gray-300">
                We will never send any spam emails. Promise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
