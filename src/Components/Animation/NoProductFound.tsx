import { ShoppingBagIcon } from "@heroicons/react/24/outline";

const NoProductFound = () => {
  return (
    <div className="text-gray-400 flex flex-col justify-center items-center text-md bg-gray-800 rounded h-80 border-dashed border border-gray-600 mx-6 md:mx-0 lg:mx-0 animate-pulse">
      <div>
        <ShoppingBagIcon className="text-gray-400 w-8"></ShoppingBagIcon>
      </div>
      <p>Sorry! No product found</p>
    </div>
  );
};

export default NoProductFound;
