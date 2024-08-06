import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const Banner = () => {
  const slides = [
    {
      silde: 1,
      title: "Ducky One 2 Pro Classic",
      description: "Original One 2 form upgraded with Quack Mechanics.",
      src: "https://i.postimg.cc/L8ttnSPV/amjith-s-HJj-KCArq-Jng-unsplash.jpg",
      link: "/product/details/66a4103304c18e32a67a3d9b",
    },
    {
      silde: 2,
      title: "Ducky One 3 Cosmic Blue",
      description: "The One 3 series features Ducky's QUACK mechanics.",
      src: "https://i.postimg.cc/HkD0Ynrx/michelle-ding-50u-D7-Hz-OLW8-unsplash.jpg",
      link: "/product/details/66a4104d04c18e32a67a3d9d",
    },
    {
      silde: 3,
      title: "QwertyKey80 Astro Bluetooth",
      description: "The QK80 Astro keyboard embarks on a cosmic odyssey.",
      src: "https://i.postimg.cc/ZKyFzpK2/valery-sysoev-C3v-DZeh-Yi-S0-unsplash.jpg",
      link: "/product/details/66a46b0bb876a7829f04f682",
    },
  ];
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    draggable: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <div className="bg-gray-800">
      <Slider {...settings}>
        {slides.map((item) => (
          <div
            key={item.silde}
            className="relative bg-gradient-to-r from-gray-600 to-gray-900 h-screen text-white overflow-hidden"
          >
            <div className="absolute inset-0 ">
              <img
                src={item.src}
                alt="slide background"
                className="object-cover object-center w-full h-full "
              />
              <div className="absolute inset-0 bg-black opacity-35"></div>
            </div>
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center ">
              <h2 className="text-2xl text-gray-300 md:text-3xl lg:text-3xl">
                Introducing
              </h2>
              <h1 className="text-3xl md:text-5xl lg:text-5xl font-semibold leading-tight my-4">
                {item.title}
              </h1>
              <p className="text-md md:text-lg lg:text-lg text-gray-300 mb-8">
                {item.description}
              </p>
              <a href={item.link} className="keyboard-button">
                <ArrowLongRightIcon className="w-5 h-5"></ArrowLongRightIcon>
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
