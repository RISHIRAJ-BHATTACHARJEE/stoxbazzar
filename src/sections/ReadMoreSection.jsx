import { ArrowRight } from "lucide-react";
import React, { useState } from "react";

const ReadMoreSection = () => {
  const [selected, setSelected] = useState("Secure Investment");

  const data = [
    {
      title: "Secure Investment",
      description:
        "Trade Stocks, Mutual Funds, IPOs & FnO with ease. No hidden charges, just seamless investing.",
      watermark: "/watermark-1.png",
    },
    {
      title: "Zero Brokerage",
      description:
        "Enjoy zero brokerage on trades. Invest without worrying about extra charges.",
      watermark: "/watermark-2.png",
     },
    {
      title: "500x Margin Facilities",
      description:
        "Leverage your investments up to 500x with our flexible margin facilities.",
      watermark: "/watermark-3.png",
    },
    {
      title: "24/7 Deposit & Withdrawal",
      description:
        "Deposit or withdraw funds anytime, round the clock. Fast and secure transactions.",
      watermark: "/watermark-4.png",
    },
  ];

  const current = data.find((item) => item.title === selected);

  return (
    <div className="bg-[#171717] max-w-[100vw] flex flex-col justify-between gap-8 p-8 relative overflow-hidden lg:min-h-[90vh] lg:flex-row lg:items-center lg:px-16 lg:pt-12 ">
      {/* Desktop Rectangles - Fixed to top */}
      <div className="hidden lg:block absolute top-0 right-0 w-full h-full overflow-hidden z-0">
        <img
          src="/web-rect-2.png"
          alt=""
          className="absolute top-0 right-[5vw] w-[35vw]"
        />
        <img
          src="/web-rect-1.png"
          alt=""
          className="absolute top-0 right-50 w-[35vw]"
        />
      </div>

      {/* Web Start Paragraph */}
      <p className="hidden lg:block absolute top-20 font-light w-[50%] text-[1.5vw] leading-10 xl:leading-10 tracking-wide pl-20">
        From <span className="font-semibold text-indigo-500">cutting-edge tools</span> to real-time insights and a seamless trading
        experience — discover why thousands choose StoxBazaar for smart
        investing.
      </p>
      {/* Mobile Main Content - on top */}
      <div className="relative z-10 flex flex-col items-center w-full">
        {/* <h2 className="text-xl text-white lg:hidden">Read More</h2> */}
        <p className="text-[4vw] text-start mt-6 text-gray-300 relative z-10 lg:hidden">
        From <span className="font-semibold text-indigo-500">cutting-edge tools</span> to real-time insights and a seamless trading
        experience — discover why thousands choose StoxBazaar for smart
        investing.
        </p>

        {/* Rectangle Backgrounds - Placed right after p tag */}
        <img
          src="/rectangle-1.png"
          alt=""
          className="w-[50vw] z-0 absolute top-[5rem] right-4 lg:hidden"
        />
        <img
          src="/rectangle-2.png"
          alt=""
          className="w-[50vw] z-0 absolute top-[5rem] right-10 lg:hidden"
        />

        {/* Center Visual */}
        <div className="flex flex-col items-center z-10 -mt-16 lg:-mt-42">
          <img
            src={current?.watermark}
            alt=""
            className={`z-10 mt-24 ml-12 lg:ml-[38vw] lg:mb-10 w-[30vw] lg:w-[15vw]`}
          />
          {/* Ellipse and Blue Container */}
          <div className="relative lg:ml-[50vw] lg:mr-80 lg:w-[54%] lg:-mt-8">
            {/* Green Ellipse */}
            <img
              src="/green-ellipse.png"
              alt=""
              className="absolute -top-16 -right-0 w-12 h-12 z-20 lg:-top-24 lg:-right-0 lg:w-20 lg:h-20"
            />
            {/* Blue Ellipse */}
            <img
              src="/ellipse-blue.png"
              alt=""
              className="absolute -bottom-15 -left-0 w-12 h-12 z-20 lg:-bottom-20 lg:-left-0 lg:w-20 lg:h-20"
            />
            {/* Blue Div */}
            <div className="bg-[#555BCE] text-white px-8 py-8 h-[20vh] rounded-l-full max-w-md text-center lg:max-w-[50vw] lg:h-[28vh] lg:ml-18 lg:flex lg:flex-col lg:justify-center lg:gap-3">
              <h2 className="text-lg lg:text-[1.8vw] font-semibold ">
                {current?.title}
              </h2>
              <p className="text-sm lg:text-[1.3vw] lg:font-light lg:px-12">
                {current?.description}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Features */}
        <div className="text-white space-y-4 w-full mt-20 lg:hidden">
          {data.map((item) => (
            <div
              key={item.title}
              className={`flex items-center gap-2 cursor-pointer ${
                selected === item.title ? "text-white" : "text-gray-400"
              }`}
              onClick={() => setSelected(item.title)}
            >
              <h2 className="text-md">{item.title}</h2>
              {selected === item.title && <ArrowRight size={18} />}
            </div>
          ))}
        </div>

        {/* Web Features */}
        <div className="text-white space-y-4 w-fit lg:mt-[7vw] absolute left-20 hidden lg:block z-10">
          {data.map((item) => (
            <div
              key={item.title}
              className={`flex  text-2xl gap-3 items-center cursor-pointer ${
                selected === item.title ? "text-white" : "text-gray-400"
              }`}
              onClick={() => setSelected(item.title)}
            >
              <h2 className="text-md lg:mt-8 ">{item.title}</h2>
              {selected === item.title && <ArrowRight size={32} className="mt-8"/>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReadMoreSection;
