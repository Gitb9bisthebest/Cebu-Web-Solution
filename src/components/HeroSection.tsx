
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import CodeAnimation from './CodeAnimation';
import { ArrowRight, Users } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const HeroSection: React.FC = () => {
  const [currentTech, setCurrentTech] = useState(0);
  const technologies = ["HTML", "CSS", "JavaScript", "Shopify", "Webflow"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  const sampleCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>WebAlchemy</title>
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
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden section-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-6 gap-2">
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
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            We craft <span className="gradient-text">exceptional</span> web experiences with
            <div className="inline-block relative text-primary mx-2 min-w-28">
              {technologies[currentTech]}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
            </div>
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0">
            Transforming your ideas into stunning, functional websites using clean code and modern design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" className="gap-2">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Our Work
            </Button>
          </div>
        </div>
        
        <div className="perspective-container hidden md:block">
          <div className="relative transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <CodeAnimation code={sampleCode} className="shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;