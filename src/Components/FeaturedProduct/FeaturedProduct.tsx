import Slider from "react-slick";
import { TProduct, useGetAllProductsQuery } from "../../Redux/api/api";
import Loader from "../Animation/Loader";
import ProductCard from "../ProductCard/ProductCard";
import './slider.css' 

const FeaturedProduct = () => {
  const { data, isLoading, error } = useGetAllProductsQuery();
  const products = data?.data;
  if (error) return <div>Error loading products</div>;

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 5,
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
    <div className="mx-auto max-w-screen-2xl px-6 lg:px-12 bg-gray-900 py-8 mt-8">
      <div className="py-8 flex items-center justify-between">
        <h2 className="md:text-2xl lg:text-2xl text-xl font-bold tracking-tight text-white">
          Featured Products
        </h2>
        <a className="text-white gradient-border px-4 py-1" href="/products">
          See more
        </a>
      </div>
      <div id="relatedProduct">
        {isLoading ? (
          <Loader></Loader>
        ) : (
          <Slider {...settings}>
            {products
              ?.map((product: TProduct) => (
                <ProductCard product={product} key={product._id}></ProductCard>
              ))
              .slice(0, 8)}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default FeaturedProduct;
