import { ArrowRight } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    text: "Sign Up & Verify.",
    image: "/kyc-step1.png",
  },
  {
    text: "Add Funds Securely.",
    image: "/kyc-step2.png",
  },
  {
    text: "Start Investing with Confidence.",
    image: "/kyc-step3.png",
  },
];

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="howitworks" className="bg-[#011C07] max-w-[100vw] flex flex-col lg:flex-row-reverse items-center justify-evenly relative gap-20 py-12 lg:py-36 h-fit">
      {/* Mobile Heading */}
      <h2 className="text-[9vw] font-semibold text-center lg:hidden">
        How It Works?
      </h2>

      {/* Visual Container */}
      <div className="relative">
        <img
          src="/blue-ellipse-hollow.png"
          alt="Decorative hollow ellipse"
          className="absolute -left-10 lg:-left-20 -top-6 lg:-top-20 z-0 lg:w-[9vw]"
        />
        <div className="w-70 lg:w-[30vw] h-60 lg:h-full relative z-10 flex items-center justify-center">
          <img
            src={steps[activeStep].image}
            alt={`Step ${activeStep + 1} visual`}
            className="w-full h-full object-contain"
          />
        </div>
        <img
          src="/auth.png"
          alt="Auth icon"
          className="w-25 absolute -bottom-10 -right-10 z-10 lg:hidden"
        />
        <img
          src="/lg-auth.png"
          alt="Large auth icon"
          className="w-[10vw] absolute -bottom-20 -right-20 z-10 hidden lg:block"
        />
      </div>

      {/* Steps Text */}
      <div className="flex flex-col items-start gap-5 font-semibold lg:w-[32vw] xl:w-[34vw]">
        <h2 className="text-[2.5vw] font-semibold pb-10 hidden lg:block">
          How It Works?
        </h2>

        {steps.map((step, index) => {
          const isActive = index === activeStep;
          return (
            <p
              key={index}
              onClick={() => setActiveStep(index)}
              className={`cursor-pointer lg:text-2xl lg:font-medium lg:my-3 flex items-center ${
                isActive ? "text-white" : "text-white/70"
              }`}
            >
              <span
                className={`mr-2 whitespace-nowrap ${
                  isActive ? "text-indigo-400" : "text-white/70"
                }`}
              >
                Step {index + 1}:
              </span>
              {step.text}
              {isActive && <ArrowRight size={32} className="lg:ml-3 w-5"/>}
            </p>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorksSection;
