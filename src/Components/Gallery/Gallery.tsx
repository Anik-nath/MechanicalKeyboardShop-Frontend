import G1 from "../../assets/images/Gallery/G (1).jpg";
import G2 from "../../assets/images/Gallery/G (2).jpg";
import G3 from "../../assets/images/Gallery/G (3).jpg";
import G4 from "../../assets/images/Gallery/G (4).jpg";

const images = [
  { src: G1, alt: "Photo by Minh Pham", span: "col-span-1" },
  { src: G2, alt: "Photo by Magicle", span: "col-span-2" },
  { src: G3, alt: "Photo by Martin Sanchez", span: "col-span-2" },
  { src: G4, alt: "Photo by Lorenzo Herrera", span: "col-span-1" },
];

const Gallery = () => {
  return (
    <div className="bg-gray-900">
      <div className="py-20 text-white mx-auto max-w-screen-2xl sm:px-6 lg:px-12 px-6">
        <h1 className="text-2xl font-bold tracking-tight text-white">
          Gallery
        </h1>
        <div className="pt-8 grid grid-cols-3 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {images.map((image, index) => (
            <a
              key={index}
              href="#"
              className={`group relative flex h-48 items-end overflow-hidden bg-gray-100 shadow-lg md:h-80 ${image.span}`}
            >
              <img
                src={image.src}
                loading="lazy"
                alt={image.alt}
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
