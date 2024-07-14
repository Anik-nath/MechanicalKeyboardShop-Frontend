const ProductDetails = () => {
  return (
    <div className="bg-gray-900 py-12">
      <div className="pt-20 text-white mx-auto max-w-screen-2xl sm:px-6 lg:px-12">
        <div className="mx-auto px-6 md:px-0 lg:px-0">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="md:h-[460px] lg:h-[460px] flex justify-center items-center rounded-lg bg-gray-300  mb-4">
                <img
                  className="w-full object-cover"
                  src="https://res.cloudinary.com/kineticlabs/image/upload/q_auto/c_fit,w_590/f_auto/v1/api-images/products/hippo-pbt/DSC00387_2_-PLP_vfhpkw"
                  alt="Product Image"
                />
              </div>
            </div>
            <div className="md:flex-1 px-4 ">
              <h2 className="text-2xl font-bold text-white mb-2">
                Product Name
              </h2>
              <p className="text-gray-300  text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                ante justo. Integer euismod libero id mauris malesuada
                tincidunt.
              </p>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-white ">Price:</span>
                  <span className="text-gray-300 ">$29.99</span>
                </div>
                <div>
                  <span className="font-bold text-white ">Availability:</span>
                  <span className="text-gray-300 "> In Stock</span>
                </div>
              </div>
              <div className="mb-4">
                <span className="font-bold text-white">Select Size:</span>
                <div className="flex items-center mt-2">
                  <button className="bg-gray-300  text-gray-700  py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-300">
                    S
                  </button>
                  <button className="bg-gray-300  text-gray-700  py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-300">
                    M
                  </button>
                  <button className="bg-gray-300  text-gray-700  py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-300">
                    L
                  </button>
                  <button className="bg-gray-300  text-gray-700  py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-300">
                    XL
                  </button>
                  <button className="bg-gray-300  text-gray-700  py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-300">
                    XXL
                  </button>
                </div>
              </div>
              <div>
                <span className="font-bold white ">Product Description:</span>
                <p className="text-gray-300  text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sed ante justo. Integer euismod libero id mauris malesuada
                  tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet.
                  Duis dapibus augue vel ipsum pretium, et venenatis sem
                  blandit. Quisque ut erat vitae nisi ultrices placerat non eget
                  velit. Integer ornare mi sed ipsum lacinia, non sagittis
                  mauris blandit. Morbi fermentum libero vel nisl suscipit, nec
                  tincidunt mi consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
