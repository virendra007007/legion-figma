import faq from "../assets/image/faq.png";
import plus from "../assets/svg/plus.svg";
import { faqList } from "../helper/constant.js";

const Faq = () => {
  return (
    <div
      className="relative flex justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${faq})`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-[#02000c] opacity-75 "></div>

      <div className="relative  z-10 max-w-7xl px-5 mx-auto w-full text-white mb-9">
        <h2 className="ms-23 md:ms-1 font-SquadaOne text-[97px] leading-[158p] text-transparent bg-clip-text  bg-gradient-to-r from-white to-gray-500 my-10">
          FAQ
        </h2>
        <div className="max-w-7xl px-3 mx-auto bg-opacity-80 p-6 rounded-xl space-y-4 font-Outfit">
          {faqList.map((faq, index) => (
            <div key={index} className="border-b border-gray-600 pb-4 ">
              <div className="flex justify-between items-center">
                <p className="text-sm md:text-lg font-medium">{faq.question}</p>
                <img src={plus} alt="" className="w-5 h-5" />
              </div>
            </div>
          ))}
         
        </div>
      </div>
    </div>
  );
};

export default Faq;
