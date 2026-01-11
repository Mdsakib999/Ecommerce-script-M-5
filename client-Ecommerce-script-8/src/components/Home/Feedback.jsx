import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import FeedbackCard from "../shared/FeedbackCard";
import Heading from "../shared/Heading";
export default function Feedback() {
  return (
    <div className="py-16 bg-[#f9faf9] sm:py-24">
        <Heading content="Our Customers Love" />
        {/* card section */}
        <div className="max-w-7xl mt-8 mx-12 lg:mx-auto ">
                    <Swiper
          modules={[Autoplay]}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          <SwiperSlide>
            <FeedbackCard />
          </SwiperSlide>
          <SwiperSlide>
            <FeedbackCard />
          </SwiperSlide>
          <SwiperSlide>
            <FeedbackCard />
          </SwiperSlide>
          <SwiperSlide>
            <FeedbackCard />
          </SwiperSlide>
          <SwiperSlide>
            <FeedbackCard />
          </SwiperSlide>
        </Swiper>
        </div>
    </div>
  );
}
