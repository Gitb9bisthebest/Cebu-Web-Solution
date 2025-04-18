
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Search, FileText, Code2, Layout, TestTube2, Rocket } from 'lucide-react';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: "Research & Discovery",
      description: "We start by understanding your goals, target audience, and project requirements in detail."
    },
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Planning & Strategy",
      description: "Creating a detailed roadmap and technical specifications for your project."
    },
    {
      icon: <Layout className="w-8 h-8 text-primary" />,
      title: "Design & Wireframes",
      description: "Crafting intuitive layouts and user interfaces that align with your brand."
    },
    {
      icon: <Code2 className="w-8 h-8 text-primary" />,
      title: "Development",
      description: "Writing clean, efficient code following best practices and modern standards."
    },
    {
      icon: <TestTube2 className="w-8 h-8 text-primary" />,
      title: "Testing & QA",
      description: "Rigorous testing across devices and browsers to ensure everything works perfectly."
    },
    {
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: "Launch & Support",
      description: "Deploying your project and providing ongoing maintenance and support."
    }
  ];

  return (
    <section className="py-20 section-process">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We follow a structured approach to deliver high-quality web solutions that exceed expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="bg-card border border-border/50 card-hover">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                <div className="mt-4 text-2xl font-bold text-primary">{(index + 1).toString().padStart(2, '0')}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;