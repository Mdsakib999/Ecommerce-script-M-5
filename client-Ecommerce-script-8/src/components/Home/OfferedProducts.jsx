import { useMemo } from "react";
import Product from "../../pages/Products/Product";
import { useGetAllProductQuery } from "../../redux/app/services/product/productApi";
import Loader from "../../utils/Loader";
import Heading from "../shared/Heading";
import OfferTimer from "./OfferTimer";

export default function OfferedProducts() {
  const targetDate = new Date("January 25, 2026 00:00:00").getTime();

  const params = useMemo(() => ({ limit: 3 }), []);
  const { data: productsData, isLoading: isProductLoading } =
    useGetAllProductQuery(params);
  const products = productsData?.data || [];
  if (isProductLoading) return <Loader />;

  return (
    <div className="max-w-7xl py-16 px-4 w-full mx-auto">
      <div className="flex items-center space-x-3">
        <Heading
          content="Available Offer"
          subheading="Exclusive deals you can redeem right now"
        />
      </div>

      {/* Timer + Products */}
      <div className="shadow-md flex flex-col gap-4 lg:flex-row rounded-2xl p-6 lg:space-x-6 space-y-6 lg:space-y-0">
        {/* Timer */}
        <div className="w-full lg:w-1/4 flex flex-col mt-4">
          <h1 className="text-xl md:text-2xl font-bold mb-6">
            Limited Time Offer !
          </h1>
          <OfferTimer targetDate={targetDate} />
          <p className=" border w-40 md:w-44 py-2 px-2 text-center rounded-full mt-12 lg:mt-24 cursor-pointer text-sm md:text-lg font-semibold hover:bg-gray-500 hover:text-white transition">
            View All Offers
          </p>
        </div>

        {/* Products */}
        <div className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Product key={product?._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
