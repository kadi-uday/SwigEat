const Contact = () => {
  return (
    <div className="flex flex-col items-center text-center px-4 mt-28 md:mt-28 lg:mt-36">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10">
        This is a Contact Page
      </h1>

      <form className="flex flex-col items-center -mt-3 gap-3 md:gap-4 lg:gap-6 text-base md:text-lg lg:text-xl font-semibold w-full max-w-md">

        <div className="flex flex-col w-full">
          <label className="mb-1 text-left">Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border-[2px] rounded-lg border-gray-400 p-2 text-sm md:text-base lg:text-lg"
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="mb-1 text-left">Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border-[2px] rounded-lg border-gray-400 p-2 text-sm md:text-base lg:text-lg"
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="mb-1 text-left">Message:</label>
          <textarea
            rows="4"
            placeholder="Enter your message"
            className="w-full border-[2px] rounded-lg border-gray-400 p-2 text-sm md:text-base lg:text-lg resize-none"
          />
        </div>

        <button
          type="submit"
          className="mt-2 md:mt-2 lg:mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg text-sm md:text-base lg:text-lg font-medium hover:bg-blue-800 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
