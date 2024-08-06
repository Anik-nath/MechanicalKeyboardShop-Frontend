import { FireIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import StarRatings from "react-star-ratings";
import { TProduct } from "../../Redux/api/api";

export type TProductCardProps = {
  product: TProduct;
};

const ProductCard: React.FC<TProductCardProps> = ({ product }) => {
  return (
    <div>
      <div className="w-ful relative bg-gray-800  shadow-md duration-500 hover:scale- hover:shadow-xl">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 absolute px-2 pb-1 right-4 text-md flex flex-row items-center">
          <FireIcon className="w-5 h-5"></FireIcon> <span>Trending</span>
        </div>
        <a href={`/product/details/${product._id}`}>
          <div className="text-white px-4 py-6">
            <span className="text-gray-400 mr-3 uppercase text-sm">
              {product.brand}
            </span>
            <h2 className="text-xl py-2 font-bold text-white truncate block capitalize">
              {product.title}
            </h2>
            <div id="rating">
              <StarRatings
                rating={product.rating}
                starDimension="16px"
                starSpacing="1px"
                starRatedColor="orange"
                numberOfStars={5}
                name="rating"
              />
            </div>
          </div>
          <div className="bg-gray-800 h-28">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover my-4 scale-90 duration-500 hover:scale-100"
            />
          </div>

          <div className="px-4 py-3 w-full">
            <p className="text-white mr-3 uppercase text-md w-full truncate">
              {product.description}
            </p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-white cursor-auto my-6">
                Price: ${product.price}
              </p>
              <a href="/cart" className="ml-auto p-2">
                <ShoppingCartIcon className="text-white h-6 w-6"></ShoppingCartIcon>
              </a>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
