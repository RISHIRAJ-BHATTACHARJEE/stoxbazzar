import { PlusCircle } from "lucide-react";
import React from "react";

const GlassmorphCard = () => {
  return (
    <div
      className="relative rounded-3xl shadow-lg backdrop-blur-xl overflow-hidden 
    bg-gradient-to-br from-white/25 to-white/0 
    px-2 lg:px-[1vw] lg:py-[2vw] w-full lg:w-[22vw] xl:w-[19vw] mx-auto min-h-[63vh] sm:min-h-[68vh] lg:h-[70vh]"
    >
      {/* Header Section */}
      <div className="flex justify-between items-start py-[4vw] lg:py-0 px-2">
        <div className="text-white pt-2 text-xl lg:text-2xl font-semibold">
          Stoxbazaar
        </div>
        <img
          src="/menu.png"
          alt="menu"
          className="w-10 h-10 sm:w-7 sm:h-7 lg:w-11 lg:h-11
"
        />
      </div>

      {/* Main Content */}
      <div className="px-2">
        {/* Title */}
        <div className="mt-3 xl:mt-7 flex items-center justify-between">
          <div>
            <h2 className="text-white text-xl lg:text-2xl font-bold">
              Financial
            </h2>
            <h2 className="text-green-500 text-xl lg:text-2xl font-bold">
              Dashboard
            </h2>
          </div>
          <img src="/add-money.png" alt="" className="w-16 h-10" />
        </div>

        {/* Balance Section */}
        <div className="mt-6 lg:mt-10 relative">
          <div className="text-white text-lg lg:text-2xl ">
            ₹1,88,124.80{" "}
            <span className="text-green-500 text-xs">{"(+20%)"}</span>
          </div>
          <div className="text-white text-xs lg:text-sm mt-1">Total P&L</div>
        </div>

        {/* Indices Card */}
        <div className="mt-8 lg:mt-8">
          <div
            className="w-full h-[100px] lg:h-[120px] xl:h-full  
                bg-white/10 rounded-2xl p-2 lg:p-4 xl:py-5
                flex flex-col items-center justify-center relative gap-5"
          >
            <div className=" flex flex-col">
              <h2 className="text-[10px]">
                <span className="lg:text-[0.8vw]">NIFTY 50</span>
                <span className="text-green-500 pl-10 lg:pl-20">+75.30 (0.31%)</span>
              </h2>
              <h2 className="text-xs">24,532.45 </h2>
            </div>
            <div className="">
              <h2 className="text-[10px]">
                <span className="lg:text-[0.8vw]">SENSEX</span>
                <span className="text-red-500 pl-12 lg:pl-22">-75.30 (0.31%)</span>
              </h2>
              <h2 className="text-xs">24,532.45 </h2>
            </div>
          </div>
        </div>

        {/* Transactions Card */}
        <div className="mt-4 lg:mt-8 bg-white/10 rounded-2xl p-4 lg:p-4 relative">
          {/* Month Selector */}
          <div className="flex justify-between text-white text-[10px] lg:text-sm mb-2">
            <span>August</span>
            <span>September</span>
            <span>October</span>
          </div>

          {/* Transaction Info */}
          <div className="flex flex-col justify-between items-start">
            <PlusCircle
              className="absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
              size={14}
            />
            <div className="flex justify-between items-center w-full pt-5">
              <h2 className="text-[10px] lg:text-sm">Transactions</h2>
              <h2 className="text-[8px] lg:text-sm pl-12">****4527</h2>
            </div>

            <h2 className="text-xs lg:text-lg lg:mt-3">37</h2>

            <div className="flex items-center justify-between w-full mt-2">
              <h2 className="text-xs">This Month</h2>
              <div className="flex">
                <img src="/avatar-1.png" alt="" className="w-5" />
                <img src="/avatar-2.png" alt="" className="w-5" />
                <img src="/avatar-1.png" alt="" className="w-5" />
                <img src="/avatar-2.png" alt="" className="w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassmorphCard;
