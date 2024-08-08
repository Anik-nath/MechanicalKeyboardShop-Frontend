import { ChevronDownIcon, NoSymbolIcon } from "@heroicons/react/24/outline";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useRef, useEffect } from "react";
import { TProduct, useGetAllProductsQuery } from "../../Redux/api/api";
import Loader from "../../Components/Animation/Loader";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../Redux/store";
import {
  resetPrice,
  setPrice,
  toggleBrand,
  setSortByPrice,
  resetAllFilters,
  toggleInStock,
  toggleOutOfStock,
} from "../../Redux/Features/filterSlice";

const Product: React.FC = () => {
  const rangeRef = useRef<HTMLInputElement>(null);
  const dispatch: AppDispatch = useDispatch();

  const price = useSelector((state: RootState) => state.filter.price);
  const brands = useSelector((state: RootState) => state.filter.brands);
  const sortByPrice = useSelector(
    (state: RootState) => state.filter.sortByPrice
  );
  const inStock = useSelector((state: RootState) => state.filter.inStock);
  const outOfStock = useSelector((state: RootState) => state.filter.outOfStock);

  // fetch all products
  const { data, isLoading } = useGetAllProductsQuery();
  const products = data?.data;

  // all brands
  const allbrands = [
    "Ducky",
    "Varmilo",
    "QwertyKey",
    "Realforce",
    "Royal Kludge",
    "skylong",
    "HHKB",
  ];

  // filter and sort products
  const filteredProducts = products
    ?.filter((product: TProduct) => {
      const priceMatch = price > 0 ? product.price <= price : true;
      const brandMatch =
        brands.length > 0 ? brands.includes(product.brand) : true;
      const quantityMatch =
        (inStock && product.availableQuantity > 0) ||
        (outOfStock && product.availableQuantity === 0) ||
        (!inStock && !outOfStock);
      return priceMatch && brandMatch && quantityMatch;
    })
    .sort((a, b) => {
      if (sortByPrice === "asc") return a.price - b.price;
      if (sortByPrice === "desc") return b.price - a.price;
      return 0;
    });

  useEffect(() => {
    if (rangeRef.current) {
      rangeRef.current.value = String(price);
    }
  }, [price]);

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
              Showing {filteredProducts?.length || 0} of {products?.length || 0}
              products
            </p>
            <p className="px-4 font-semibold">Sort By : </p>
            <div className="group relative cursor-pointer py-2">
              <div className="flex items-center justify-between space-x-5 gradient-border px-4">
                <div className="menu-hover my-2 text-base text-white lg:mx-4 uppercase">
                  Filter
                </div>
                <ChevronDownIcon className="h-5"></ChevronDownIcon>
              </div>
              <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 text-gray-800 shadow-xl group-hover:visible">
                <button
                  onClick={() => dispatch(setSortByPrice("asc"))}
                  className="my-2 text-sm block border-b border-gray-300 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                >
                  Price, Low to High
                </button>
                <button
                  onClick={() => dispatch(setSortByPrice("desc"))}
                  className="my-2 text-sm block border-b border-gray-300 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                >
                  Price, High to Low
                </button>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 md:gap-4 ">
            {/* left side  */}
            <div className="bg-gray-800 p-4">
              <div id="availability">
                <p className="p-2">Availability</p>
                <div className="flex items-center space-x-2 rounded p-2">
                  <input
                    onChange={() => dispatch(toggleInStock(!inStock))}
                    type="checkbox"
                    id="inStock"
                    name="inStock"
                    className="h-6 w-6 rounded shadow-sm accent-gray-600 cursor-pointer"
                  />
                  <label
                    htmlFor="inStock"
                    className="flex w-full space-x-2 text-md"
                  >
                    In stock / Pre-order
                  </label>
                </div>
                <div className="flex items-center space-x-2 rounded p-2">
                  <input
                    onChange={() => dispatch(toggleOutOfStock(!outOfStock))}
                    type="checkbox"
                    id="outOfStock"
                    name="outOfStock"
                    className="h-6 w-6 rounded shadow-sm accent-gray-600 cursor-pointer"
                  />
                  <label
                    htmlFor="outOfStock"
                    className="flex w-full space-x-2 text-md"
                  >
                    Out of stock
                  </label>
                </div>
              </div>
              <div id="price" className="py-6">
                <div className="flex justify-between items-center">
                  <p className="p-2 font-semibold ">Price Range</p>
                  <button
                    onClick={() => dispatch(resetPrice())}
                    className="p-2 font-semibold"
                  >
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
                        dispatch(setPrice(Number(e.currentTarget.value)))
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
                <p className="p-2 font-semibold capitalize">Keyboard Brand</p>
                {allbrands.map((brand) => (
                  <div
                    className="flex items-center space-x-2 rounded p-2 capitalize"
                    key={brand}
                  >
                    <input
                      type="checkbox"
                      name="brand"
                      className="h-6 w-6 rounded shadow-sm accent-gray-600 cursor-pointer"
                      checked={brands.includes(brand)}
                      onChange={() => dispatch(toggleBrand(brand))}
                    />
                    <label className="flex w-full space-x-2 text-md">
                      {brand}
                    </label>
                  </div>
                ))}
              </div>
              <div id="resetfilter" className="p-2 my-4">
                <button
                  onClick={() => dispatch(resetAllFilters())}
                  className="gradient-border px-4 py-1"
                >
                  Reset All
                </button>
              </div>
            </div>
            {/* right side */}
            <div className="col-span-3 mt-6 md:mt-0 lg:mt-0 px-6 md:px-0 lg:px-0">
              {/* show all products grid start */}
              {isLoading ? (
                <Loader></Loader>
              ) : (
                <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
                  {filteredProducts?.map((product: TProduct) => (
                    <ProductCard
                      product={product}
                      key={product._id}
                    ></ProductCard>
                  ))}
                </div>
              )}
              {/* show all products grid end*/}
              {filteredProducts?.length === 0 ? (
                <div id="noProducts">
                  <div className="bg-gray-800 border border-dashed border-gray-600 flex justify-center items-center py-4 h-screen w-full">
                    <div className="flex justify-center flex-col items-center">
                      <NoSymbolIcon className="w-8 h-8 my-1 text-red-500"></NoSymbolIcon>
                      <p className="text-lg text-gray-400">
                        No Products Found !
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}

              <div className="flex justify-center gap-4 mt-4">
                <button className="gradient-border px-4 py-2 hover:bg-gray-800">
                  Previous
                </button>
                <button className="gradient-border px-4 py-2 hover:bg-gray-800">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
