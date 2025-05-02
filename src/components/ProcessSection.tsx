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
    icon: <Search className="w-8 h-8 text-blue-400" />,
    title: "Research & Discovery",
    description:
      "We start by understanding your goals, target audience, and project requirements in detail.",
  },
  {
    icon: <FileText className="w-8 h-8 text-purple-400" />,
    title: "Planning & Strategy",
    description:
      "Creating a detailed roadmap and technical specifications for your project.",
  },
  {
    icon: <Layout className="w-8 h-8 text-amber-400" />,
    title: "Design & Wireframes",
    description:
      "Crafting intuitive layouts and user interfaces that align with your brand.",
  },
  {
    icon: <Code2 className="w-8 h-8 text-green-400" />,
    title: "Development",
    description:
      "Writing clean, efficient code following best practices and modern standards.",
  },
  {
    icon: <TestTube2 className="w-8 h-8 text-blue-400" />,
    title: "Testing & QA",
    description:
      "Rigorous testing across devices and browsers to ensure everything works perfectly.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-purple-400" />,
    title: "Launch & Support",
    description:
      "Deploying your project and providing ongoing maintenance and support.",
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

          <div className="gsap-sticky-cards h-[80vh]">
            <div className="gsap-cards-container mx-auto">
              {steps.map((step, idx) => (
                <Card
                  key={idx}
                  className="gsap-card bg-card border border-border/50 overflow-hidden"
                >
                  <CardContent className="flex flex-col items-center justify-center text-center p-6 h-full">
                    <div className="mb-4">{step.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                    <div
                      className={cn(
                        "mt-4 text-2xl font-bold",
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
