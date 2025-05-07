import React from "react";

const GetStartedSection = () => {
  return (
    <section className="flex max-w-[100vw] flex-col lg:flex-row items-center justify-between bg-gradient-to-b from-[#090A1C] to-[#05330E] px-6 py-12 lg:px-36 lg:py-30 gap-8">
      
      {/* Mobile Heading */}
      <h2 className="text-[8vw] text-center font-semibold leading-snug lg:hidden">
        Get Started with StoxBazaar
      </h2>

      {/* Image */}
      <img
        src="/image.png"
        alt="Illustration of trading journey"
        className="w-full max-w-md lg:max-w-none lg:w-[45%] lg:order-first"
      />

      {/* Text Content */}
      <div className="flex flex-col items-center lg:items-start gap-6 lg:gap-10 lg:w-1/2">
        
        {/* Desktop Heading */}
        <h2 className="hidden lg:block text-[2.2vw] font-semibold leading-tight">
          Get Started with StoxBazaar
        </h2>

        <p className="text-center text-zinc-300 font-light text-base lg:text-start lg:text-xl">
          Kickstart your trading journey in just a few steps.
          Whether you're a beginner or a seasoned investor, StoxBazaar makes it
          simple to set up & start trading.
          <br /><br />
          Create your account, verify your details, fund your wallet, and you're
          ready to explore the markets — <span className="font-semibold">all in just a few minutes.</span>
        </p>

        <button className="px-6 py-3 text-base lg:text-xl font-light primary lg:self-start">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default GetStartedSection;
