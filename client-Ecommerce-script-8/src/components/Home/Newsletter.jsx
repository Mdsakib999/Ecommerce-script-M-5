export default function Newsletter() {
  return (
    <div className="bg-secondary">
            <div className="flex flex-col gap-4 md:flex-row w-full py-4  max-w-7xl sm:mx-auto">
      <div className="md:w-1/2 mx-auto my-4">
        <h1 className="text-white px-4 font-semibold text-2xl">
          Sign Up & Subscribe To Our Newsletter
        </h1>
        <p className="text-gray-300 px-4 text-sm md:text-md lg:text-lg text-md">
          Subscribe to our latest newsletter to get news about special discounts
          & upcoming sales
        </p>
      </div>
      <div className="w-full place-content-center mb-4 px-4 max-w-lg mx-auto">
        <div className="flex items-center bg-white rounded-lg overflow-hidden border-1 border-gray-500 w-full">
          <input
            id="email"
            type="email"
            required
            placeholder="Your email address"
            className="flex-1 min-w-0 bg-transparent text-gray-100 placeholder-gray-500 px-5 py-3 text-sm focus:ring-0 focus:outline-none"
          />
          <button
            type="submit"
            className="flex-shrink-0 bg-primary hover:bg-pink-600 cursor-pointer text-white px-5 py-3 font-semibold text-sm rounded-lg transition-all duration-300"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
