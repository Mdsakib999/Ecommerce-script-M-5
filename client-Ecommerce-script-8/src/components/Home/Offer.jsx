import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Button from "../shared/Button";

const Offer = () => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-4 max-w-7xl mx-auto px-4 py-8">
      <div className="w-full md:w-1/2 rounded-lg flex items-center bg-[#fff6fb] min-h-80">
        <div className="w-1/2">
          <img
            className=""
            src="https://i.ibb.co.com/Mkx9VNxT/Pngtree-shiny-red-over-ear-headphones-with-21197920.png"
            alt="headphones"
          />
        </div>
        <div className="space-y-4 w-1/2 text-secondary">
          <h1 className="text-xl sm:text-2xl  font-semibold">Wireless Headphones | SONIQ H9 PRO BLACK</h1>
          <p>
            From <span>$88.00</span>
          </p>
          <Button to="/products" type="outline" content="Shop Now" />
        </div>
      </div>
      <div className="w-full md:w-1/2 rounded-lg flex items-center bg-[#EEEFFB] min-h-80">
        <div className="w-1/2">
          <img
            className=""
            src="https://i.ibb.co.com/MT3XsG4/Pngtree-samsung-galaxy-s10-mockup-green-4259066.png"
            alt="smartphones"
          />
        </div>
        <div className="space-y-4 w-1/2 text-secondary">
          <h1 className="text-xl sm:text-2xl  font-semibold">Galaxy Pro 5G Smartphone</h1>
          <p>
            From <span>$549.00</span>
          </p>
          <Button to="/products" type="outline"  content="Shop Now" />
        </div>
      </div>
    </div>
  );
};

export default Offer;
