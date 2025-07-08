import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError();
return (
    <div className="min-h-screen  flex flex-col items-center justify-center bg-gray-50 px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4 animate-bounce">
        Oops !!!
      </h1>
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 text-center">
        Something went wrong 😕
      </h2>
      <h2 className="text-lg md:text-xl text-gray-600 text-center">
        <span className="font-bold text-red-500">{err.status}</span> : {err.statusText}
      </h2>
      <p className="mt-6 text-gray-500 text-center text-sm md:text-base">
        Please try refreshing the page or go back to the homepage.
      </p>
    </div>
)
}

export default Error;