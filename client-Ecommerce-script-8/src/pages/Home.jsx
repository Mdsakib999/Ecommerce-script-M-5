import { useEffect } from "react";
import toast from "react-hot-toast";
import Banner from "../components/Home/Banner";
import Featured from "../components/Home/Featured";
import Feedback from "../components/Home/Feedback";
import Offer from "../components/Home/Offer";
import OfferedProducts from "../components/Home/OfferedProducts";
import PopularProduct from "../components/Home/PopularProduct";
import RecommendedProduct from "../components/Home/RecommendedProduct";
import Solution from "../components/Home/Solution";
import TopBanner from "../components/Home/TopBanner";
import Button from "../components/shared/Button";
import Heading from "../components/shared/Heading";

export default function Home() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const success = params.get("success");

    if (success) {
      toast.success(<h1 className="font-serif">{success}</h1>, {
        position: "top-center",
      });

      const newUrl = window.location.origin + window.location.pathname;
      window.history.replaceState({}, document.title, newUrl);
    }
  }, []);

  return (
    <>
      <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-16">
        <Banner />
        <Featured />
        {/* Popular product */}
        <div className="">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 mb-6">
            <Heading
              content="Popular Products"
              subheading="Top-selling products you can’t go wrong with"
            ></Heading>
          </div>
          <PopularProduct />
          <div className="w-full text-center">
            <Button content="View More" to="/products" />
          </div>
        </div>

        <OfferedProducts />
        <Offer />
        <RecommendedProduct />
        <TopBanner />
        <Solution />
        <Feedback />
      </div>
    </>
  );
}
