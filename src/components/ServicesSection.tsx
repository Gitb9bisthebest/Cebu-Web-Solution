import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesSection: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-in-out" });
  }, []);

  const services = [
    {
      imageUrl: "img/Coding.jpg",
      title: "Fully Custom Websites",
      alt: "A man coding a website",
      description:
        "We build handcrafted websites tailored to your goals, without relying on platforms like WordPress or Wix. You get a lean, performance-focused site that’s built from scratch — and fully yours.",
      features: [
        "Clean HTML, CSS, JavaScript, React.js and Next.js",
        "Responsive layout across all devices",
        "Fast loading times and lightweight code",
        "Accessible and SEO-friendly structure",
      ],
    },
    {
      imageUrl: "img/mobile-first.jpg",
      alt: "Image of a mobile friendly website",
      title: "Mobile-First and Performance-Driven",
      description:
        "We prioritize usability and speed — especially on mobile devices. This ensures your visitors get the best experience whether they’re browsing from a phone, tablet, or desktop.",
      features: [
        "Optimized mobile layouts",
        "Touch-friendly interactions",
        "Lazy loading and compression",
        "Minimal reliance on third-party scripts",
      ],
    },
    {
      imageUrl: "img/SEO.jpg",
      alt: "A notebook planner for SEO",
      title: "SEO-Ready Foundations",
      description:
        "We build with SEO in mind from the start, so your site isn’t just good-looking — it’s discoverable. You’ll have clean code, structured data, and fast performance that search engines love.",
      features: [
        "Semantic HTML for crawlability",
        "Open Graph and meta tags setup",
        "Page speed optimization",
        "Clean URLs and sitemap support",
      ],
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
          <p className="text-muted-foreground">
            We specialize in custom-built websites for local and startup
            businesses. Our focus is on delivering fast, SEO-friendly, and
            subscription-free websites that you fully own.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-24">
          {services.map((service, index) => {
            const isImageRight = index % 2 !== 0;

            return (
              <div
                key={index}
                className={cn("flex flex-col md:flex-row items-center gap-10", {
                  "md:flex-row-reverse": isImageRight,
                })}
              >
                {/* Image */}
                <div
                  className="w-full md:w-1/2"
                  data-aos={isImageRight ? "fade-left" : "fade-right"}
                >
                  <img
                    src={service.imageUrl}
                    alt={service.alt}
                    className="rounded-3xl w-full h-80 object-cover shadow-2xl"
                    loading="lazy"
                  />
                </div>

                {/* Text Content */}
                <div
                  className="w-full md:w-1/2"
                  data-aos={isImageRight ? "fade-right" : "fade-left"}
                >
                  <h3 className="text-2xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 text-muted-foreground list-disc pl-5 text-sm">
                    {service.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note about silent services */}
        <div className="mt-20 max-w-2xl mx-auto text-center text-sm text-muted-foreground italic">
          *** For more advanced needs like online stores or drag-and-drop
          editing, we also build on Shopify— but only if it fits your goals.
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
