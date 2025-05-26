import { Data } from "../helper/constant.js";
import bgImage from "../assets/image/backgrounImage.png";

const BonusPacks = () => {
  return (
    <>
      <div
        className="relative  flex justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="bg-gradient-to-tr from-[#02000c]  to-[#140740] text-white opacity-75 h-full w-full absolute top-0 right-0" />

        <div className=" relative z-20 text-white w-full max-w-7xl px-3 mx-auto py-16">
          <div className="flex flex-col lg:flex-row md:gap-8 mb-12">
            <h2 className="font-SquadaOne text-4xl md:text-5xl lg:text-[95px] leading-[58px] md:leading-[158px] space-x-2">
              BONUS <span className="text-gray-600">PACKS</span>
            </h2>
            <p className="font-Outfit flex-1 md:mt-11 text-sm md:text-[15px] leading-[28px] text-gray-300">
              Qualify for the following Bonus Packs by purchasing the Bonus Pack
              number of Legion Universe Digital Trading Cards. A Bonus Pack
              gives you additional physical bonuses (items mailed to you) as
              well as potential opportunities to join with us in the physical
              production and premiers of the films.
            </p>
          </div>

          <div className="max-w-7xl mx-auto  md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
            {Data.map((pack, index) => (
              <div key={index} className="shadow-lg  ">
                <div className="flex flex-col mt-5 md:mt-0">
                  <img
                    src={pack.iconbg}
                    alt="icon"
                    className="w-[64px] h-[65px] mb-2 relative"
                  />
                  <img
                    src={pack.icon}
                    alt="icon"
                    className="w-[50px] h-[38px] absolute mt-3 ms-1.5"
                  />
                  <h3 className="text-white text-xl my-3 leading-[31px]  font-Outfit ">
                    {pack.title}
                  </h3>
                </div>
                <ul className=" space-y-7 space-x-1">
                  {pack.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex gap-2 items-start text-[15px] leading-[26px]"
                    >
                      <span className="text-cyan-400 ">
                        {i + 1 < 10 ? `0${i + 1}` : i + 1}
                      </span>
                      <span className="text-gray-200 font-Outfit">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BonusPacks;
