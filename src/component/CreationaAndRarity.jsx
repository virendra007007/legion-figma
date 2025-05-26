import bgImage from "../assets/image/dashbordbgImage.jpg";
import { GiNinjaStar } from "react-icons/gi";
import creation1 from "../assets/image/creation1.png";
import creation from "../assets/image/creation.png";
import createAndRarity from "../assets/svg/createAndRarity.svg"

const CreationaAndRarity = () => {
  return (
    <>
      <div
        className="relative flex justify-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-gray-900 text-white opacity-45 h-full w-full absolute top-0 right-0" />

        <div className="  block sm:hidden">
          <div className=" space-y-7  text-white p-16 items-center z-50 ">
            <div className="font-SquadaOne text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white font-bold to-gray-900">
              CREATION AND RARITY
            </div>
            <p className="font-Outfit">
              Thousands of concept images of characters in the five initial film
              franchises were created by Artificial Intelligence and enhanced
              and touched up by our artists. The best were chosen to be part of
              the Legion Universe collection. Rarity is extremely important to
              us and we embedded rarity factors in many ways.
            </p>
          </div>

          <div className=" w-full p-2 rounded-md ">
            <div className="flex  space-x-4 z-50 p-3">
              <div className="bg-gray-900 h-10 w-10 text-black rounded-md p-2  text-2xl shadow-lg">
                <GiNinjaStar className="text-[#22F5C3] z-50" />
              </div>
              <div className="text-start space-y-6 font-Outfit">
                <h2 className="text-2xl text-white font-semibold">In Image</h2>
                <p className="text-white text-xl leading-9 flex justify-start">
                  There are seven colors for the frames of the NFTs and one
                  without color. The most rare colors are Gold and Silver.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end space-x-5 rounded-2xl">
            <div className="w-full h-full rounded-2xl p-5">
              <img
                src={creation1}
                alt=""
                className="object-cover rounded-3xl h-[450px] w-full p-4"
              />
            </div>
          </div>

          <div className=" w-full p-2 rounded-md ">
            <div className="flex  space-x-4 z-50 p-3">
              <div className="bg-gray-900 h-10 w-10 text-black rounded-md p-2  text-2xl shadow-lg">
                <GiNinjaStar className="text-[#22F5C3] z-50" />
              </div>
              <div className="text-start space-y-6">
                <h2 className=" font-Outfit text-2xl text-white font-semibold">
                  In colors
                </h2>
                <p className="font-Outfit text-white text-xl leading-9 flex justify-start">
                  There are seven colors for the frames of the NFTs and one
                  without color. The most rare colors are Gold and Silver.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end space-x-5 rounded-2xl">
            <div className="w-full h-full rounded-2xl p-5">
              <img
                src={creation1}
                alt=""
                className="object-cover rounded-3xl h-[450px] w-full p-4"
              />
            </div>
          </div>

          <div className=" w-full p-2 rounded-md ">
            <div className="flex  space-x-4 z-50 p-3">
              <div className="bg-gray-900 h-10 w-10 text-black rounded-md p-2  text-2xl shadow-lg">
                <GiNinjaStar className="text-[#22F5C3] z-50" />
              </div>
              <div className="text-start space-y-6">
                <h2 className="font-Outfit text-2xl text-white font-semibold">
                  In Symbols
                </h2>
                <p className="font-Outfit text-white text-xl leading-9 flex justify-start">
                  There are twelve symbols on the top left corner of each Legion
                  Universe NFT. These symbols are ranked according to rarity.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end space-x-5 rounded-2xl">
            <div className="w-full h-full p-5">
              <img
                src={creation1}
                alt=""
                className="object-cover rounded-3xl h-[450px] w-full p-4"
              />
            </div>
          </div>
          <div className=" w-full p-2 rounded-md ">
            <div className="flex  space-x-4 z-50 p-3">
              <div className="bg-gray-900 h-10 w-10 text-black rounded-md p-2  text-2xl shadow-lg">
                <GiNinjaStar className="text-[#22F5C3] z-50" />
              </div>
              <div className="text-start space-y-6">
                <h2 className="font-Outfit text-2xl text-white font-semibold">
                  In Symbols
                </h2>
                <p className="font-Outfit text-white text-xl leading-9 flex justify-start">
                  As a special bonus we created five ULTRA RARE Legion Universe
                  NFTs. These NFTs are GOLD editions of the main characters of
                  each franchise.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end space-x-5 rounded-2xl">
            <div className="w-full h-full p-5">
              <img
                src={creation1}
                alt=""
                className="object-cover rounded-3xl h-[450px] w-full p-4"
              />
            </div>
          </div>
        </div>

        <div className=" hidden sm:block">
          <div className="px-12 flex flex-col md:flex-row w-full gap-6 border-4 rounded-2xl">
            <div className="w-full md:w-1/2 space-y-7  text-white p-16 items-center z-50 ">
              <img src={createAndRarity} alt="" />
              <p className="font-Outfit text-[15px]">
                Thousands of concept images of characters in the five initial
                film franchises were created by Artificial Intelligence and
                enhanced and touched up by our artists. The best were chosen to
                be part of the Legion Universe collection. Rarity is extremely
                important to us and we embedded rarity factors in many ways.
              </p>
              <div className="w-full flex justify-end space-x-5 ">
                <div className="h-[280px] w-1/2">
                  <img
                    src={creation}
                    alt=""
                    className="object-cover rounded-2xl h-full w-full"
                  />
                </div>
                <div className="h-[400px] w-1/2">
                  <img
                    src={creation1}
                    alt=""
                    className="object-cover rounded-2xl h-full w-full"
                  />
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-8  text-white p-16 z-50 ">
              <button className=" w-full p-2 bg-black rounded-md hover:border-3 border-cyan-400">
                <div className="flex  space-x-4 z-50 p-3">
                  <div className="bg-gray-900 h-10 w-10 text-black rounded-md p-2 text-xl shadow-lg">
                    <GiNinjaStar className="text-[#22F5C3] z-50" />
                  </div>
                  <div className="text-start space-y-6">
                    <h2 className="font-Outfit text-xl ">
                      In images
                    </h2>
                    <p className="font-Outfit text-white text-[15px] leading-9 flex justify-start">
                      By purchasing a Legion Universe NFT you become a member of
                      the worldwide Legion Universe Community and get VIP
                      privileges.
                    </p>
                  </div>
                </div>
              </button>
              <div className="font-Outfit w-full p-2 rounded-md ">
                <div className="flex  space-x-4 z-50 p-3">
                  <div className="bg-gray-900 h-10 w-10 text-black rounded-md p-2  text-2xl shadow-lg">
                    <GiNinjaStar className="text-[#22F5C3] z-50" />
                  </div>
                  <div className="text-start space-y-6">
                    <h2 className=" text-xl font-semibold">In colors</h2>
                    <p className="font-Outfit text-white text-[15px] leading-9 flex justify-start">
                      There are seven colors for the frames of the NFTs and one
                      without color. The most rare colors are Gold and Silver.
                    </p>
                  </div>
                </div>
                <div className="flex  space-x-4 z-50 p-3">
                  <div className="bg-gray-900 h-10 w-10 text-black rounded-md p-2  text-2xl shadow-lg">
                    <GiNinjaStar className="text-[#22F5C3] z-50" />
                  </div>
                  <div className="text-start space-y-6">
                    <h2 className=" text-xl font-semibold font-Outfit">
                      {" "}
                      In symbol
                    </h2>
                    <p className="font-Outfit text-white text-[15px] leading-9 flex justify-start">
                      There are twelve symbols on the top left corner of each
                      Legion Universe NFT. These symbols are ranked according to
                      rarity.
                    </p>
                  </div>
                </div>
                <div className="flex  space-x-4 z-50 p-3">
                  <div className="bg-gray-900 h-10 w-10 text-black rounded-md p-2  text-2xl shadow-lg">
                    <GiNinjaStar className="text-[#22F5C3] z-50" />
                  </div>
                  <div className="text-start space-y-6">
                    <h2 className="font-Outfit text-xl font-semibold">
                      In symbols
                    </h2>
                    <p className="font-Outfit text-white text-[15px] leading-9 flex justify-start">
                      As a special bonus we created five ULTRA RARE Legion
                      Universe NFTs. These NFTs are GOLD editions of the main
                      characters of each franchise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreationaAndRarity;
