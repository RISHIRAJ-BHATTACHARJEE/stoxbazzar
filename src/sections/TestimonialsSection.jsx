import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Card from "../components/Card";

const TOTAL_CARDS = 5;

const TestimonialsSection = () => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const updateCardsPerView = () => {
      setCardsPerView(window.innerWidth >= 1024 ? 3 : 1);
    };
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const scroll = (direction) => {
    const container = carouselRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth / cardsPerView;
    const newIndex =
      direction === "left"
        ? Math.max(currentIndex - 1, 0)
        : Math.min(currentIndex + 1, TOTAL_CARDS - cardsPerView);

    setCurrentIndex(newIndex);
    // Smooth scroll to the new index
    container.scrollTo({
      left: newIndex * scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const handleScroll = () => {
      const index = Math.round(container.scrollLeft / (container.offsetWidth / cardsPerView));
      setCurrentIndex(index);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [cardsPerView]);

  return (
    <section className="bg-[#303030] max-w-[100vw] w-full px-4 py-10 ">
      <h2 className="text-xl lg:text-4xl lg:mt-12 font-semibold text-white mb-4 text-center">
        Testimonials
      </h2>

      <div
        ref={carouselRef}
        className="flex gap-4 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory lg:overflow-x-hidden"
      >
        {[...Array(TOTAL_CARDS)].map((_, i) => (
          <div
            key={i}
            className={`shrink-0 snap-center flex justify-center transition-transform duration-500 ease-in-out
              w-full lg:w-1/3
              ${i === currentIndex + Math.floor(cardsPerView / 2) ? "scale-105 " : "scale-90"}
            `}
          >
            <Card />
          </div>
        ))}
      </div>

      {/* Arrows + Pagination Dots */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={() => scroll("left")}
          className="p-2 border rounded-full bg-white hover:bg-gray-100 transition"
        >
          <ChevronLeft size={20} className="text-black" />
        </button>

        <div className="flex items-center gap-2">
          {[...Array(TOTAL_CARDS - cardsPerView + 1)].map((_, i) => (
            <div
              key={i}
              className={`transition-all rounded-full ${
                currentIndex === i ? "w-4 h-4 bg-white" : "w-2 h-2 bg-gray-400"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="p-2 border rounded-full bg-white hover:bg-gray-100 transition"
        >
          <ChevronRight size={20} className="text-black" />
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
