import legionBg from "../assets/image/ledionBg.png";
// import { netData } from "../helper/constant.js";
import { FaFilm } from "react-icons/fa";
import detailBorder from "../assets/svg/detailBorder.svg";

const NetCollection = () => {
  return (
    <>
      <div
        className="relative flex justify-center"
        style={{ backgroundImage: `url(${legionBg})` }}
      >
        <div className="bg-gradient-to-tr from-[#0d0148] to-[#221f30] text-white opacity-75 h-full w-full absolute top-0 right-0" />

        <div className="my-24 flex justify-end max-w-7xl px-3 mx-auto flex-col md:flex-row w-full ">
          <div className="w-full md:w-4/9 space-y-7 text-white  items-center z-50 ">
            <div className=" font-SquadaOne text-[72px] text-transparent bg-clip-text bg-gradient-to-r from-white font-bold to-gray-900 ">
              NFT COLLECTION
            </div>
            <p className="font-Outfit">
              We created this collection to reward our community and welcome the
              world to the Legion Universe.
            </p>
            <button className=" bg-black rounded-md hover:border-3 duration-150 border-cyan-400">
              <div className="flex items-start space-x-4 z-50 p-3">
                <div className="bg-[#00F5C6] text-black rounded-xl p-3 text-2xl shadow-lg">
                  <FaFilm />
                </div>
                <p className="font-Outfit text-white text-[15px] leading-snug ">
                  By purchasing a Legion Universe NFT you become a member of the
                  worldwide Legion Universe Community and get VIP privileges.
                </p>
              </div>
            </button>
          </div>
          <div className="w-full md:w-2/3 ms-0 mt-5  md:ms-10 z-50 ">
            <img src={detailBorder} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NetCollection;
