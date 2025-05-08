import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Card from "../components/Card";

const TOTAL_CARDS = 5;

const testimonials = [
  {
    name: "Rohan M.",
    info: "Mumbai - Full-Time Trader",
    description: "I've used multiple platforms, but this one truly stands out. Zero brokerage, lightning-fast withdrawals, and 24/7 support make it a dream for serious traders like me.",
    rating: 2
  },
  {
    name: "Priya S.",
    info: "Bangalore - Part-Time Investor",
    description: "I love how easy it is to deposit and withdraw anytime, even on Sundays. Plus, no hidden charges — just clean, honest trading.",
    rating: 5
  },
  {
    name: "Amit J.",
    info: "Delhi - Crypto Enthusiast",
    description: "High leverage and negative balance protection gave me the confidence to scale my trades. Even when the market was volatile, my account stayed safe.",
    rating: 3
  },
  {
    name: "Sneha R.",
    info: "Hyderabad - New to Trading",
    description: "As a beginner, I was worried about hidden fees and complicated apps. But this platform is super beginner-friendly with excellent customer support around the clock.",
    rating: 4
  },
  {
    name: "Manish T.",
    info: "Ahmedabad - Professional Analyst",
    description: "What impressed me the most is the ultra-fast withdrawal. I got funds in my bank account within minutes. That's rare in India.",
    rating: 4
  },
]


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
        className="flex overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory lg:overflow-x-hidden lg:mx-[14vw]"
      >
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className={`shrink-0 snap-center flex justify-center transition-transform duration-500 ease-in-out
              w-full lg:w-1/3
              ${idx === currentIndex + Math.floor(cardsPerView / 2) ? "scale-105 " : "scale-90"}
            `}
          >
            <Card description={item.description} name={item.name} info={item.info} rating={item.rating}/>
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
