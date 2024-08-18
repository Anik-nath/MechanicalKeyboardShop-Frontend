const Profile = () => {
  return (
    <div className="bg-gray-900">
      <div className="py-20 text-white mx-auto max-w-screen-2xl px-6 lg:px-12 ">
        <div className="w-full mx-auto flex gap-4 mt-8">
          <div className="w-full mx-auto p-4 h-fit self-center bg-gray-800 ">
            <div className="p-4">
              <h1 className="lg:text-2xl md:text-2xl sm:text-xl font-semibold mb-2 ">
                Your Profile
              </h1>
              <form>
                <div className="w-full rounded-sm bg-[url('https://img.freepik.com/free-photo/top-view-white-keyboard-with-lights_23-2149680276.jpg')] bg-cover bg-center bg-no-repeat items-center">
                  <div className="mx-auto flex justify-center w-[141px] h-[141px] rounded-full bg-[url('https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg')] bg-cover bg-center bg-no-repeat">
                    <div className="bg-white/90 rounded-full w-6 h-6 text-center ml-28 mt-4">
                      <input
                        type="file"
                        name="profile"
                        id="upload_profile"
                        hidden
                        required
                      />

                      <label htmlFor="upload_profile">
                        <svg
                          data-slot="icon"
                          className="w-6 h-5 text-blue-700"
                          fill="none"
                          stroke-width="1.5"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                          ></path>
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                          ></path>
                        </svg>
                      </label>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <input
                      type="file"
                      name="profile"
                      id="upload_cover"
                      hidden
                      required
                    />

                    <div className="flex items-center gap-1 rounded-tl-md px-2 text-center font-semibold bg-white">
                      <label
                        htmlFor="upload_cover"
                        className="inline-flex items-center gap-1 cursor-pointer text-gray-400"
                      >
                        Cover
                        <svg
                          data-slot="icon"
                          className="w-6 h-5 text-blue-700"
                          fill="none"
                          stroke-width="1.5"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                          ></path>
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                          ></path>
                        </svg>
                      </label>
                    </div>
                  </div>
                </div>
                <h2 className="text-center my-8 font-semibold text-gray-300">
                  Update Profile and Cover Image
                </h2>
                <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full my-4">
                  <div className="w-full  mb-4">
                    <label htmlFor="" className="mb-2 text-gray-300">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="mt-2 p-4 w-full border-2  bg-transparent gradient-border outline-none"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="w-full  mb-4">
                    <label htmlFor="" className="text-gray-300">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="mt-2 p-4 w-full border-2  bg-transparent gradient-border outline-none  "
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full my-4">
                  <div className="w-full">
                    <h3 className="text-gray-300 mb-2">Gender</h3>
                    <select className="w-full text-grey border-2  p-4 pl-2 pr-2 text-gray-400 bg-transparent gradient-border outline-none ">
                      <option disabled value="">
                        Select Gender
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div className="w-full">
                    <h3 className="text-gray-300 mb-2">Date Of Birth</h3>
                    <input
                      type="date"
                      className="text-grey p-4 w-full border-2 text-gray-400 bg-transparent gradient-border outline-none"
                    />
                  </div>
                </div>

                <div className="gradient-button mt-4 text-white inline-block">
                  <button type="submit" className="w-full">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
