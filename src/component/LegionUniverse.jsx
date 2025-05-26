import legionBg from "../assets/image/ledionBg.png";
import { FaFilm, FaUserAlt, FaCube, FaStar, FaUsers } from "react-icons/fa";

const LegionUniverse = () => {
  const universeData = [
    {
      icon: <FaFilm />,
      text: (
        <>
          VIP access to the <br />
          film productions
        </>
      ),
    },
    {
      icon: <FaUserAlt />,
      text: (
        <>
          Opportunity to be first <br />
          to own comic books
        </>
      ),
    },
    {
      icon: <FaCube />,
      text: (
        <>
          VIP access to apps <br />
          and video games
        </>
      ),
    },
    {
      icon: <FaStar />,
      text: (
        <>
          Participation in events <br />
          and promotions
        </>
      ),
    },
    {
      icon: <FaUsers />,
      text: (
        <>
          Participation in the Legion <br />
          community and opportunity to vote
        </>
      ),
    },
  ];
  return (
    <div
      className="relative flex justify-center"
      style={{ backgroundImage: `url(${legionBg})` }}
    >
      <div className=" text-white opacity-45 h-full w-full absolute top-0 right-0" />
      <div className="mt-10 px-4 md:px-8">
        <div className="flex  md:flex-row justify-between items-center max-w-7xl mx-auto h-auto md:h-[166px]  space-y-0 ">
          <div className="font-SquadaOne text-[39px] md:text-7xl lg:text-[161px] text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-800 opacity-80 text-start md:text-right  md:w-auto ">
            LEGION UNIVERSE
          </div>
          <div className="border-2 border-amber-100 border-r-0 rounded w-[40px] h-[36px]  md:w-[300px]  md:h-[100px] ms-4"></div>
        </div>

       <div className="flex items-center max-w-7xl mx-auto h-auto md:h-[166px]  space-y-0 ">
          <div className="border-2 border-amber-100 border-l-0 rounded w-[80px]  md:w-[300px] h-[36px] md:h-[100px] ms-4"></div>
          <div className="font-SquadaOne text-[40px] md:text-7xl lg:text-[161px] text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-800 opacity-80 md:w-auto ml-1">
            DTC BENEFITS
          </div>
        </div>

        <div className=" py-16 px-4 md:px-6 text-white mt-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
            {universeData.map((item, i) => (
              <div key={i} className="flex items-start space-x-4 z-50">
                <div className="relative w-14 h-14">
                  <div className="absolute inset-1 rounded-md  bg-[#00F5C6] clip-polygon z-10 flex items-center text-2xl text-black justify-center">
                    {item.icon}
                  </div>
                </div>
                <p className=" mt-0.5 leading-[25px] font-Outfit text-white text-[17px] ">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegionUniverse;
