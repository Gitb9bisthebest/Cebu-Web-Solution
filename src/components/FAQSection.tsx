import { useState } from "react";

const FAQ = () => {
  const appName = import.meta.env.VITE_APP_NAME || "Cebu Web Expert";
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What services do you offer?",
      answer: `${appName} offers a comprehensive range of digital services including website design and development, e-commerce solutions, SEO optimization, digital marketing, and web maintenance.`,
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "The timeline depends on complexity. Simple websites: 2–4 weeks. Complex projects: 4–12 weeks.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "Pricing depends on scope. Contact us for a quote tailored to your business goals.",
    },
    {
      question: "Do you offer website maintenance services?",
      answer:
        "Yes! We keep your website secure, fast, and updated with monthly or custom plans.",
    },
    {
      question: "Can you help with SEO and digital marketing?",
      answer:
        "Absolutely. We offer SEO, ad campaigns, content strategies, and analytics.",
    },
    {
      question: "Do you work with clients outside of Cebu?",
      answer:
        "Yes. We work with clients across the Philippines and globally via remote tools.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white dark:bg-[#1F2733]" id="faq">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* LEFT COLUMN - Heading */}
          <div className="lg:w-1/3 lg:flex lg:items-center lg:justify-center">
            <h2 className="text-4xl font-bold text-left lg:text-center">
              Everything you <br /> need to know.
            </h2>
          </div>

          {/* RIGHT COLUMN - FAQ Accordion */}
          <div className="lg:w-2/3 space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={index}
                  className="rounded-lg shadow-md overflow-hidden bg-white dark:bg-gray-800"
                >
                  {/* Question Header */}
                  <div
                    className="p-5 font-semibold flex justify-between items-center bg-white text-muted-foreground dark:bg-[#0F1729] dark:text-white cursor-pointer hover:bg-gray-100 dark:hover:bg-[#2C3846]"
                    onClick={() => toggleItem(index)}
                  >
                    <h3 className="text-lg">{item.question}</h3>
                    <span
                      className={`text-xl font-bold transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </div>

                  {/* Answer Body */}
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen ? "max-h-[500px] p-5" : "max-h-0 px-5"
                    }`}
                  >
                    <p className="text-gray-700 dark:text-gray-300">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
