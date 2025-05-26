import bgImage from "../assets/image/backgrounImage.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { imageSliders } from "../helper/constant.js";

const ImageSlider = () => {
  const settings = {
    spaceBetween: 30,
    loop: true,
    navigation: false,
    pagination: false,
    // autoplay: { delay: 3000 },
    modules: [Navigation, Pagination, Autoplay],
    freeMode: true,
    dot: false,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 4.5,
      },
    },
  };

  return (
    <>
      <div
        className="relative border-0 bg-cover bg-center py-10  "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-[#0b0c1c] bg-opacity-75 z-0" />

        <div className="relative z-10 px-0 md:px-6 text-white">
          <Swiper {...settings}>
            {imageSliders.map((image, index) => (
              <SwiperSlide key={index}>
                <div className=" p-4 relative rounded-2xl overflow-hidden h-[450px]">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>

                <div className="relative z-10 h-full w-full flex items-end p-4        bg-gradient-to-t from-black/50 to-transparent"></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
