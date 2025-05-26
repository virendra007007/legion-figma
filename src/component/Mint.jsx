// import mint from "../assets/image/mint.png";
import faq from "../assets/image/faq.png";
import mintss from "../assets/svg/mints.svg"

import star from "../assets/svg/mintIcon.svg";
import mints from "../assets/svg/mint.svg";

const Mint = () => {
  return (
    <>
      <div
        className="relative flex justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${faq})`,
          backgroundSize: "cover",
        }}
      >
        <div className="bg-gradient-to-tr from-[#02000c] to-[#050212] text-white opacity-75 h-full w-full absolute top-0 right-0" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 my-16 rounded-2xl">
          <div className="text-center md:text-left ">
            <img src={mintss} alt="" className="my-11"/>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between gap-10 text-white">
            <div className="space-y-4 z-40 flex-1">
              <p className="text-[39px] leading-[30px] text-[#22F5C3]">01</p>
              <p className="font-Outfit text-sm sm:text-[17px] leading-[30px]">
                We have made this part very easy whether you have a crypto
                wallet or not. If you are new to this space, simply click "Mint"
                and use a credit card.
              </p>
              <img
                src={mints}
                alt="Mint Step 1"
                className="w-full max-w-xs sm:max-w-sm md:max-w-full"
              />
            </div>

            <div className="space-y-4 z-40 flex-1 font-Outfit">
              <p className="text-[39px] leading-[30px] text-[#22F5C3]">02</p>
              <p className="text-sm sm:text-[17px] leading-[30px]">
                If you are familiar with crypto wallets and have Polygon (MATIC)
                in your wallet, simply click “Mint” to go to our minting page:
              </p>
              <ul className="space-y-2 text-sm sm:text-base">
                <li className="flex gap-2 items-start">
                  <img src={star} alt="" className="w-8 h-8" />
                  <p className="text-[15px] leading-[28px]">
                    Press “Connect” to connect your wallet (MetaMask or Wallet
                    Connect)
                  </p>
                </li>
                <li className="flex gap-2 items-start">
                  <img src={star} alt="" className="w-8 h-8" />
                  <p className="text-[15px] leading-[28px]">Choose the number of NFTs you would like to purchase</p>
                </li>
                <li className="flex gap-2 items-start">
                  <img src={star} alt="" className="w-8 h-8 " />
                  <p className="text-[15px] leading-[28px]">
                    Click <span className="text-[#22F5C3]">“Mint”</span>
                  </p>
                </li>
                <li className="flex gap-2 items-start">
                  <img src={star} alt="" className="w-8 h-8 " />
                  <p className="text-[15px] leading-[28px]">Confirm in your Wallet</p>
                </li>
              </ul>
            </div>

            <div className="space-y-4 z-40 flex-1 font-Outfit">
              <p className="text-2xl font-semibold text-[#22F5C3] text-[39px] leading-[30px]">03</p>
              <p className=" text-[17px] leading-[30px] text-sm sm:text-base">
                If you want to purchase with a credit card, click “Mint” to go
                to our minting page:
              </p>
              <ul className="space-y-2 text-sm sm:text-base">
                <li className="flex gap-2 items-start">
                  <img src={star} alt="" className="w-8 h-8" />
                  <p className="text-[15px] leading-[28px]">Press “Connect” to connect your wallet</p>
                </li>
                <li className="flex gap-2 items-start">
                  <img src={star} alt="" className="w-8 h-8" />
                  <p className="text-[15px] leading-[28px]">
                   Click 
                    <span className="text-[#22F5C3] text-[15px] leading-[28px]">
                       “Buy with credit card”
                    </span>
                  </p>
                </li>
                <li className="flex gap-2 items-start">
                  <img src={star} alt="" className="w-8 h-8 " />
                  <p className="text-[15px] leading-[28px]">Connect with Crossmint and follow the instructions</p>
                </li>
                <li className="flex gap-2 items-start">
                  <img src={star} alt="" className="w-8 h-8 " />
                  <p className="text-[15px] leading-[28px]">Purchase your NFT with your credit card</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Mint;
