import Card from "./components/Card";
import Navbar from "./components/Navbar";
import AccountOpeningSection from "./sections/AccountOpeningSection";
import DescriptiveFooter from "./sections/DescriptiveFooter";
import FaqSection from "./sections/FaqSection";
import Footer from "./sections/Footer";
import GetStartedSection from "./sections/GetStartedSection";
import GlobalUsersSection from "./sections/GlobalUsersSection";
import HeroSection from "./sections/HeroSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import ReadMoreSection from "./sections/ReadMoreSection";
import TestimonialsSection from "./sections/TestimonialsSection";

function App() {
  return (
    <div className="text-white inter-base">
      <Navbar />
      <HeroSection />
      <GetStartedSection />
      <ReadMoreSection />
      <HowItWorksSection />
      <GlobalUsersSection />
      <AccountOpeningSection />
      <FaqSection />
      <TestimonialsSection />
      <Footer />
      <DescriptiveFooter />
    </div>
  );
}

export default App;
