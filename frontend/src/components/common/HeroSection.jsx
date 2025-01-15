import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import HeroImageOne from "../../assets/images/banner-1.jpg";
import HeroImageTwo from "../../assets/images/banner-2.jpg";
const HeroSection = () => {
  return (
    <section className="hero-section">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        breakpoints={{
          1024: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
      >
        <SwiperSlide>
          <div
            className="content"
            style={{ backgroundImage: `url(${HeroImageOne})` }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="content"
            style={{ backgroundImage: `url(${HeroImageTwo})` }}
          ></div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSection;
