import filmProduction from "../assets/image/filmProduction.jpg";
import comicBook from "../assets/image/comicBook.jpg";
import game from "../assets/image/game.jpg";
import primier from "../assets/image/primier.jpg";
import legionBg from "../assets/image/ledionBg.png";
import imageBorder from "../assets/svg/imageBorder.svg";
import borderDesign1 from "../assets/svg/borderDesign1.svg";
import smallBorderDesign from "../assets/svg/smallBorderDesign.svg";
import smallBorderDesign1 from "../assets/svg/smallBorderDesign1.svg";

const FilmProductions = () => {
  return (
    <>
      <div
        className="relative flex min-h-screen justify-center"
        style={{ backgroundImage: `url(${legionBg})` }}
      >
        <div className="bg-gradient-to-tr from-[#02000c] to-[#120931] text-white opacity-75 h-full w-full absolute top-0 right-0" />
        <div className="bg-gradient-to-r from-[#111111]/80 to-[#0a0a17]/80 py-16 px-6 text-white">
          <div className=" mx-auto mt-12 h-auto space-y-7">
            <div className="relative max-w-6xl mx-auto border-2 border-white  rounded-3xl overflow-hidden px-4 py-8">
              <img
                src={smallBorderDesign1}
                alt=""
                className=" hidden sm:block absolute bottom-4 left-2"
              />

              <div className="absolute inset-0">
                <img
                  src={imageBorder}
                  alt="Border Design"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-8 text-white">
                <div className="md:w-1/2 space-y-4">
                  <h2 className="font-SquadaOne text-[42px] md:text-4xl font-bold">
                    Film Productions
                  </h2>
                  <p className="font-Outfit text-[15px] md:text-base text-gray-300 leading-relaxed">
                    You will have access to cast and crew interviews, be able to
                    see the day-to-day activities and even participate in the
                    creative aspects including outfit of characters, designs of
                    creatives and sets through your ability to vote.
                  </p>
                </div>

                <div className="md:w-1/2">
                  <img
                    src={filmProduction}
                    alt="Film Production"
                    className="rounded-lg w-full h-[312px] md:h-[409px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" mx-auto mt-12 h-auto space-y-7">
            <div className="relative max-w-6xl mx-auto border-2 border-white rounded-3xl overflow-hidden px-4 py-8">
              <img
                src={smallBorderDesign}
                alt=""
                className="hidden sm:block absolute top-4 right-2"
              />
              <div className="absolute inset-0">
                <img
                  src={borderDesign1}
                  alt="Border Design"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
                <div className="md:w-1/2">
                  <img
                    src={comicBook}
                    alt="Film Production"
                    className="rounded-lg w-full  h-[312px] md:h-[409px] object-cover"
                  />
                </div>
                <div className="md:w-1/2 space-y-4">
                  <h2 className="font-SquadaOne text-3xl md:text-4xl font-bold">
                    Comic Books
                  </h2>
                  <p className="font-Outfit text-sm md:text-base text-gray-300 leading-relaxed">
                    You will have access to early artwork and be able to see the
                    comic book production pipeline. You will also have the
                    opportunity to be among the first to purchase each of the
                    comic books.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative max-w-6xl mx-auto border-2 border-white  rounded-3xl overflow-hidden px-4 py-8">
              <img
                src={smallBorderDesign1}
                alt=""
                className="hidden sm:block absolute bottom-4 left-2"
              />

              <div className="absolute inset-0">
                <img
                  src={imageBorder}
                  alt="Border Design"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10 flex flex-col-reverse  md:flex-row items-center justify-between gap-8 text-white">
                <div className="md:w-1/2 space-y-4">
                  <h2 className="font-SquadaOne text-3xl md:text-4xl font-bold">
                    Video Games
                  </h2>
                  <p className="font-Outfit text-sm md:text-base text-gray-300 leading-relaxed">
                    Get ready for battle! You will be part of the creation and
                    get VIP privileges inside the games.
                  </p>
                </div>

                <div className="md:w-1/2">
                  <img
                    src={game}
                    alt="Film Production"
                    className="rounded-lg w-full  h-[312px] md:h-[409px] object-cover"
                  />
                </div>
              </div>
            </div>
            <div className=" mx-auto mt-12 h-auto space-y-7">
              <div className="relative max-w-6xl mx-auto border-2 border-white rounded-3xl overflow-hidden px-4 py-8">
                <img
                  src={smallBorderDesign}
                  alt=""
                  className="hidden sm:block absolute top-4 right-2"
                />

                <div className="absolute inset-0">
                  <img
                    src={borderDesign1}
                    alt="Border Design"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
                  <div className="md:w-1/2">
                    <img
                      src={primier}
                      alt="Film Production"
                      className="rounded-lg w-full  h-[312px] md:h-[409px] object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 space-y-4">
                    <h2 className="font-SquadaOne text-3xl md:text-4xl font-bold">
                      Events & Promotions
                    </h2>
                    <p className="font-Outfit text-sm md:text-base text-gray-300 leading-relaxed">
                      You will have the opportunity to be involved in events and
                      promotions as well as early access to merchandise.
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

export default FilmProductions;
