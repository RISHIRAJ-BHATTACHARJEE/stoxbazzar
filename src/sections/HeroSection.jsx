import React from "react";
import GlassmorphCard from "../components/GlassmorphCard";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="pb-20 lg:pt-8 lg:pb-10 lg:max-h-screen max-w-[100vw] bg-gradient-to-b from-[#0A0B1D] to-[#05330E] lg:bg-[linear-gradient(110deg,_#000000_50%,_#05330E_100%)]">
      <img
        src="/particles.png"
        alt=""
        className="absolute left-10 -bottom-100 w-[70vw] lg:left-0 lg:w-[40vw] lg:top-4"
      />
      {/* Texts */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 py-12">
        <div className="flex flex-col items-center lg:items-start gap-14">
          {/* Heading */}
          <h2 className="text-center lg:text-start text-[8vw] lg:text-[4vw] lg:pl-30 leading-10 lg:leading-12 xl:leading-18 font-semibold">
            Invest Smarter
            <br /> Trade Faster.
          </h2>

          {/* Paragraph */}
          <p className="text-center lg:text-start font-light px-14 lg:pl-30 -mt-6 my-4 lg:w-[85%] text-zinc-300 text-sm xl:text-lg">
            Trade Smarter with{" "}
            <span className="font-semibold">
              Secure Investment, Zero Brokerage
            </span>
            , and up to{" "}
            <span className="font-semibold">500x Margin Facilities.</span> Enjoy{" "}
            <span className="font-semibold">24/7 Deposit & Withdrawal.</span>{" "}
            Unlock your Full Trading Potential —{" "}
            <span className="font-semibold">Anytime, Anywhere.</span>
          </p>

          {/* Get Started, How it works - Desktop only */}
          <div className="hidden lg:flex flex-row items-center gap-10 ml-30 z-10">
            <a href="#howitworks" className="px-4 lg:text-lg py-2 font-light primary cursor-pointer">
              Get Started
            </a>
            <div className="flex items-center gap-3">
              <img src="/play.png" alt="" className="w-[10vw] lg:w-[3vw]" />
              <div className="flex items-center">
                <h2 className="">How It Works</h2>
                <ChevronRight size={22} className="text-indigo-500" />
              </div>
            </div>
          </div>

          {/* Features Desktop only */}
          <div className="hidden lg:grid grid-cols-4 pl-26 justify-evenly items-center">
            {/* Feature-1 */}
            <div className="flex flex-col items-center justify-center">
              <img src="/candlestick.png" alt="" className="w-[3vw]" />
              <h2 className="text-center text-sm">
                Equities &<br /> Commodities
              </h2>
            </div>
            {/* Feature-2 */}
            <div className="flex flex-col items-center justify-center gap-2">
              <img src="/zero-brok.png" alt="" className="w-[2vw]" />
              <h2 className="text-center text-sm">
                Zero
                <br /> Brokerage
              </h2>
            </div>
            {/* Feature-3 */}
            <div className="flex flex-col items-center justify-center px-2">
              <img src="/margin.png" alt="" className="w-[2.5vw] pb-2" />
              <h2 className="text-center text-sm">
                500X
                <br /> Margin Facilities
              </h2>
            </div>
            {/* Feature-4 */}
            <div className="flex flex-col items-center justify-center gap-2">
              <img src="/deposit-withdrawl.png" alt="" className="w-[2.5vw]" />
              <h2 className="text-center text-sm">
                24/7 Deposit &<br /> Withdrawal
              </h2>
            </div>
          </div>
        </div>

        {/* Background Images */}
        <div className="relative w-full h-[60vh] lg:h-[80vh] overflow-visible lg:-mb-12">
          {/* Background bars */}
          <img
            src="/bar-1.png"
            alt=""
            className="absolute -top-[6vh] xl:-top-[12vh] right-0 w-[70vw] lg:w-[30vw] z-0"
          />
          <img
            src="/bar-2.png"
            alt=""
            className="absolute bottom-0 left-0 w-[70vw] z-0 lg:hidden"
          />
          <img
            src="lg-bar-2.png"
            alt=""
            className="hidden lg:block absolute -bottom-10 left-0 w-[40vw] z-0"
          />

          {/* Blue ellipse - top right overlapping bar-1 */}
          <img
            src="/ellipse-blue.png"
            alt=""
            className="absolute w-[25vw] lg:w-[9vw] right-[12vw] lg:right-[12vw] xl:right-[14vw] top-[6vh] translate-y-[-50%] z-10"
          />

          {/* Green ellipse - outside bar-1 bottom left */}
          <img
            src="/green-ellipse.png"
            alt=""
            className="absolute w-[20vw] lg:w-[8vw] left-[12vw] lg:left-[8vw] bottom-[26vh] lg:bottom-[25vh] z-10"
          />

          {/* Vector - beside green ellipse */}
          <img
            src="/Vector.png"
            alt=""
            className="absolute w-[18vw] lg:w-[8vw] left-[5vw] lg:left-[5vw] bottom-[26vh] lg:bottom-[23vh] z-10"
          />

          {/* Glassmorphism Card */}
          <div className="absolute my-8 z-20 left-1/2 lg:left-[23vw] top-[52%] translate-x-[-50%] translate-y-[-50%] w-[60vw] max-w-[400px] lg:max-w-[100vw] lg:h-full xl:max-w-[18vw]">
            <GlassmorphCard />
          </div>
        </div>
      </div>

      {/* Features - Mobile Only */}
      <div className="lg:hidden grid grid-cols-2 gap-10 px-12 mt-14 justify-evenly items-center">
        {/* Feature-1 */}
        <div className="flex flex-col items-center justify-center">
          <img src="/candlestick.png" alt="" className="w-[12vw]" />
          <h2 className="text-center">Equities & Commodities</h2>
        </div>
        {/* Feature-2 */}
        <div className="flex flex-col items-center justify-center gap-3">
          <img src="/zero-brok.png" alt="" />
          <h2 className="text-center">
            Zero
            <br /> Brokerage
          </h2>
        </div>
        {/* Feature-3 */}
        <div className="flex flex-col items-center justify-center">
          <img src="/margin.png" alt="" className="w-[10vw]" />
          <h2 className="text-center">500X Margin Facilities</h2>
        </div>
        {/* Feature-4 */}
        <div className="flex flex-col items-center justify-center">
          <img src="/deposit-withdrawl.png" alt="" className="w-[10vw]" />
          <h2 className="text-center">24/7 Deposit & Withdrawal</h2>
        </div>
      </div>

      {/* Get Started and How it works - Mobile Only */}
      <div className="lg:hidden flex flex-col lg:flex-row items-center lg:items-center gap-6 pt-20">
        <a href="#howitworks" className="px-4 lg:text-lg py-2 font-light primary ">
          Get Started
        </a>
        <div className="flex items-center gap-3">
          <img src="/play.png" alt="" className="w-[10vw] lg:w-[3vw]" />
          <div className="flex items-center">
            <h2 className="">How It Works</h2>
            <ChevronRight size={22} className="text-indigo-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
