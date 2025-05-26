import roadmapbg from "../assets/image/roadmapbg.png";
import smroadmap from "../assets/image/smroadmap.png";
import star from "../assets/svg/star.svg";
import Roadmaps from "../assets/svg/Roadmap.svg";

import roadmapSmall from "../assets/svg/roadmapSmall.svg";

const Roadmap = () => {
  return (
    <>
      <div
        className="relative flex justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${roadmapbg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="bg-gradient-to-tr from-[#02000c] to-[#050212] text-white opacity-75 h-full w-full absolute top-0 right-0" />

        <div className="text-white space-y-3 hidden max-[1024px]:block ml-9 my-10 z-50">
          <div className="">
            <img src={smroadmap} alt="" />
          </div>
        </div>

        <div className="block max-[1024px]:hidden md:flex justify-evenly md:flex-row w-full my-16  rounded-2xl">
          <div className="z-50">
            <img src={Roadmaps} alt="" />
          </div>

          <ul className="space-y-4 z-10 text-white">
            <li className="flex ">
              <p className="mt-3 me-3 text-[15px]">2015-2025</p>

              <img src={star} alt="" />

              <p className="font-Outfit mt-3 text-[15px]">
                Launch NFT project to build Worldwide Legion Community ld
              </p>
            </li>
            <li className="flex justify-between text-[15px]">
              <p className="mt-3">2023</p>

              <img src={star} alt="" />

              <p className="font-Outfit mt-3 text-[15px]">
                Development of feature films and screenplays for LEGION UNIVERSE
              </p>
            </li>
            <li className="font-Outfit flex justify-end-safe">
              <img src={roadmapSmall} alt="" className="mr-5" />
              <p className="text-[15px] font-Outfit">
                Development of feature films and screenplays for LEGION UNIVERSE
              </p>
            </li>
            <li className="flex justify-end-safe">
              <img src={roadmapSmall} alt="" className="mr-5" />
              <p className="font-Outfit text-[15px]">
                Development of feature films and screenplays for LEGION UNIVERSE
              </p>
            </li>
            <li className="flex justify-end-safe">
              <img src={roadmapSmall} alt="" className="mr-5" />
              <p className="font-Outfit text-[15px]">
                Development of feature films and screenplays for LEGION UNIVERSE
              </p>
            </li>
            <li className="flex justify-end-safe">
              <img src={roadmapSmall} alt="" className="mr-5" />
              <p className="font-Outfit text-[15px]">
                Development of feature films and screenplays for LEGION UNIVERSE
              </p>
            </li>
            <li className="flex justify-between">
              <p className="mt-3">2024</p>

              <img src={star} alt="" />

              <p className="mt-3 font-Outfit text-[15px]">
                Development of feature films and screenplays for LEGION UNIVERSE
              </p>
            </li>
            <li className="flex justify-end-safe">
              <img src={roadmapSmall} alt="" className="mr-5" />
              <p className="font-Outfit text-[15px]">
                Development of feature films and screenplays for LEGION UNIVERSE
              </p>
            </li>
            <li className="flex justify-end-safe">
              <img src={roadmapSmall} alt="" className="mr-5" />
              <p className="font-Outfit text-[15px]">
                Development of feature films and screenplays for LEGION UNIVERSE
              </p>
            </li>
            <li className="flex justify-between">
              <p className="mt-3">2024</p>

              <img src={star} alt="" />

              <p className="mt-3 font-Outfit text-[15px]">
                Development of feature films and screenplays for LEGION UNIVERSE
              </p>
            </li>
            <li className="flex justify-end-safe">
              <img src={roadmapSmall} alt="" className="mr-5" />
              <p className="font-Outfit text-[15px]">
                Development of feature films and screenplays for LEGION UNIVERSE
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
