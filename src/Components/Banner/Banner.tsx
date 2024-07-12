import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const slides = [
    {
      silde: 1,
      title: "Welcome to Our Awesome Website",
      description: "Discover amazing features and services that await you.",
      src: "https://i.ibb.co/cT1SFb0/amjith-s-HJj-KCArq-Jng-unsplash.jpg",
    },
    {
      silde: 2,
      title: "Welcome to Our Awesome Website",
      description: "Discover amazing features and services that await you.",
      src: "https://i.ibb.co/BTfrhpG/valery-sysoev-C3v-DZeh-Yi-S0-unsplash.jpg",
    },
    {
      silde: 3,
      title: "Welcome to Our Awesome Website",
      description: "Discover amazing features and services that await you.",
      src: "https://i.ibb.co/YhXWGhP/michelle-ding-50u-D7-Hz-OLW8-unsplash.jpg ",
    },
  ];
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    draggable: true,
    autoplaySpeed: 5000,
    arrows: false,
  };
  return (
    <div>
      <Slider {...settings}>
        {slides.map((item) => (
          <div
            key={item.silde}
            className="relative bg-gradient-to-r from-gray-600 to-gray-900 h-screen text-white overflow-hidden"
          >
            <div className="absolute inset-0">
              <img
                src={item.src}
                alt="slide background"
                className="object-cover object-center w-full h-full"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
              <h1 className="text-5xl font-bold leading-tight mb-4">
                {item.title}
              </h1>

              <p className="text-lg text-gray-300 mb-8">{item.description}</p>
              <a
                href="#"
                className="gradient-button transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                See Details
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
