import { useState, useEffect } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const handleResize = () => {
      const isLarge = window.innerWidth >= 992;
      setIsLargeScreen(isLarge);

      // Only set the first item open on small screens when mounting
      if (!isLarge) {
        setActiveIndex(0);
      } else {
        setActiveIndex(null); // reset on large screen
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleItem = (index) => {
    if (!isLargeScreen) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  const faqItems = [
    {
      question: "What services do you offer?",
      answer:
        "Cebu Web Solution offers a comprehensive range of digital services including website design and development, e-commerce solutions, SEO optimization, digital marketing, and web maintenance. We specialize in creating tailored websites that align with your business goals.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "The timeline for website development depends on the complexity and requirements of your project. A simple informational website might take 2-4 weeks, while more complex e-commerce or custom websites can take 4-12 weeks. During our initial consultation, we'll provide you with a more accurate timeline based on your specific needs.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "Our pricing varies based on the scope of work and requirements of each project. We offer customized packages to meet different business needs and budgets. For a detailed quote, please contact us with your project details, and we'll be happy to provide you with a comprehensive proposal.",
    },
    {
      question: "Do you offer website maintenance services?",
      answer:
        "Yes, we provide ongoing website maintenance services to ensure your website remains secure, up-to-date, and performs optimally. Our maintenance packages include regular updates, security checks, backups, performance optimization, and technical support. We can tailor a maintenance plan to fit your specific requirements.",
    },
    {
      question: "Can you help with SEO and digital marketing?",
      answer:
        "Absolutely! SEO and digital marketing are key services we offer. We implement on-page SEO optimization, create content strategies, manage social media marketing, run targeted ad campaigns, and provide comprehensive analytics to measure and improve your online presence and conversions.",
    },
    {
      question: "Do you work with clients outside of Cebu?",
      answer:
        "Yes, we work with clients throughout the Philippines and internationally. Our team is equipped to collaborate remotely, and we use various communication tools to ensure smooth project management regardless of location. We pride ourselves on providing excellent service to clients worldwide.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white dark:bg-[#1F2733]" id="faq">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div
          className={
            isLargeScreen
              ? "grid grid-cols-1 lg:grid-cols-2 gap-6"
              : "space-y-4"
          }
        >
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="rounded-lg shadow-md overflow-hidden bg-white dark:bg-gray-800"
            >
              {/* Question */}
              <div
                className="p-5 font-semibold flex justify-between items-center bg-white text-muted-foreground dark:bg-[#0F1729] dark:text-white cursor-pointer hover:bg-gray-100 dark:hover:bg-[#2C3846]"
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-lg">{item.question}</h3>
                {!isLargeScreen && (
                  <span
                    className={`text-xl transition-transform duration-300 ${
                      activeIndex === index ? "transform rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                )}
              </div>

              {/* Answer */}
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  isLargeScreen || activeIndex === index
                    ? "max-h-96 p-5"
                    : "max-h-0"
                }`}
              >
                <p className="text-gray-700 dark:text-gray-300">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
