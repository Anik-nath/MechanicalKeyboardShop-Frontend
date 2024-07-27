const DetailsSkeleton = () => {
  return (
    <div className="mx-auto px-6 md:px-0 lg:px-0">
      <div className="flex flex-col md:flex-row -mx-4 animate-pulse">
        <div className="md:flex-1 px-4">
          <div className="md:h-[460px] lg:h-[460px] flex justify-center items-center rounded-lg bg-gray-800 mb-4">
            <div className="w-full h-full bg-gray-700"></div>
          </div>
        </div>
        <div className="md:flex-1 px-4">
          <div className="h-8 bg-gray-700 rounded mb-8"></div>
          <div className="my-4">
            <div className="h-4 bg-gray-700 rounded w-1/4 mb-1"></div>
            <div className="h-4 bg-gray-600 rounded w-1/3"></div>
          </div>
          <div className="flex flex-row items-center mb-4">
            <div className="mr-8">
              <div className="h-4 bg-gray-700 rounded w-1/4 mb-1"></div>
              <div className="h-6 bg-gray-600 rounded w-1/2"></div>
            </div>
            <div>
              <div className="h-4 bg-gray-700 rounded w-1/3 mb-1"></div>
              <div className="h-4 bg-gray-600 rounded w-1/2"></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="h-4 bg-gray-700 rounded w-1/3 mb-2"></div>
            <div className="flex items-center gap-2">
              <div className="h-4 bg-gray-600 rounded w-1/4"></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="h-4 bg-gray-700 rounded w-1/3 mb-2"></div>
            <div className="h-16 bg-gray-600 rounded"></div>
          </div>
          <div className="flex flex-col">
            <div id="quantity">
              <div className="h-4 bg-gray-700 rounded w-1/4 mb-2"></div>
              <div className="flex gap-8 items-center mt-2">
                <div className="h-8 w-8 bg-gray-700 rounded-full"></div>
                <div className="h-8 w-8 bg-gray-700 rounded-full"></div>
                <div className="h-8 w-8 bg-gray-700 rounded-full"></div>
              </div>
            </div>
            <div className="h-12 bg-gray-700 rounded mt-4 flex items-center justify-center">
              <div className="h-6 w-6 bg-gray-600 rounded-full"></div>
              <div className="h-6 w-24 bg-gray-600 rounded ml-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSkeleton;
