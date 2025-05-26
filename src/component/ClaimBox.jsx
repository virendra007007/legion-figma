import bgImage from "../assets/image/backgrounImage.png";
import climBox from "../assets/image/climBox.png";
import borderDesign from "../assets/svg/borderDesign.svg";
import mint from "../assets/svg/mint.svg";
import mintBorder from "../assets/svg/mintBorder.svg";
const ClaimBox = () => {
  return (
    <>
      <div
        className="relative flex justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="bg-gradient-to-tr from-[#02000c] to-[#060216] text-white opacity-75 h-full w-full  absolute top-0 right-0" />
        <div className="block md:hidden">
          <img src={climBox} alt="" />
        </div>
        <div className="hidden md:block px-3">
          <div className=" w-[1420px] relative mx-auto block z-50 ">
            <img
              src={borderDesign}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className=" md:mt-0 absolute left-45 md:top-36 flex flex-col md:items-start  z-10 text-white">
            <h2 className="font-SquadaOne md:text-3xl lg:text-[49px]  leading-[74px]  md:max-w-3xl">
              Seize this unparalleled opportunity to claim your very own,
              exceptionally rare, limited-edition treasure for
              <span className="text-cyan-400 mx-2">80 MATIC</span>
              <span className="text-gray-400 text-lg">[$86 USD]</span>
            </h2>

            <div className="justify-start flex flex-row items-center">
              <img src={mint} alt="Mint now" className="" />

              <div className="">
                <img src={mintBorder} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClaimBox;
