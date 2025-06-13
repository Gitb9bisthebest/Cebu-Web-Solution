import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import CodeAnimation from "./CodeAnimation";
import { ArrowRight, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  const [currentTech, setCurrentTech] = useState(0);
  const technologies = ["HTML", "CSS", "JavaScript"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const sampleCode = `<!DOCTYPE html>
<html lang="en">  
<head>    
  <meta charset="UTF-8">    
  <title>Cebu Web Solution</title>    
  <link rel="stylesheet" href="style.css">  
</head>  
<body>    
  <div class="container">      
    <h1 class="title">Beautiful Code</h1>      
    <button class="cta-button">Get Started</button>    
  </div>    
  <script src="main.js"></script>
</body>
</html>`;

  return (
    <section className="relative pt-16 pb-16 md:pt-24 md:pb-24 overflow-hidden section-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 dark:block hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#040812] via-[#0c1445] to-[#000000]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 flex flex-col items-center text-center gap-6">
        {/* Avatar + Happy Customers */}
        <div className="flex items-center justify-center mb-4 gap-2 invisible">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <Avatar key={i} className="border-2 border-background">
                <AvatarImage src={`https://i.pravatar.cc/100?img=${i + 10}`} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <div className="bg-muted px-3 py-1 rounded-full flex items-center gap-1">
            <Users size={14} className="text-primary" />
            <span className="text-sm font-medium">1K+ Happy Customers</span>
          </div>
        </div>

        {/* Heading with Clipping Reveal */}
        <motion.div
          className="overflow-hidden"
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          animate={{ clipPath: "inset(0% 0 0 0)" }}
          transition={{
            duration: 3,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2,
          }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{
              duration: 3,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2,
            }}
          >
            Fast, <span className="gradient-text">subscription-free</span>{" "}
            websites for local and startup businesses using
            <motion.div
              className="inline-block relative text-primary mx-2 min-w-28 overflow-hidden"
              initial={{ clipPath: "inset(100% 0 0 0)", y: 100 }}
              animate={{ clipPath: "inset(0% 0 0 0)", y: 0 }}
              transition={{
                duration: 3,
                ease: [0.22, 1, 0.36, 1],
                delay: 1,
              }}
            >
              {technologies[currentTech]}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
            </motion.div>
          </motion.h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="text-muted-foreground text-lg md:text-xl mb-6 max-w-xl mx-auto"
        >
          We build hard-coded websites that load fast, cost less, and are built
          just for your small business — no monthly builder fees, no fluff.
        </motion.p>

        {/* Call To Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="gap-2" asChild>
            <a href="#contact">
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline">
            <a href="#portfolio">View Our Work</a>
          </Button>
        </div>

        {/* Code Animation */}
        <div className="perspective-container w-full max-w-3xl pt-6">
          <div className="relative transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <CodeAnimation code={sampleCode} className="shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
