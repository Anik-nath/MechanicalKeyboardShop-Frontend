import {
  MinusIcon,
  PlusIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import StarRatings from "react-star-ratings";
import ProductCard, { TProductCardProps } from "../ProductCard/ProductCard";
import { TProduct, useGetAllProductsQuery } from "../../Redux/api/api";
import Slider from "react-slick";
import "./Details.css";

const Details: React.FC<TProductCardProps> = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleImageClick = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const { data } = useGetAllProductsQuery();
  const products = data?.data;
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    draggable: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mx-auto px-6 md:px-0 lg:px-0">
      <div className="flex flex-col md:flex-row -mx-4">
        <div className="md:flex-1 px-4">
          <div className="md:h-[460px] lg:h-[460px] flex justify-center items-center rounded-lg bg-gray-800  mb-4">
            <img
              className="w-full object-cover cursor-zoom-in"
              src={product.image}
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
                    src={product.image}
                    alt="Product Image"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="md:flex-1 px-4 ">
          <h2 className="text-2xl font-bold text-white mb-8">
            {product.title}
          </h2>
          <div className="my-4">
            <span className="font-semibold text-white pr-1"> Brand:</span>
            <span className="text-gray-300 ">{product.brand}</span>
          </div>
          <div className="flex flex-row items-center mb-4">
            <div className="mr-8">
              <span className="font-semibold text-white pr-1">Price:</span>
              <span className="font-semibold gradient-text text-xl">
                ${product.price}
              </span>
            </div>
            <div>
              <span className="font-semibold text-white pr-1">
                Availability:
              </span>
              <span className="text-gray-300 ">
                In Stock ({product.availableQuantity})
              </span>
            </div>
          </div>
          <div className="mb-4">
            <span className="font-semibold text-white">Product Review:</span>
            <div className=" mt-2">
              <div className="flex items-center gap-2" id="rating">
                <div>
                  <StarRatings
                    rating={product.rating}
                    starDimension="16px"
                    starSpacing="1px"
                    starRatedColor="orange"
                    numberOfStars={5}
                    name="rating"
                  />
                </div>
                <span>({product.rating})</span>
              </div>
            </div>
          </div>
          <div>
            <span className="font-semibold white ">Product Description:</span>
            <p className="text-gray-300 text-justify text-sm mt-2">
              {product.description}
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
      {/* Related products */}
      <div className="py-20">
        <h1 className="text-2xl font-medium uppercase text-white lg:text-2xl mb-8">
          Related products
        </h1>
        <div id="relatedProduct">
          <Slider {...settings}>
            {products
              ?.filter((item) => item.brand === product.brand)
              .filter((currentItem) => currentItem._id !== product._id)
              ?.map((product: TProduct) => (
                <ProductCard product={product} key={product._id}></ProductCard>
              ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Details;
