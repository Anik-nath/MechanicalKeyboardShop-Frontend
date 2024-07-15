import image1 from "../../assets/images/photo-1581351123004-757df051db8e.jpeg";
import Gallery from "../../Components/Gallery/Gallery";
const About = () => {
  return (
    <div>
      <section className="py-20 text-white mx-auto max-w-screen-2xl sm:px-6 lg:px-0 bg-gray-900">
        <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-7xl lg:mt-12">
          <div className="w-full h-64 lg:w-1/2 lg:h-auto">
            <img
              className="h-full w-full object-cover"
              src={image1}
              alt="Winding mountain road"
            />
          </div>

          <div className="max-w-full bg-gray-800 md:max-w-2xl md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-2">
            <div className="flex flex-col lg:p-12 py-12 md:px-16 px-6">
              <h2 className="text-2xl font-medium uppercase text-white lg:text-2xl">
                About Us
              </h2>
              <p className="mt-8 text-justify text-gray-300">
                We has recently released a new set of dyesub keycaps. These
                keycaps are noted for their high-quality PBT plastic which
                ensures durability and longevity. The dye-sublimation process
                used for the legends allows for crisp, clear designs that won't
                fade with time. Our mission is to offer the largest dedicated
                catalog of mechanical keyboards in the world while providing
                industry-leading ship speeds and after-sale support for our
                customers.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Gallery></Gallery>
      </section>
    </div>
  );
};

export default About;
