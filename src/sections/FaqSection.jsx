import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqHelpText = (
  <p className="text-zinc-600">
    If you have questions, we have answers for you here. In case we don't, feel
    free to reach us at{" "}
    <a
      href="mailto:support@StoxBazaar.com"
      className="text-blue-600 underline hover:text-blue-800"
    >
      support@StoxBazaar.com
    </a>
    .
  </p>
);

const FaqSection = () => {
  return (
    <section id="faq" className="text-black flex flex-col lg:flex-row items-center justify-between lg:justify-evenly p-8 gap-10 lg:h-[150vh] xl:h-[140vh] xl:-mt-[16vw]">
      {/* Left Section: Header & Illustration */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:max-w-xl">
        <h2 className="font-semibold text-[9vw] lg:text-[3vw]">
          Got Questions?
        </h2>

        {/* Mobile-only help text */}
        <div className="lg:hidden">{faqHelpText}</div>

        <img
          src="/faq.png"
          alt="Frequently Asked Questions Illustration"
          className="w-40 lg:w-60"
        />
      </div>

      {/* Right Section: FAQ Accordion */}
      <div className="w-full lg:w-[50%] px-1 py-2 flex flex-col gap-6">
        {/* Desktop-only help text above accordion */}
        <div className="hidden lg:block lg:mt-[24vw] xl:mt-[18vw]">{faqHelpText}</div>

        <Accordion type="single" collapsible>
          {faqData.map(({ id, question, answer }) => (
            <AccordionItem key={id} value={id}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent className="pl-5 pt-2">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

// FAQ Data
const faqData = [
  {
    id: "item-1",
    question: "What is a high-leverage trading platform?",
    answer:
      "A high-leverage trading platform allows traders to control large positions with a smaller capital investment. We offer leverage up to 500x, enabling greater exposure with less upfront cost.",
  },
  {
    id: "item-2",
    question: "Is customer support available 24/7?",
    answer:
      "Yes, our customer support is available 24/7, including weekends and holidays. You can reach us anytime via live chat, email, or WhatsApp.",
  },
  {
    id: "item-3",
    question: "Can I deposit and withdraw funds at any time?",
    answer:
      "Yes, we support 24/7 deposits and withdrawals, so you can access your funds or add capital whenever you need.",
  },
  {
    id: "item-4",
    question: "How fast are the withdrawals processed?",
    answer:
      "We provide some of the fastest withdrawal speeds in the industry. Most requests are processed within minutes, depending on the payment method and verification status.",
  },
  {
    id: "item-5",
    question: "Are there any annual maintenance charges (AMC)?",
    answer:
      "No, there are no annual maintenance charges or hidden fees. You can maintain your account at zero cost.",
  },
  {
    id: "item-6",
    question: "What does ‘Zero Brokerage’ mean?",
    answer:
      "Zero brokerage means you pay no commission on trades, allowing you to trade more often and keep more of your profits.",
  },
  {
    id: "item-7",
    question: "What is the liquidation point for a trade?",
    answer:
      "Your position will be automatically liquidated when your capital incurs a 70% loss, helping to minimize further losses in volatile market conditions.",
  },
  {
    id: "item-8",
    question: "What is Negative Balance Protection (NBP)?",
    answer:
      "We offer Negative Balance Protection, meaning if your account balance drops below zero due to extreme market moves, we will automatically reset it to zero. You’ll never owe more than your deposited amount.",
  },
  {
    id: "item-9",
    question: "What payment methods are supported?",
    answer:
      "We support UPI, bank transfers, IMPS, and crypto wallets, all of which are available 24/7 for deposits and withdrawals.",
  },
];

export default FaqSection;
