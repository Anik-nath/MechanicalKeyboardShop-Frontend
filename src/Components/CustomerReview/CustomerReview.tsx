const CustomerReview = () => {
  return (
    <div className="mx-auto max-w-screen-2xl px-6 lg:px-12 bg-gray-900 py-16">
      <div className="py-8">
        <h2 className="md:text-2xl lg:text-2xl text-xl font-bold tracking-tight text-white">
          What our customers are saying
        </h2>
      </div>
      <div className="grid gap-4 lg:grid-cols-2 text-gray-300">
        <div className="lg:col-span-2 ">
          <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-800  md:px-14  md:py-14 ">
            <p className="text-lg font-semibold leading-normal ">
              Share a <mark className="mx-1 gradient-text">testimonial</mark>{" "}
              that hits some of your benefits from one of your popular
              customers.
            </p>
            <div className="flex items-center mt-8 space-x-3">
              <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                <img
                  alt="Avatar"
                  src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwMTQ5ODEx&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=100&amp;h=100"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="text-lg font-medium text-gray-300">
                  Sarah Steiner
                </div>
                <div className="text-gray-400 ">VP Sales at Google</div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-800  md:px-14  md:py-14 ">
            <p className="text-lg font-semibold leading-normal ">
              Make sure you only pick the{" "}
              <mark className="mx-1 gradient-text    ">right sentence</mark> to
              keep it short and simple.
            </p>
            <div className="flex items-center mt-8 space-x-3">
              <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                <img
                  alt="Avatar"
                  src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;crop=faces&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="text-lg font-medium text-gray-300">
                  Dylan Ambrose
                </div>
                <div className="text-gray-400 ">Lead marketer at Netflix </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-800  md:px-14  md:py-14 ">
            <p className="text-lg font-semibold leading-normal ">
              This is an <mark className="mx-1 gradient-text    ">awesome</mark>{" "}
              landing page template I've seen. I would use this for anything.
            </p>
            <div className="flex items-center mt-8 space-x-3">
              <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                <img
                  alt="Avatar"
                  src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;crop=faces&amp;q=80"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="text-lg font-medium text-gray-300">
                  Gabrielle Winn
                </div>
                <div className="text-gray-400 ">Co-founder of Acme Inc</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
