import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import bgImage from "../assets/image/backgrounImage.png";
import { logos } from "../helper/constant.js";
import LogoSlider6 from "../assets/svg/LogoSlider6.svg";

const LogoSlider = () => {
  const settings = {
    spaceBetween: 30,
    loop: true,
    navigation: false,
    pagination: false,
    // autoplay: { delay: 3000 },
    modules: [Navigation, Pagination, Autoplay],
    freeMode: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1280: {
        slidesPerView: 6,
      },
    },
  };

  return (
    <div
      className="relative border-0 bg-cover bg-center px-4 py-10 sm:px-10 md:px-32 lg:px-40"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-[#050510] bg-opacity-75 z-0" />

      <div className="relative z-10 w-full max-w-[1440px] my-16">
        <Swiper {...settings}>
          <SwiperSlide>
            <div className="border-l-1 rounded-2xl border-l-white border-b-2 border-b-white">
              <img src={LogoSlider6} alt="" className=" p-4 md:p-5" />
            </div>
          </SwiperSlide>
          {logos.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="px-4 w-full h-full">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LogoSlider;
