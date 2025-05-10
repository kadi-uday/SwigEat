const Shimmer = () => {
    return  <div className="p-1.5 pl-7 pb-2.5 grid grid-cols-4 gap-x-7.5 gap-y-10 mt-[110px]">
            {Array.from({ length: 12 }, (_, index) => (
                <div key={index} className="shimmer-card w-[250px] h-[300px] bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 bg-[length:200%_100%] animate-shimmer rounded-lg">cards</div>
            ))}
        </div>
}

export default Shimmer;