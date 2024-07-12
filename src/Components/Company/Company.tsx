import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import c1 from "../../assets/images/company (1).png";
import c3 from "../../assets/images/company (3).png";
import c4 from "../../assets/images/company (4).png";
import c5 from "../../assets/images/company (5).png";
import c6 from "../../assets/images/company (6).png";
import c7 from "../../assets/images/company (7).png";
import c8 from "../../assets/images/company (8).png";
import c9 from "../../assets/images/company (9).png";
import c10 from "../../assets/images/company (10).png";

const Company = () => {
  const companies = [
    {
      logo: c1,
    },
    {
      logo: c3,
    },
    {
      logo: c4,
    },
    {
      logo: c5,
    },
    {
      logo: c6,
    },
    {
      logo: c7,
    },
    {
      logo: c8,
    },
    {
      logo: c9,
    },
    {
      logo: c10,
    },
  ];
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    draggable: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <div>
      <div className="mx-auto max-w-screen-2xl sm:px-6 lg:px-12">
        <Slider {...settings}>
          {companies.map((item) => (
            <div
              key={item.logo}
              className="py-8 px-4 flex justify-center items-center"
            >
              <img
                className="h-10 w-100 mx-auto"
                src={item.logo}
                alt="company logo"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Company;
