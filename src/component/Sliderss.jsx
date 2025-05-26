import Slider from "react-slick";
import slider from "../assets/image/slider.png";
import slider2 from "../assets/image/slider2.png";
import slider3 from "../assets/image/slider3.png";
import bgImage from "../assets/image/backgrounImage.png";
import navNext from "../assets/svg/navNext.svg";
import navPrev from "../assets/svg/navPrev.svg";
import sliderBorder from "../assets/svg/sliderBorder.svg";
import smSliderBorder from "../assets/image/smSliderBorder.png";
import sliderBorder2 from "../assets/svg/sliderBorder2.svg";

import "../styles/slick.css";

const Sliderss = () => {
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute right-10 -top-10  z-20 cursor-pointer text-white text-xl"
        onClick={onClick}
      >
        <img src={navPrev} alt="" />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute right-30 -top-10 cursor-pointer  text-xl  "
        onClick={onClick}
      >
        <img src={navNext} alt="" />
      </div>
    );
  };
  const settingss = {
    dots: true,
    infinite: true,

    speed: 600,
    cssEase: "ease-in-out",
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings = {
    dots: true,
    infinite: true,

    speed: 600,
    cssEase: "ease-in-out",
    slidesToShow: 2.2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1145,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 868,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className=" relative py-24 p-0 sm:px-4 md:px-10"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#020108] z-0" />

      <div className="hidden max-[600px]:block">
        <div className="relative z-10 max-w-[600px] px-1 mx-auto">
          <Slider {...settingss}>
            <div className="ml-13">
              <div className="relative w-[274px] h-[350px] overflow-hidden rounded-xl">
                <img
                  src={smSliderBorder}
                  alt=""
                  className="w-full h-full object-cover"
                />

                <img
                  src={slider}
                  alt="Slide"
                  className="absolute top-20 left-5 w-[150px] h-[150px] object-cover"
                />

                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center">
                  <h2 className="font-SquadaOne text-[40px] text-white mr-8">
                    Experience matters
                  </h2>
                  <p className="font-Outfit mr-11 text-[15px] text-white max-w-44 justify-center">
                    An Academy Award winner and award-winning film professionals
                    who have worked on
                  </p>
                </div>
              </div>
            </div>
            <div className=" ml-13">
              <div className="relative w-[274px] h-[350px] overflow-hidden rounded-xl">
                <img
                  src={smSliderBorder}
                  alt=""
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 z-20 flex items-center justify-between px-12 ">
                  <img
                    src={slider2}
                    alt="Award Trophy"
                    className="w-[70px] h-[80px] object-contain"
                  />

                  <div className="text-center">
                    <h2 className="font-SquadaOnetext text-[20px] text-white leading-tight">
                      Award <br /> Winners
                    </h2>
                    <p className="font-Outfit text-sm md:text-[12px] text-gray-300 mt-3  px-2 py-1 inline-block rounded">
                      Award Winning <br /> Management Team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" ml-13">
              <div className="relative w-[274px] h-[350px] overflow-hidden rounded-xl">
                <img
                  src={smSliderBorder}
                  alt=""
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 z-20 flex items-center justify-between px-10 ">
                  <img
                    src={slider3}
                    alt="Award Trophy"
                    className="w-[70px] h-[80px] object-contain"
                  />

                  <div className="text-center">
                    <h2 className="font-SquadaOnetext text-[20px] text-white leading-tight">
                      Award <br /> Winners
                    </h2>
                    <p className="font-Outfit text-sm md:text-[12px] text-gray-300 mt-3  px-2 py-1 inline-block rounded">
                      Award Winning <br /> Management Team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      <div className=" block max-[600px]:hidden relative z-10 max-w-7xl px-3 mx-auto">
        <div className="mb-8 bg-gray-800 h-0.5 w-0 md:w-4/6 lg:w-5/6"></div>

        <div className="">
          <Slider {...settings}>
            <div className="">
              <div className="relative w-[650px] h-[521px] overflow-hidden rounded-xl">
                <img
                  src={sliderBorder}
                  alt=""
                  className="w-full h-full object-cover"
                />

                <img
                  src={slider}
                  alt="Slide"
                  className="absolute top-1/2 left-1/2 w-[280px] h-[300px] object-cover transform -translate-x-1/2 -translate-y-1/2 z-10"
                />

                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
                  <h2 className="font-SquadaOne text-3xl md:text-[72px] text-white mb-2 drop-shadow-md">
                    Experience <br /> matters
                  </h2>
                  <p className="font-Outfit text-sm md:text-base text-gray-300 max-w-xs">
                    An Academy Award winner and award-winning film professionals
                    who have worked on some of the highest grossing films of all
                    time
                  </p>
                </div>
              </div>
            </div>

            <div className="ms-19 mt-13">
              <div className="relative w-[502px] h-[421px] overflow-hidden rounded-xl">
                <img
                  src={sliderBorder2}
                  alt=""
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 z-20 flex items-center justify-between px-8 py-6">
                  <img
                    src={slider2}
                    alt="Award Trophy"
                    className="w-[134px] h-[298px] object-contain"
                  />

                  <div className="text-center px-20">
                    <h2 className="font-SquadaOne text-2xl md:text-[40px] text-white leading-tight">
                      Award <br /> Winners
                    </h2>
                    <p className="font-Outfit text-sm md:text-[17px] text-gray-300 mt-3 px-2 py-1 inline-block rounded">
                      Award Winning <br /> Management Team.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-13 ms-19">
              <div className="relative w-[502px] h-[421px] overflow-hidden rounded-xl">
                <img
                  src={sliderBorder2}
                  alt=""
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 z-20 flex items-center justify-between px-8 py-6">
                  <img
                    src={slider3}
                    alt="Award Trophy"
                    className="w-[134px] h-[298px] object-contain"
                  />

                  <div className="text-center px-20">
                    <h2 className="font-SquadaOne text-2xl md:text-[40px] text-white leading-tight">
                      Award <br /> Winners
                    </h2>
                    <p className="font-Outfit text-sm md:text-[17px] text-gray-300 mt-3  px-2 py-1 inline-block rounded">
                      Award Winning <br /> Management Team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Sliderss;
