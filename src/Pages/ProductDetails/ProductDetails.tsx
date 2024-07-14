import {
  MinusIcon,
  PlusIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import StarRatings from "react-star-ratings";

const ProductDetails = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleImageClick = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="bg-gray-900 py-12">
      <div className="pt-20 text-white mx-auto max-w-screen-2xl sm:px-6 lg:px-12">
        <div className="mx-auto px-6 md:px-0 lg:px-0">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="md:h-[460px] lg:h-[460px] flex justify-center items-center rounded-lg bg-gray-800  mb-4">
                <img
                  className="w-full object-cover cursor-zoom-in"
                  src="https://res.cloudinary.com/kineticlabs/image/upload/q_auto/c_fit,w_590/f_auto/v1/api-images/products/hippo-pbt/DSC00387_2_-PLP_vfhpkw"
                  alt="Product Image"
                  onClick={handleImageClick}
                />

                {isOpen && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="relative">
                      <button
                        className="absolute top-0 right-0 mt-2 mr-2 text-white text-2xl font-bold"
                        onClick={closeModal}
                      >
                        &times;
                      </button>
                      <img
                        className="w-[1000px] h-svh bg-gray-800 object-contain"
                        src="https://res.cloudinary.com/kineticlabs/image/upload/q_auto/c_fit,w_590/f_auto/v1/api-images/products/hippo-pbt/DSC00387_2_-PLP_vfhpkw"
                        alt="Product Image"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="md:flex-1 px-4 ">
              <h2 className="text-2xl font-bold text-white mb-8">
                Hippo PBT Keycaps
              </h2>
              <div className="my-4">
                <span className="font-semibold text-white pr-1">Brand:</span>
                <span className="text-gray-300 ">Apple</span>
              </div>
              <div className="flex flex-row items-center mb-4">
                <div className="mr-8">
                  <span className="font-semibold text-white pr-1">Price:</span>
                  <span className="font-semibold gradient-text text-xl">
                    $29.99
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-white pr-1">
                    Availability:
                  </span>
                  <span className="text-gray-300 ">In Stock (15)</span>
                </div>
              </div>
              <div className="mb-4">
                <span className="font-semibold text-white">
                  Product Review:
                </span>
                <div className=" mt-2">
                  <div className="flex items-center gap-2" id="rating">
                    <div>
                      <StarRatings
                        rating={4.5}
                        starDimension="16px"
                        starSpacing="1px"
                        starRatedColor="orange"
                        numberOfStars={5}
                        name="rating"
                      />
                    </div>
                    <span>(4.5)</span>
                  </div>
                </div>
              </div>
              <div>
                <span className="font-semibold white ">
                  Product Description:
                </span>
                <p className="text-gray-300 text-justify text-sm mt-2">
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
              <div className="flex flex-col">
                <div id="quantity">
                  <p className="mt-4 font-semibold">Total Quantity</p>
                  <div className="flex gap-8 items-center mt-2">
                    <button className="gradient-border hover:bg-gray-800 inline-flex items-center p-2">
                      <MinusIcon className="w-6 h-6"></MinusIcon>
                    </button>
                    <div className="px-4 py-1">
                      <p className="text-xl">2</p>
                    </div>
                    <button className="gradient-border hover:bg-gray-800 inline-flex items-center p-2">
                      <PlusIcon className="w-6 h-6"></PlusIcon>
                    </button>
                  </div>
                </div>

                <button className="gradient-button w-48 flex items-center justify-center mt-4">
                  Add to cart
                  <ShoppingCartIcon className="w-6 h-6 mx-1"></ShoppingCartIcon>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
