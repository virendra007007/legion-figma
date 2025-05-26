import bgImage from "../assets/image/backgrounImage.png";
import cardImage from "../assets/image/cardImage.png";
import climBox1 from "../assets/image/climBox1.png";

const TradingCard = () => {
  return (
    <>
      <div
        className="relative flex justify-center items-center w-full min-h-[600px] px-4"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-gradient-to-tr from-[#02000c] to-[#110c1f]  h-full w-full absolute top-0 left-0" />

        <div className="relative mx-auto ">
          <div className="block md:hidden justify-center">
            <img src={climBox1} alt="" className="w-auto h-auto" />
          </div>

          <div className="max-w-7xl h-full hidden md:block">
            <img src={cardImage} alt="" className="w-[1260px] h-full" />

            <div className=" text-white absolute top-32 lg:top-60 flex left-11 lg:left-50 flex-col justify-center items-center text-center px-4 py-8 space-y-4 ">
              <h2 className="text-3xl md:text-[75px] leading-[81px] font-SquadaOne">
                Buy 50 Digital Trading Cards
              </h2>
              <p className="text-sm md:text-[22px]  leading-[44px] max-w-3xl font-Outfit">
                You are guaranteed to receive an opportunity for a
                <span className="font-bold border-b-3 border-b-[#22F5C3]">
                  {" "}
                  CAMEO ROLE{" "}
                </span>
                in one of the films as well as an invitation to one of the
                <span className=" font-bold border-b-3 border-b-[#22F5C3]">
                  RED CARPET SCREENINGS!
                </span>
              </p>
              <p className=" md:hidden lg:block text-sm md:text-[22px] leading-[44px] max-w-3xl font-Outfit">
                <span className=" font-bold border-b-3 border-b-[#22F5C3]">
                  PLUS
                </span>{" "}
                an in-person dinner with producers, directors, writers and VFX.
                <span className=" font-bold border-b-3 border-b-[#22F5C3]">
                  PLUS
                </span>{" "}
                with the investment club, access to information, investments and
                funds not available to the general public.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TradingCard;
