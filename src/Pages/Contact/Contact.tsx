const Contact = () => {
  return (
    <div className="bg-gray-900">
      <div className="pt-20 text-white mx-auto max-w-screen-2xl sm:px-6 lg:px-4">
        <div className="relative">
          <div className="mx-auto grid w-full grid-cols-1 lg:grid-cols-2">
            <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-32">
              <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden  lg:w-1/2"></div>
                <h1 className="text-2xl font-semibold tracking-tight text-white">
                  Let's Talk
                </h1>
                <p className="mt-12 text-md leading-8 text-gray-300">
                  Feel free to reach out to us for any inquiries or assistance.
                  We're here to help!
                </p>
                <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Email</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-7 w-6 text-gray-400"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        ></path>
                      </svg>
                    </dt>
                    <dd>
                      <a
                        className="hover:text-white"
                        href="mailto:contact@yourcompany.com"
                      >
                        contact@yourcompany.com
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Address</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-7 w-6 text-gray-400"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                        ></path>
                      </svg>
                    </dt>
                    <dd>123 Main Street, Cityville, Country</dd>
                  </div>
                </dl>
              </div>
            </div>
            <form className="px-6 pb-24 sm:pb-32 lg:px-8 lg:py-32">
            <h1 className="text-2xl font-semibold tracking-tight text-white">
                  Contact Us
                </h1>
              <div className="mx-auto mt-12 w-full lg:mr-0">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-semibold leading-6 text-white"
                    >
                      First name
                    </label>
                    <div className="mt-2.5">
                      <input
                        placeholder="Anik"
                        type="text"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 bg-transparent gradient-border text-white shadow-sm outline-none placeholder:text-gray-600 sm:text-sm sm:leading-6"
                        name="firstName"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-semibold leading-6 text-white"
                    >
                      Last name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        id="last-name"
                        placeholder="Nath"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 bg-transparent gradient-border text-white shadow-sm outline-none placeholder:text-gray-600"
                        name="lastName"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
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
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold leading-6 text-white"
                    >
                      Message
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        id="message"
                        placeholder="Write details here..."
                        rows={4}
                        className="block w-full rounded-md border-0 px-3.5 py-2 bg-transparent gradient-border text-white shadow-sm outline-none placeholder:text-gray-600"
                        name="message"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button type="submit" className="gradient-button">
                    Send message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
