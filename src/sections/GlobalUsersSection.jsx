import React, { useState } from "react";
import GlobalCard from "../components/GlobalCard";

const cards = [
  { title: "32K", description: "Active Traders" },
  { title: "11K", description: "Trades per Seconds" },
  { title: "15+", description: "Countries & Counting" },
];

const GlobalUsersSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const defaultSelected = 1;

  const renderCard = (card, index, isHoverable = false) => {
    const isSelected =
      hoveredIndex === index || (hoveredIndex === null && index === defaultSelected);

    const baseClass = isHoverable
      ? `transition-all duration-300 ${
          isSelected ? "bg-[#2B2B2B] text-green-600 rounded-lg" : ""
        }`
      : index === 1
      ? "bg-[#2B2B2B] text-green-600 rounded-lg"
      : "";

    return (
      <div
        key={index}
        onMouseEnter={isHoverable ? () => setHoveredIndex(index) : undefined}
        onMouseLeave={isHoverable ? () => setHoveredIndex(null) : undefined}
        className={isHoverable ? "w-[20vw]" : ""}
      >
        <GlobalCard
          title={card.title}
          description={card.description}
          className={baseClass}
        />
      </div>
    );
  };

  return (
    <section className="bg-[#151515] min-h-screen lg:min-h-[70vh] flex flex-col items-center justify-center gap-10 py-10 px-8">
      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col items-center justify-center gap-12 text-center">
        <h2 className="text-[9vw] font-semibold leading-10">
          Users From All Over The World
        </h2>
        <p className="text-sm text-zinc-500 px-6">
          A global community of investors, united by passion & purpose. Turning
          ideas into impact and investing into something extraordinary.
        </p>
        <img src="/map.png" alt="World Map" className="lg:w-80" />
        <div className="flex items-start justify-between gap-4">
          {cards.map((card, index) => renderCard(card, index))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center justify-between w-full">
        <img src="/map.png" alt="World Map" className="w-[43%] pl-24" />
        <div className="flex flex-col gap-10 pl-32">
          <h2 className="text-[2.5vw] font-semibold w-3/5 text-left">
            Users From All Over The World
          </h2>
          <p className="text-[1.5vw] font-normal w-[65%] text-zinc-400 text-left">
            A global community of investors, united by passion & purpose.
            Turning ideas into impact and investing into something extraordinary.
          </p>
          <div className="flex items-center justify-between w-2/4 gap-8">
            {cards.map((card, index) => renderCard(card, index, true))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalUsersSection;
