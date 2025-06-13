import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const AboutSection: React.FC = () => {
  const appName = import.meta.env.VITE_APP_NAME || "Cebu Web Solution";
  const values = [
    {
      title: "Clean Code",
      description:
        "We believe in writing maintainable, efficient code that stands the test of time.",
      iconColor: "text-blue-400",
    },
    {
      title: "Responsive Design",
      description:
        "Every project is crafted to provide an optimal viewing experience across all devices.",
      iconColor: "text-green-400",
    },
    {
      title: "User Experience",
      description:
        "We prioritize intuitive interfaces that guide users effortlessly through your site.",
      iconColor: "text-purple-400",
    },
    {
      title: "Performance",
      description:
        "Fast loading times and smooth interactions are essential to every project we deliver.",
      iconColor: "text-amber-400",
    },
  ];

  return (
    <section id="about" className="py-20 section-about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About {appName}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're a team of passionate developers and designers creating
            exceptional web experiences since 2018.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
            <p className="text-muted-foreground mb-4">
              {appName} was founded with a simple mission: to transform the web
              development landscape by creating websites that combine clean code
              with stunning design.
            </p>
            <p className="text-muted-foreground mb-4">
              What started as a small freelance operation has grown into a
              specialized agency serving clients locally, with expertise
              spanning custom HTML/CSS/JS development,React.js, Next.js and
              Shopify store creation.
            </p>
            <p className="text-muted-foreground">
              Today, we continue to push boundaries with every project, turning
              complex requirements into elegant digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {values.map((value, index) => (
              <Card key={index} className="bg-card border border-border/50">
                <CardContent className="p-6">
                  <CheckCircle2
                    className={cn("h-8 w-8 mb-2", value.iconColor)}
                  />
                  <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
