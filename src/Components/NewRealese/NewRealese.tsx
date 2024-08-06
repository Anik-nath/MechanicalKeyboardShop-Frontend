import v1 from "../../assets/videos/QwertyKey80 Mechanical Keyboard.mp4";

const NewRealese = () => {
  return (
    <div className="md:px-12 px-6 py-8">
      <div className="relative max-w-screen-xl h-screen overflow-hidden mx-auto">
        <div className="absolute inset-0 aspect-w-16 aspect-h-9">
          <video
            className="absolute top-0 left-0 min-w-full min-h-full object-cover"
            src={v1}
            autoPlay
            loop
            muted
            title="QwertyKey80 Mechanical Keyboard - Astro, War, Leaf!"
          ></video>
        </div>
        <div className="absolute bg-black inset-0 h-full w-full opacity-50 z-10"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h2 className="text-md text-gray-300 md:text-xl lg:text-xl mb-4">
            NEW SERIES QWERTYKEY80!
          </h2>
          <a
            href="/product/details/66a46b0bb876a7829f04f682"
            className="gradient-button"
          >
            Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewRealese;
