"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import _ScrollTrigger, { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "lenis/react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Search,
  FileText,
  Layout,
  Code2,
  TestTube2,
  Rocket,
} from "lucide-react";

gsap.registerPlugin(_ScrollTrigger);

const steps = [
  {
    icon: <Search className="w-8 h-8" />,
    step: "01",
    title: "Research & Discovery",
    backgroundUrl: "/ourprocess/research-discovery.jpg",
    description: [
      "This is the foundation of any successful web project. During this phase, we:",
      [
        "Hold discussions or workshops to understand your business goals, target users, and unique selling points.",
        "Analyze competitors and industry standards to find opportunities and avoid pitfalls.",
        "Gather content, technical requirements, and design preferences to shape a clear vision.",
      ],
      "Goal: Define the problem we’re solving and ensure we’re building the right solution from the start.",
    ],
  },
  {
    icon: <FileText className="w-8 h-8" />,
    step: "02",
    title: "Planning & Strategy",
    backgroundUrl: "/ourprocess/planning.jpg",
    description: [
      "Once we know what you need, we build a solid plan. This includes:",
      [
        "Creating a sitemap that outlines all the pages and content structure.",
        "Wireframing key pages to show layout ideas before full design begins.",
        "Defining the technologies, platforms, and integrations to be used.",
        "Setting a realistic project timeline and assigning responsibilities.",
      ],
      "Goal: Turn ideas into a practical, step-by-step blueprint.",
    ],
  },
  {
    icon: <Layout className="w-8 h-8" />,
    step: "03",
    title: "Design & Wireframes",
    backgroundUrl: "/ourprocess/design-wireframe.jpg",
    description: [
      "This is where the visual identity of the site comes to life. We:",
      [
        "Begin with wireframes (simple sketches or digital layouts) to map out page structure and user flow.",
        "Apply colors, fonts, images, and branding elements to create high-fidelity mockups.",
        "Design for responsiveness, ensuring the site looks great on desktop and mobile.",
        "Collect feedback and make refinements before development starts.",
      ],
      "Goal: Create a beautiful, user-centered design that aligns with your brand and goals.",
    ],
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    step: "04",
    title: "Development",
    backgroundUrl: "/ourprocess/development.jpg",
    description: [
      "The approved designs are now brought to life through code. This stage involves:",
      [
        "Frontend development (HTML, CSS, JavaScript) to build interactive, responsive layouts.",
        "Backend development for dynamic features (like databases, admin panels, user logins).",
        "Integrating third-party tools, APIs, or content management systems.",
        "Ensuring clean, maintainable, and scalable code.",
      ],
      "Goal: Build a functional, secure, and high-performing website.",
    ],
  },
  {
    icon: <TestTube2 className="w-8 h-8" />,
    step: "05",
    title: "Testing & QA",
    backgroundUrl: "/ourprocess/testing.jpg",
    description: [
      "Before launch, we run comprehensive checks, including:",
      [
        "Cross-browser testing (Chrome, Firefox, Safari, etc.) and device testing (mobile, tablet, desktop).",
        "Functionality testing for forms, buttons, navigation, and interactive elements.",
        "Performance testing for load speed and responsiveness.",
        "Fixing bugs and final tweaks based on client feedback.",
      ],
      "Goal: Ensure the site is error-free and provides a smooth user experience.",
    ],
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    step: "06",
    title: "Launch & Support",
    backgroundUrl: "/ourprocess/launch.jpg",
    description: [
      "Your website is ready to go live! We handle:",
      [
        "Hosting setup and domain connection.",
        "Final deployment and go-live coordination.",
        "Post-launch monitoring to quickly resolve any unexpected issues.",
        "Ongoing support and maintenance plans for updates, backups, and improvements.",
      ],
      "Goal: Deliver a stable launch and stay available to support your long-term success.",
    ],
  },
];

export default function ProcessSection() {
  const lenis = useLenis(({ scroll }) => {}); // if you want Lenis smoothing
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = container.current!.querySelectorAll(".gsap-card");
      const total = cards.length;

      // initial states
      gsap.set(cards[0], { y: "0%", scale: 1, rotation: 0 });
      for (let i = 1; i < total; i++) {
        gsap.set(cards[i], { y: "100%", scale: 1, rotation: 0 });
      }

      // build scroll timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".gsap-sticky-cards",
          start: "top top",
          end: `+=${window.innerHeight * (total - 1)}`,
          pin: true,
          scrub: 0.5,
        },
      });

      for (let i = 0; i < total - 1; i++) {
        tl.to(
          cards[i],
          { scale: 0.5, rotation: 10, duration: 1, ease: "none" },
          i
        ).to(cards[i + 1], { y: "0%", duration: 1, ease: "none" }, i);
      }

      return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: container }
  );

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="py-20 pb-0 section-process"
    >
      <ReactLenis root>
        <div className="container mx-auto px-4" ref={container}>
          {/* Heading and Description */}
          <div className="text-center">
            <h2
              id="process-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Our Development Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a structured approach to deliver high-quality web
              solutions that exceed expectations and drive business growth.
            </p>
          </div>

          <div className="gsap-sticky-cards h-[80vh] ">
            <div className="gsap-cards-container mx-auto">
              {steps.map((step, idx) => (
                <Card
                  key={idx}
                  className="gsap-card bg-card border border-border/50 overflow-hidden"
                  style={{
                    backgroundImage: `url(${step.backgroundUrl})`, // Apply background image here
                    backgroundSize: "cover", // Ensure the image covers the area
                    backgroundPosition: "center", // Center the image within the card
                  }}
                >
                  <CardContent className="flex flex-col items-center justify-center text-center p-6 h-full">
                    {/* Icon + Step Number Side by Side */}
                    <div
                      className={cn(
                        "flex items-center gap-2 text-2xl font-bold",
                        idx % 3 === 0
                          ? "text-blue-400"
                          : idx % 3 === 1
                          ? "text-purple-400"
                          : "text-amber-400"
                      )}
                    >
                      <span>{step.step.toString().padStart(2, "0")}</span>
                      <span>{step.icon}</span>
                    </div>

                    {/* Title without step number */}
                    <h3 className="text-2xl font-semibold mb-2 text-black">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <div className="text-xl space-y-2 text-black">
                      {Array.isArray(step.description)
                        ? step.description.map((part, i) =>
                            Array.isArray(part) ? (
                              <ul
                                key={i}
                                className="text-lg list-disc text-left list-inside"
                              >
                                {part.map((item, j) => (
                                  <li key={j}>{item}</li>
                                ))}
                              </ul>
                            ) : (
                              <p key={i}>{part}</p>
                            )
                          )
                        : step.description}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Mobile Fallback (visible only on small screens where animations might not work well) */}
          <div className="md:hidden mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {steps.map((step, idx) => (
              <Card
                key={`mobile-${idx}`}
                className="bg-card border border-border/50"
              >
                <CardContent className="p-6">
                  {step.icon}
                  <h4 className="text-lg font-semibold mb-2 mt-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                  <div
                    className={cn(
                      "mt-3 text-xl font-bold",
                      idx % 3 === 0
                        ? "text-blue-400"
                        : idx % 3 === 1
                        ? "text-purple-400"
                        : "text-amber-400"
                    )}
                  >
                    {(idx + 1).toString().padStart(2, "0")}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* ————— inline original CSS (classes renamed) ————— */}
        <style>{`
          .gsap-sticky-cards {
            display: flex;
            justify-content: center;
            align-items: center;
            color: inherit;
            overflow: hidden;
          }
          .gsap-cards-container {
            position: relative;
            width: 80%;
            height: 60%;
            border-radius: 0.5em;
            overflow: hidden;
          }
          .gsap-card {
            position: absolute;
            width: 100%;
            height: 100%;
          }
          @media (max-width: 1000px) {
            .gsap-cards-container {
              width: 70%;
              height: 65%;
            }
          }
          @media (max-width: 640px) {
            .gsap-cards-container {
              width: 95%;
            }
            .gsap-sticky-cards {
              display: none;
            }
          }
        `}</style>
      </ReactLenis>
    </section>
  );
}

// make line 305 display flex
//  remove fallback for mobile device
// add clamp to font size for responsiveness
