import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Heading from "../shared/Heading";
const Featured = () => {
  const categories = [
    {
      id: 1,
      name: "Electronics",
      image:
        "https://res.cloudinary.com/dpkjsufwx/image/upload/v1760521070/products/vxsssdax4idhkk4ousre.avif",
      count: 45,
    },
    {
      id: 2,
      name: "Accessories",
      image:
        "https://res.cloudinary.com/dpkjsufwx/image/upload/v1760520895/products/umubcdzvmzabpnk6orpn.jpg",
      count: 38,
    },
    {
      id: 3,
      name: "Home Appliances",
      image:
        "https://res.cloudinary.com/dpkjsufwx/image/upload/v1760521316/products/gpp3oumjnmomf69iod41.jpg",
      count: 56,
    },
    {
      id: 4,
      name: "Home Entertainment",
      image:
        "https://res.cloudinary.com/dpkjsufwx/image/upload/v1760521245/products/je3uxv5xraeolzrwhdzs.jpg",
      count: 33,
    },
    {
      id: 5,
      name: "Kitchen Appliances",
      image:
        "https://res.cloudinary.com/dpkjsufwx/image/upload/v1760521269/products/oddfwp1nph2c73hftjpf.jpg",
      count: 25,
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 mb-6">
        <Heading
          content="Popular Category"
          subheading="Discover the latest in home, electronic accessories and gadgets"
        />
      </div>

      {/* Swiper Container */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        autoplay
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        className="pb-12"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <Link to={`/products?category=${category.name}`}>
              <div className="group flex flex-col items-center cursor-pointer">
                {/* Category Card */}
                <div className="w-full min-h-32 sm:min-h-60   bg-white rounded-lg border-2 border-gray-200  flex flex-row-reverse items-center justify-center transition-all duration-500 ease-in-out p-6">
                  {/* Image */}
                  <div className="h-32 min-h-24 transition-transform mb-4 duration-500 ease-in-out">
                    <img
                      className="h-full w-full object-cover"
                      src={category.image}
                      alt="category image"
                    />
                  </div>
                  {/* Category Name */}
                  <div className="w-full">
                    <p className="p-1 w-20 text-sm text-center rounded-full text-white bg-[#3cb371]">
                      18% off
                    </p>
                    <h3 className="font-bold text-secondary mt-3 text-sm sm:text-base">
                      {category.name}
                    </h3>

                    {/* Item Count */}
                    <p className="text-gray-600 text-xs sm:text-sm transition-colors duration-300">
                      {category.count} Items
                    </p>
                    <div className="border-1 py-4 px-4 mt-8 rounded-full w-13 group-hover:border-primary group-hover:bg-secondary-light border-gray-300">
                      <ArrowRight size="18" color="blue" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Featured;
