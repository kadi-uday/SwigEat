const Contact = () => {
    return (
        <div className="text-center items-center">
            <h1 className="mt-44 m-5 text-3xl font-bold ">
               This is a Contact Page
            </h1>
        <form className="flex flex-col items-center gap-6 text-xl font-bold">
            <div className="flex flex-col">
            <label >Name:</label>
            <input
                type="text"
                placeholder="Enter your name"
                className="w-72 border-[2px] rounded-lg border-gray-400 p-2 text-lg"
            />
            </div>
            <div className="flex flex-col">
            <label>Email:</label>
            <input
                type="email"
                placeholder="Enter your mail"
                className="w-72 border-[2px] rounded-lg border-gray-400 p-2 text-lg "
            />
            </div>
            <div className="flex flex-col">
            <label>Message:</label>
            <input
                type="text"
                placeholder="Enter your message"
                className="w-72 border-[2px] rounded-lg border-gray-400 p-2 text-lg "
            />
            </div>
        </form>
       <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-800 transition duration-300">
            Submit
        </button>

    </div>

    )
}

export default Contact;