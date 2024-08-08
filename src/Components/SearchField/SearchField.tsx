import { useState, useEffect } from "react";
import { TProduct, useLazySearchProductsQuery } from "../../Redux/api/api";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchField = () => {
  const [searchInput, setSearchInput] = useState("");
  const [trigger, { data: searchResults, isLoading }] =
    useLazySearchProductsQuery();

  useEffect(() => {
    if (searchInput.length > 0) {
      trigger(searchInput);
    }
  }, [searchInput, trigger]);

  return (
    <div className="relative flex items-center max-w-md md:bg-gray-800 rounded-full">
      <div className="mx-2">
        <MagnifyingGlassIcon className="h-5 w-5 lg:h-6 lg:w-6 md:h-6 md:w-6 text-gray-300" />
      </div>
      <div className="w-full">
        <input
          className="md:w-full lg:w-full w-0 lg:px-4 lg:py-1 md:px-4 md:py-1 bg-transparent text-gray-300 rounded-full focus:outline-none"
          placeholder="Search"
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      {searchInput && (
        <div
          id="result"
          className="absolute w-full max-h-80 h-auto overflow-y-scroll top-full left-0 right-0 bg-white mt-2 z-10"
        >
          {isLoading ? (
            <div className="p-4 text-center">
              <span>Loading...</span>
            </div>
          ) : (
            <div className="w-full">
              {searchResults?.data?.length > 0 ? (
                searchResults.data.map((product: TProduct) => (
                  <a
                    href={`/product/details/${product._id}`}
                    key={product._id}
                    className="p-4 hover:bg-gray-100 flex justify-between items-center w-full border-b"
                  >
                    <div className="flex-shrink-0 w-12 h-14">
                      <img
                        className="w-full h-full object-cover"
                        src={product.image}
                        alt={product.title}
                      />
                    </div>
                    <div className="ml-4">
                      <h6 className="text-sm font-medium text-gray-900">
                        {product.title}
                      </h6>
                    </div>
                  </a>
                ))
              ) : (
                <div className="p-4 text-center">No products found</div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchField;
