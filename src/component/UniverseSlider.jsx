// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import bgImage from "../assets/image/backgrounImage.png";
import { UniverseSliderdata } from "../helper/constant.js";
import navPrev from "../assets/svg/navPrev.svg";
import navnext from "../assets/svg/navnext.svg";

const UniverseSlider = () => {
  const swiperRef = useRef(null);

  const settings = {
    spaceBetween: 30,
    loop: true,
    pagination: false,
    modules: [Navigation, Pagination, Autoplay],
    onBeforeInit: (swiper) => {
      swiperRef.current = swiper;
    },
    freeMode: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      568: {
        slidesPerView: 1.5,
      },
      1024: {
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 2,
      },
    },
  };
  return (
    <>
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-[#02000a] to-[#040117] bg-gray-800 opacity-75 z-0"></div>
        <div className="w-6xl m-auto h-1 bg-amber-50"></div>

        <div className="max-w-7xl px-3 mx-auto relative z-10   py-10 text-white">
          <div className=" mb-8 bg-gray-400  h-0.5 w-3/8 md:w-5/6"></div>
          <div className="reletive">
            <img
              src={navPrev}
              alt=""
              onClick={() => swiperRef.current?.slidePrev()}
              className="absolute top-8 right-5"
            />
            <img
              src={navnext}
              alt=""
              onClick={() => swiperRef.current?.slideNext()}
              className="absolute top-8 right-25"
            />
          </div>

          <Swiper {...settings}>
            <SwiperSlide>
              <div className="border-2 border-green-400 rounded-2xl p-6 md:p-10 text-center  bg-black  h-[350px] flex flex-col justify-center items-center">
                <h2 className=" font-SquadaOne  text-3xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-800 mb-4">
                  THE UNIVERSE
                </h2>
                <p className="font-Outfit text-sm md:text-base text-white max-w-3xl mx-auto ">
                  We have created a new Super-Powered Universe with an initial 5
                  feature films. We plan to grow and expand like the Marvel
                  Universe and bring this new Universe to theater screens, Join
                  us as we create the films, video games, comic. !
                </p>
              </div>
            </SwiperSlide>
            {UniverseSliderdata.map((imageData, index) => (
              <SwiperSlide key={index}>
                <div className="px-3" key={index}>
                  <div className="border-2 border-white rounded-2xl p-4 h-auto md:h-[350px] flex flex-col md:flex-row items-center gap-6">
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                      <img
                        src={imageData.universeslider}
                        alt={`Slide ${index}`}
                        className="w-full max-h-[250px] object-contain"
                      />
                    </div>
                    <div className="font-Outfit w-full md:w-1/2 ">
                      <h2 className="text-lg ml-18 md:ml-24 md:text-xl font-bold mb-3 text-white">
                        {imageData.title}
                      </h2>
                      <p className="hidden sm:block text-sm text-gray-300">
                        {imageData.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default UniverseSlider;
