const Shimmer = () => {
  return (
    <div className="p-4 pt-[110px] grid grid-cols-1 lg:mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-7">
      {Array.from({ length: 12 }, (_, index) => (
        <div
          key={index}
          className="w-full p-4 border-[2px] rounded-xl shadow-lg bg-white animate-pulse"
        >
          {/* Image placeholder */}
          <div className="h-36 bg-gray-300 rounded-md mb-4"></div>

          {/* Title placeholder */}
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-3"></div>

          {/* Description lines */}
          <div className="h-3 bg-gray-300 rounded w-full mb-2"></div>
          <div className="h-3 bg-gray-300 rounded w-5/6 mb-2"></div>

          {/* Price / rating box */}
          <div className="h-4 bg-gray-300 rounded w-1/3"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
