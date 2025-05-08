import React from "react";

const GetStartedSection = () => {
  return (
    <section
      id="about"
      className="max-w-full bg-gradient-to-b from-[#090A1C] to-[#05330E] px-6 py-12 lg:px-36 lg:py-30 flex flex-col lg:flex-row items-center justify-between gap-8"
    >
      {/* Heading for Mobile */}
      <h2 className="text-[8vw] font-semibold leading-snug text-center lg:hidden">
        Get Started with StoxBazaar
      </h2>

      {/* Illustration */}
      <img
        src="/image.png"
        alt="Trading journey illustration"
        className="w-full max-w-md lg:w-[45%] lg:order-first"
        loading="lazy"
      />

      {/* Content */}
      <div className="lg:w-1/2 flex flex-col items-center lg:items-start gap-6 lg:gap-10">
        {/* Heading for Desktop */}
        <h2 className="hidden lg:block text-[2.2vw] font-semibold leading-tight">
          Get Started with StoxBazaar
        </h2>

        <p className="text-base lg:text-xl text-zinc-300 font-light text-center lg:text-start">
          Kickstart your trading journey in just a few steps. Whether you're a
          beginner or a seasoned investor, StoxBazaar makes it simple to set up
          and start trading.
          <br />
          <br />
          Create your account, verify your details, fund your wallet, and
          you’re ready to explore the markets —{" "}
          <span className="font-semibold">all in just a few minutes.</span>
        </p>

        <button className="primary px-6 py-3 text-base lg:text-xl font-light lg:self-start">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default GetStartedSection;
