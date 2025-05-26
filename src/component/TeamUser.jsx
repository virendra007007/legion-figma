import legionBg from "../assets/image/backgrounImage.png";
import profileBorder from "../assets/image/profileBorder.png";
import userProfile1 from "../assets/image/userProfile1.png";
import userProfile2 from "../assets/image/userProfile2.png";
import userProfile3 from "../assets/image/userProfile3.png";
import userProfile4 from "../assets/image/userProfile4.png";
import userProfile5 from "../assets/image/userProfile5.png";
import smProfile1 from "../assets/image/smProfile1.png";
import smProfile2 from "../assets/image/smProfile2.png";
import smProfile3 from "../assets/image/smProfile3.png";
import smProfile4 from "../assets/image/smProfile4.png";
import smProfile5 from "../assets/image/smProfile5.png";

import Twitter from "../assets/svg/Twitter.svg";

import profileBorders from "../assets/svg/profileBorder.svg";
import profilePataborder from "../assets/svg/profilePataborder.svg";

import star from "../assets/svg/star.svg";

const TeamUser = () => {
  return (
    <>
      <div
        className="relative flex justify-center items-center"
        style={{ backgroundImage: `url(${legionBg})`, backgroundSize: "cover" }}
      >
        <div className="absolute inset-0 bg-[#0b0d1d]" />
        <div className=" max-w-7xl px-3 mx-auto relative z-10  py-12 ">
          <div className=" hidden max-[400px]:block space-y-3.5">
            <img src={profileBorder} alt="Green Background" className="" />
            <img src={smProfile1} alt="" />
            <img src={smProfile2} alt="" />
            <img src={smProfile3} alt="" />
            <img src={smProfile4} alt="" />
            <img src={smProfile5} alt="" />
          </div>
          <div className=" max-[400px]:hidden max-w-7xl px-3 grid gap-y-13 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative col-span-1 w-full rounded-2xl overflow-hidden  min-h-[500px]">
              <img
                src={profileBorder}
                alt="Green Background"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <h2 className=" font-SquadaOne text-5xl font-bold text-white tracking-widest">
                  TEAM
                </h2>
              </div>
            </div>

            <div className="relative flex justify-center items-center py-10 px-4">
              <img
                src={profileBorders}
                alt=""
                className="absolute top-0 w-full max-w-[360px] z-10"
              />

              <div className="relative z-20 bg-[#0b0d1d] text-white top-0 md:-top-5 max-w-[345px] w-full rounded-xl shadow-lg  ">
                <div className="flex items-center space-x-4">
                  <div className="w-[119px] ml-3.5 h-[119px] rounded-2xl overflow-hidden">
                    <img
                      src={userProfile1}
                      alt="Lee Baker"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex space-x-2">
                      <img
                        src={Twitter}
                        alt="Twitter"
                        className="w-[82px] h-[33px]"
                      />
                    </div>
                    <h3 className="font-Outfit text-lg font-semibold my-4">
                      Lee Baker
                    </h3>
                    <p className="font-Outfit text-sm text-gray-400">
                      President/CEO
                    </p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 md:space-y-6">
                  {[
                    "Former owner/president of Sandman Studios.",
                    "Film & TV Credits include Race to Witch Mountain, Pushing Daisies, Grimm, Trauma, The Aquabats, Raising Hope, A Gifted Man, The Closer, iZombie.",
                    "Video game credits: Advent Rising, G.I. Joe, Monopoly, Stuart Little, & Pirates of the Caribbean.",
                    "Team recipient of 10 Telly Awards.",
                  ].map((point, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <img src={star} alt="bullet" className="w-10 h-10 " />
                      <span className="font-Outfit text-[13px] mt-2.5">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <img
                src={profilePataborder}
                alt=""
                className="absolute hidden lg:block md:bottom-0 left-3"
              />
            </div>
            <div className="relative flex justify-center items-center py-10 px-4">
              <img
                src={profileBorders}
                alt=""
                className="absolute top-0 w-full max-w-[360px] z-10"
              />

              <div className="relative z-20 bg-[#0b0d1d] space-x-3 text-white top-0 md:-top-6 max-w-[345px] w-full rounded-xl shadow-lg  ">
                <div className="flex items-center space-x-4">
                  <div className="w-[119px] h-[119px] ml-3.5 rounded-2xl overflow-hidden">
                    <img
                      src={userProfile2}
                      alt="Lee Baker"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex space-x-2">
                      <img
                        src={Twitter}
                        alt="Twitter"
                        className="w-[82px] h-[33px]"
                      />
                    </div>
                    <h3 className="font-Outfit text-lg font-semibold my-4">
                      Jarom Sidwell
                    </h3>
                    <p className="font-Outfit text-sm text-gray-400">
                      Head of Production
                    </p>
                  </div>
                </div>

                <ul className="mt-6  space-y-3 md:space-y-6">
                  {[
                    "Career credits include work on Avatar, Man of Steel, Avengers, The Adventures of TinTin, X-Men: First Class, A-Team, Gulliver’s Travels, Transformers, We Own the Night, The Hitcher, Texas Chainsaw Massacre—The Beginning and Zoom.",
                    " Produced VFX commercials at Radium/Reel FX.",
                    "Currently leading Advent FX teams and perfecting use of Virtual and Augmented Reality.",
                  ].map((point, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <img src={star} alt="bullet" className="w-10 h-10 mt-1" />
                      <span className="font-Outfit text-[13px] mt-2.5">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <img
                src={profilePataborder}
                alt=""
                className="absolute  hidden lg:block md:bottom-0 left-3"
              />
            </div>
            <div className="relative flex justify-center items-center py-10 px-4">
              <img
                src={profileBorders}
                alt=""
                className="absolute top-0 w-full max-w-[360px] z-10"
              />

              <div className="relative z-20 bg-[#0b0d1d] text-white top-0 md:-top-6 max-w-[345px] w-full rounded-xl shadow-lg  ">
                <div className="flex items-center space-x-4">
                  <div className="w-[119px] h-[119px] ml-3.5 rounded-2xl overflow-hidden">
                    <img
                      src={userProfile3}
                      alt="Lee Baker"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex space-x-2">
                      <img
                        src={Twitter}
                        alt="Twitter"
                        className="w-[82px] h-[33px]"
                      />
                    </div>
                    <h3 className="font-Outfit text-lg font-semibold my-4">
                      Jarom Sidwell
                    </h3>
                    <p className="font-Outfit text-sm text-gray-400">
                      Head of Production
                    </p>
                  </div>
                </div>

                <ul className="mt-6  space-y-3 md:space-y-6">
                  {[
                    "In 2020, Cameron was nominated for the Top 100 people in Finance and in 2021 he was listed as the top 40 under 40 professionals in the US.",
                    "He built a real estate company from scratch to multimillion dollar valuation in 18 months.",
                    "Actively involved in over $6.5 Billion in transactions.",
                    "Founded and exited 3 companies and also has invested in and has sat on the advisory boards for multiple startup companies in the tech, ",
                  ].map((point, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <img src={star} alt="bullet" className="w-10 h-10 mt-1" />
                      <span className="font-Outfit text-[13px]">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <img
                src={profilePataborder}
                alt=""
                className="absolute  hidden lg:block md:bottom-0 left-2"
              />
            </div>
            <div className="relative flex justify-center items-center py-10 px-4">
              <img
                src={profileBorders}
                alt=""
                className="absolute top-0 w-full max-w-[360px] z-10"
              />

              <div className="relative z-20 bg-[#0b0d1d] text-white top-0 md:-top-6 max-w-[345px] w-full rounded-xl shadow-lg  ">
                <div className="flex items-center space-x-4">
                  <div className="w-[119px] h-[119px] ml-3.5 rounded-2xl overflow-hidden">
                    <img
                      src={userProfile4}
                      alt="Lee Baker"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex space-x-2">
                      <img
                        src={Twitter}
                        alt="Twitter"
                        className="w-[82px] h-[33px]"
                      />
                    </div>
                    <h3 className="font-Outfit text-lg font-semibold my-4">
                      Jarom Sidwell
                    </h3>
                    <p className="font-Outfit text-sm text-gray-400">
                      Head of Production
                    </p>
                  </div>
                </div>

                <ul className="mt-6  space-y-3 md:space-y-6">
                  {[
                    "In 2020, Cameron was nominated for the Top 100 people in Finance and in 2021 he was listed as the top 40 under 40 professionals in the US.",
                    "He built a real estate company from scratch to multimillion dollar valuation in 18 months.",
                    "Actively involved in over $6.5 Billion in transactions.",
                    "Founded and exited 3 companies and also has invested in and has sat on the advisory boards for multiple startup companies in the tech, ",
                  ].map((point, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <img src={star} alt="bullet" className="w-10 h-10 mt-1" />
                      <span className="font-Outfit text-[13px]">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <img
                src={profilePataborder}
                alt=""
                className="absolute  hidden lg:block md:bottom-0 left-2"
              />
            </div>
            <div className="relative flex justify-center items-center py-10 px-4">
              <img
                src={profileBorders}
                alt=""
                className="absolute top-0 w-full max-w-[360px] z-10"
              />

              <div className="relative z-20 bg-[#0b0d1d] text-white top-0 md:-top-6 max-w-[345px] w-full rounded-xl shadow-lg  ">
                <div className="flex items-center space-x-4">
                  <div className="w-[119px] h-[119px] ml-3.5 rounded-2xl overflow-hidden">
                    <img
                      src={userProfile5}
                      alt="Lee Baker"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex space-x-2">
                      <img
                        src={Twitter}
                        alt="Twitter"
                        className="w-[82px] h-[33px]"
                      />
                    </div>
                    <h3 className="font-Outfit text-lg font-semibold my-4">
                      Jarom Sidwell
                    </h3>
                    <p className="font-Outfit text-sm text-gray-400">
                      Head of Production
                    </p>
                  </div>
                </div>

                <ul className="mt-6  space-y-3 md:space-y-6">
                  {[
                    "In 2020, Cameron was nominated for the Top 100 people in Finance and in 2021 he was listed as the top 40 under 40 professionals in the US.",
                    "He built a real estate company from scratch to multimillion dollar valuation in 18 months.",
                    "Actively involved in over $6.5 Billion in transactions.",
                    "Founded and exited 3 companies and also has invested in and has sat on the advisory boards for multiple startup companies in the tech, ",
                  ].map((point, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <img src={star} alt="bullet" className="w-10 h-10 mt-1" />
                      <span className="font-Outfit text-[13px]">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <img
                src={profilePataborder}
                alt=""
                className="absolute  hidden lg:block md:bottom-0 left-2"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamUser;
