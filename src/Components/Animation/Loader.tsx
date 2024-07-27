const Loader = () => {
  return (
    <div className="text-gray-400 flex flex-col justify-center items-center text-md bg-gray-800 rounded h-80 border-dashed border border-gray-600 mx-6 md:mx-0 lg:mx-0 animate-pulse">
      <div className="flex justify-center items-center h-screen">
        <img
          className="w-20 h-20 animate-spin"
          src="https://www.svgrepo.com/show/70469/loading.svg"
          alt="Loading icon"
        />
      </div>
    </div>
  );
};

export default Loader;
