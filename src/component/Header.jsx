import Logo from "../assets/svg/logo.svg";
import countryLogo from "../assets/svg/countryLogo.svg";
import countryLogo2 from "../assets/image/countryLogo2.png";
import countryLogo3 from "../assets/image/countryLogo3.png";
import countryLogo4 from "../assets/image/countryLogo4.png";
import countryLogo5 from "../assets/image/countryLogo5.png";
import homePageImage from "../assets/image/image.png";
import bgImage from "../assets/image/dashbordbgImage.jpg";
import { FaAngleDown } from "react-icons/fa6";
import menu from "../assets/svg/menu.svg";
import { useState } from "react";
import clouseMenu from "../assets/svg/clouseMenu.svg";
import mint from "../assets/svg/mint.svg";
import wallate from "../assets/svg/wallate.svg";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white border-t-2"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <header className="z-50">
        <nav className="px-4 lg:px-6 py-4">
          <div className="max-w-7xl relative px-3 mx-auto flex flex-wrap justify-between items-center">
            <div className="w-36">
              <img src={Logo} alt="logo" />
            </div>

            <div className="hidden md:flex space-x-8 items-center font-Outfit mr-52">
              <span className=" cursor-pointer">Roadmap</span>
              <span className="cursor-pointer">About</span>
              <div className="flex items-center border-4 border-[#22F5C3] rounded-full p-2">
                <img src={countryLogo} alt="country" className="h-8 w-8" />
                <FaAngleDown className="ml-2" />
              </div>
            </div>

            <div className=" hidden md:block absolute -right-8 -top-2.5 ">
              <img src={wallate} alt="" />
            </div>

            <div className="relative block md:hidden">
              <img
                src={menu}
                alt="Menu"
                onMouseEnter={() => setShowMenu(true)}
                onMouseLeave={() => setShowMenu(false)}
                className="cursor-pointer"
              />
              {showMenu && (
                <div
                  className="absolute top-full right-0 w-72 bg-black text-white p-4 rounded-lg shadow-lg z-50 border border-cyan-400"
                  onMouseEnter={() => setShowMenu(true)}
                  onMouseLeave={() => setShowMenu(false)}
                >
                  <div className="flex justify-between">
                    <img src={clouseMenu} alt="Close" />
                  </div>
                  <h2 className="text-2xl font-bold text-center">Menu</h2>

                  <div className="text-center mt-4">
                    <button className="bg-black border-2 border-cyan-400 px-4 py-2 rounded-lg w-full shadow-[0_0_10px_#00fff7] font-bold">
                      Connect Wallet
                    </button>
                  </div>
                  <div className="text-center font-semibold mt-3">
                    Choose a language
                  </div>

                  <div className="flex justify-center gap-2 my-3">
                    <img src={countryLogo} className="w-6 h-6 rounded-full" />
                    <img src={countryLogo2} className="w-6 h-6 rounded-full" />
                    <img src={countryLogo3} className="w-6 h-6 rounded-full" />
                    <img src={countryLogo4} className="w-6 h-6 rounded-full" />
                    <img src={countryLogo5} className="w-6 h-6 rounded-full" />
                  </div>

                  <hr className="my-2 border-gray-700" />

                  <div className="text-center space-y-2">
                    <div className="cursor-pointer hover:text-cyan-400">
                      Roadmap
                    </div>
                    <div className="cursor-pointer hover:text-cyan-400">
                      About
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
      <div className="max-w-7xl mx-auto sm:px-3 flex flex-col-reverse lg:flex-row items-center justify-between py-12 space-y-8 lg:space-y-0">
        <div className="text-center lg:text-left">
          <h1 className="text-[48px] sm:text-5xl leading-[50px] lg:text-[114px] md:leading-[110px] font-SquadaOne ">
            <span className="text-[#22F5C3]">Next-</span>
            <span className="text-white">Generation Superheroes</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-[19px] font-Outfit leading-relaxed max-w-xl mx-auto lg:mx-0">
            Five super-powered film franchises, one universe, from a team that
            has worked on Avatar, Avengers, and with Stan Lee. Get VIP
            privileges in films, video games, and comic books with your Polygon
            Legion NFT.
          </p>
          <div className=" absolute -bottom-58 md:-bottom-31 left- md:left-15 mt-6 flex justify-center lg:justify-start">
            <img src={mint} alt="Mint Now" />
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={homePageImage}
            alt="Home Page"
            className="w-[220px] sm:w-[280px] md:w-[368px] lg:w-[552px] h-auto rounded-[10px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
