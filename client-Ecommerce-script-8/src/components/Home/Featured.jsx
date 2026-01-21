import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetAllCategoriesQuery } from "../../redux/app/services/category/categoryApi";
import { useGetAllProductQuery } from "../../redux/app/services/product/productApi";
import Heading from "../shared/Heading";
const Featured = () => {
  const { data: categories } = useGetAllCategoriesQuery();
  const params = {
    limit: 1000,
  };
  const { data: products } = useGetAllProductQuery(params);
  const categoriesList = categories?.data || [];

  console.log(products?.data);
  const CountProductsBasedoNCategory = (categoryName) => {
    return products?.data?.filter(
      (product) => product.category === categoryName,
    ).length;
  };

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
        {categoriesList.map((category) => (
          <SwiperSlide key={category.id}>
            <Link to={`/products?category=${category.name}`}>
              <div className="group flex flex-col items-center cursor-pointer">
                {/* Category Card */}
                <div className="relative w-full h-60 sm:h-80 rounded-2xl overflow-hidden group shadow-lg">
                  {/* Background Image */}
                  <img
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={category.image}
                    alt={category.name}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/90" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    {/* Discount Badge */}
                    <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      18% OFF
                    </div>

                    <div className="transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {category.name}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4">
                        {CountProductsBasedoNCategory(category.name)} Items
                      </p>

                      {/* Hover Reveal Button */}
                      <div className="flex items-center gap-2 text-white font-medium opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        <span>Shop Now</span>
                        <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm group-hover:bg-primary group-hover:text-white transition-colors">
                          <ArrowRight size={16} />
                        </div>
                      </div>
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
