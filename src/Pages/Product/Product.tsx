import { ChevronDownIcon } from "@heroicons/react/24/outline";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useRef, useState } from "react";

const Product = () => {
  const [price, setPrice] = useState(0);
  const rangeRef = useRef<HTMLInputElement>(null);

  const updatePrice = (value: number) => {
    setPrice(value);
  };

  const resetPrice = () => {
    setPrice(0);
    if (rangeRef.current) {
      rangeRef.current.value = "0";
    }
  };

  return (
    <>
      <div className="bg-gray-900 pb-12">
        <div className="pt-20 text-white mx-auto max-w-screen-2xl sm:px-6 lg:px-12">
          <div className="bg-gray-800 md:p-12 lg:12 p-5 mb-8">
            <h1 className="text-2xl font-bold tracking-tight text-white">
              Mechanical Keyboards
            </h1>
            <p className="text-gray-300 pt-8 text-md text-justify">
              Shop MKP's selection of over 1,000 Mechanical Keyboards. Unlike
              membrane keyboards, where pressing a key pushes down on a single
              keyboard-sized membrane to complete a circuit, mechanical
              keyboards use individual mechanical switches for each key. Shop
              from a wide variety of sizes, switch types, keycaps, brands, and
              more to customize your gaming and typing experience.
            </p>
          </div>
          <div className="flex items-center justify-end pr-6 md:mr-0 lg:pr-0 mb-4">
            <p className="pr-12 text-sm text-gray-300">
              Showing 771 of 771 products
            </p>
            <p className="px-4 font-semibold">Short By : </p>
            <div className="group relative cursor-pointer py-2">
              <div className="flex items-center justify-between space-x-5 gradient-border px-4">
                <a className="menu-hover my-2 py-2 text-base font-medium text-white lg:mx-4">
                  Trending
                </a>
                <ChevronDownIcon className="h-5"></ChevronDownIcon>
              </div>

              <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
                <a className="my-2 block border-b border-gray-300 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                  Best Selling
                </a>

                <a className="my-2 block border-b border-gray-300 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                  Featured
                </a>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 md:gap-4 ">
            {/* left side  */}
            <div className="bg-gray-800 p-4">
              <div id="availability">
                <p className="p-2">Availabilty</p>
                <div className="flex items-center space-x-2 rounded p-2">
                  <input
                    type="checkbox"
                    id="inStock"
                    name="inStock"
                    className="h-6 w-6 rounded shadow-sm accent-gray-600 cursor-pointer"
                  />
                  <label
                    htmlFor="htmlCheckbox"
                    className="flex w-full space-x-2 text-md"
                  >
                    In stock / Pre-order (50)
                  </label>
                </div>
                <div className="flex items-center space-x-2 rounded p-2">
                  <input
                    type="checkbox"
                    id="outOfStock"
                    name="outOfStock"
                    className="h-6 w-6 rounded shadow-sm accent-gray-600 cursor-pointer"
                  />
                  <label
                    htmlFor="htmlCheckbox"
                    className="flex w-full space-x-2 text-md"
                  >
                    Out of stock (150)
                  </label>
                </div>
              </div>
              <div id="price" className="py-6">
                <div className="flex justify-between items-center">
                  <p className="p-2 font-semibold ">Price Range</p>
                  <button onClick={resetPrice} className="p-2 font-semibold">
                    Reset
                  </button>
                </div>
                <div className="p-2">
                  <div>
                    <input
                      type="range"
                      name="price-range"
                      className="w-full accent-gray-700"
                      ref={rangeRef}
                      defaultValue={price}
                      min={0}
                      max={1000}
                      onInput={(e) =>
                        updatePrice(Number(e.currentTarget.value))
                      }
                    />
                  </div>
                  <div className="flex justify-between">
                    <span id="minPrice">${price}</span>
                    <span id="maxPrice">$1000</span>
                  </div>
                </div>
              </div>
              <div id="Brand">
                <p className="p-2 font-semibold">Keyboard Brand</p>
                <div className="flex items-center space-x-2 rounded p-2">
                  <input
                    type="checkbox"
                    name="brand"
                    className="h-6 w-6 rounded shadow-sm accent-gray-600 cursor-pointer"
                  />
                  <label
                    htmlFor="htmlCheckbox"
                    className="flex w-full space-x-2 text-md"
                  >
                    Apple
                  </label>
                </div>
              </div>
            </div>
            {/* right side */}
            <div className="col-span-3 mt-6 md:mt-0 lg:mt-0 px-6 md:px-0 lg:px-0">
              {/* show all products grid start */}
              <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
              </div>
              {/* show all products grid end*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
