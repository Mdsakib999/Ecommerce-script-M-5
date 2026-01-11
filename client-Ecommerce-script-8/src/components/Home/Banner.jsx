import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import redFlag from '../../assets/red-flag.png';
export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      discount: "Sale Up To 60%",
      title: "Buy 1 Get 1 Free",
      subtitle: "5G Smartphones",
      buttonText: "Shop Now",
      backgroundColor: "#F2F0FF",
      productImage:
        "https://i.ibb.co.com/MT3XsG4/Pngtree-samsung-galaxy-s10-mockup-green-4259066.png",
    },
    {
      id: 2,
      discount: "Limited Time Offer",
      title: "Premium Audio Experience",
      subtitle: "Wireless Headphones",
      buttonText: "Discover",
      backgroundColor: "#F2F0FF",
      productImage:
        "https://i.ibb.co.com/Mkx9VNxT/Pngtree-shiny-red-over-ear-headphones-with-21197920.png",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]);

  return (
    <div className="">
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="min-w-full group flex sm:flex-row-reverse flex-col relative min-h-[750px]"
              style={{
                backgroundColor: `${slide.backgroundColor}`,
              }}
            >
              {/* left content  */}
              <div className="w-full lg:scale-150 sm:w-1/2 flex flex-col sm:flex-row items-center">
                <div className="relative w-full h-96 flex items-center justify-center overflow-hidden">
                  {/* Background decorative circles */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-80 h-80">
                      {/* Main purple circle */}
                      <div className="absolute top-1/2 z-10 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#efdefc] rounded-full"></div>
                      {/* White decorative circles */}
                      <div className="absolute top-1/2 left-48 -translate-x-1/2 z-0  w-72 h-72 bg-[#f0e5fd] rounded-full -translate-y-[calc(50%+1rem)]"></div>
                      <div className="absolute top-48 left-32 -translate-x-1/2 z-0  w-72 h-72 bg-[#f0e5fd] rounded-full translate-y-[calc(-50%-1rem)]"></div>
                      <div className="absolute w-20 h-20 rotate-24 rounded-b-4xl rounded-tr-4xl rounded-tl-xl bg-blue-500 right-0 z-20">
                        <h2 className="text-white w-4 ml-6 -rotate-24 my-4 text-xl">
                          50% off
                        </h2>
                      </div>
                    </div>
                  </div>

                  {/* Product image */}
                  <div className="relative z-10">
                    <img
                      className="w-64 h-auto mx-auto"
                      src={slide.productImage}
                      alt="Product"
                    />
                  </div>
                </div>
              </div>
              {/* right Content */}
              <div className="flex relative items-center text-center lg:ml-48 justify-start sm:justify-center">
                <div className="absolute w-48 -left-4 bottom-36 sm:top-0">
                  <img className="w-full opacity-30 -z-10 sm:opacity-100 rotate-28" src={redFlag} alt="red flag" />
                </div>
                <div className="text-secondary z-10 px-4 max-w-4xl mx-auto">
                  <div className="space-y-4 lg:space-y-6">
                    <div className="inline-block text-white bg-secondary backdrop-blur-sm rounded-full px-6 py-2 text-sm font-medium border border-primary">
                      {slide.discount}
                    </div>

                    <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight drop-shadow-lg">
                      {slide.title}
                    </h1>

                    <p className="text-xl mx-auto lg:text-2xl opacity-90 font-medium drop-shadow-md max-w-2xl">
                      {slide.subtitle}
                    </p>

                    <Link to="/products">
                      <button className="group bg-primary text-white px-8 py-2 rounded-lg font-semibold text-lg cursor-pointer transform hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-xl">
                        {slide.buttonText}
                        <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                          →
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Navigation Arrows - Sides */}
              <button
                onClick={prevSlide}
                className="absolute opacity-0 group-hover:opacity-100 hidden sm:block  left-6 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-secondary backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300 hover:scale-110 z-50 border border-primary"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={nextSlide}
                className="absolute z-50 opacity-0 group-hover:opacity-100  hidden sm:block right-6 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-secondary backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300 hover:scale-110 border border-primary"
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          ))}
        </div>

        {/* Pagination Dots - Bottom Center */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full border border-white/30 ${
                index === currentSlide
                  ? "bg-primary w-10 h-3"
                  : "bg-white w-3 h-3"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="opacity-0 sm:opacity-100 absolute top-6 right-6 bg-primary backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium z-20 border border-primary">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>
    </div>
  );
}
