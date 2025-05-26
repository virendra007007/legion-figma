import Logo from "../assets/svg/logo.svg";
import faq from "../assets/image/faq.png";

const Footer = () => {
  return (
    <>
      <div
        className="relative flex justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${faq})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-[#0b071f] opacity-80 "></div>
        <div className="relative z-10 max-w-7xl px-5 mx-auto w-full text-white mb-9">
             <div className="max-w-7xl px-3 mx-auto bg-opacity-80 p-6 rounded-xl space-y-4 font-Outfit">
          <header className="z-50">
            <nav className="px-4 py-3 ">
              <div className=" space-y-6 md:space-y-0.5 flex flex-col md:flex-row justify-between items-center max-w-screen-xl mx-auto">
                <div className="w-36">
                  <img src={Logo} alt="logo" />
                </div>
                <div className=" text-[12px] font-Outfit flex space-x-8 items-center">
                  <span>Terms & Conditions</span>
                  <span>Privacy Policy</span>
                  <span>Legal</span>
                </div>
              </div>
            </nav>
          </header>
        </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
