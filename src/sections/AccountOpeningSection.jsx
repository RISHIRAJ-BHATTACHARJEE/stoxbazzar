import React from "react";

const AccountOpeningSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#05330E] text-white">
      {/* Decorative Ellipses */}
      <img
        src="/half-ellipse.png"
        alt="Top left decorative ellipse"
        className="w-24 lg:w-[18vw] absolute top-0 left-0"
      />
      <img
        src="/half-ellipse-2.png"
        alt="Bottom right decorative ellipse"
        className="w-24 lg:w-[18vw] absolute bottom-0 right-0"
      />

      <div className="flex flex-col items-center gap-10 px-6 py-16 sm:px-12 sm:py-24 text-center lg:py-28">
        <h2 className="text-[7vw] lg:text-[2.5vw] font-bold leading-tight capitalize max-w-4xl">
          Start trading in real-time with zero hassle.
        </h2>

        <p className="max-w-3xl text-sm sm:text-base lg:text-[1.3vw] lg:max-w-4xl font-light">
          Open a live account with StoxBazaar to access real-time market data,
          powerful trading tools, and seamless order execution. All with a fast,
          secure, and smooth onboarding experience.
        </p>

        <button
          type="button"
          className="mt-6 rounded-xl bg-white px-6 py-3 text-[#05330E] font-medium text-base lg:text-xl transition duration-300 hover:opacity-90"
        >
          Open Your Account
        </button>
      </div>
    </section>
  );
};

export default AccountOpeningSection;
