
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, ShoppingBag, Workflow } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  className?: string;
  iconBg?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  features,
  className,
  iconBg = "bg-primary/10"
}) => {
  return (
    <Card className={cn("card-hover border border-border/50", className)}>
      <CardHeader>
        <div className={cn("p-3 rounded-lg w-fit mb-4", iconBg)}>
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="rounded-full bg-primary/20 p-1 mt-0.5">
                <svg className="h-2 w-2 fill-current text-primary" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" r="3" />
                </svg>
              </div>
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">Learn More</Button>
      </CardFooter>
    </Card>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Custom Web Development",
      description: "Hand-crafted websites with clean HTML, CSS, and JavaScript",
      features: [
        "Semantic HTML5 structure",
        "Responsive CSS with modern techniques",
        "Interactive JavaScript functionality",
        "Performance optimization",
        "Cross-browser compatibility"
      ],
      iconBg: "bg-primary/10"
    },
    {
      icon: <ShoppingBag className="h-6 w-6 text-orange-400" />,
      title: "Shopify Development",
      description: "Custom Shopify stores that convert visitors to customers",
      features: [
        "Custom theme development",
        "Shopify app integration",
        "Store optimization",
        "Payment gateway setup",
        "Ongoing maintenance"
      ],
      iconBg: "bg-orange-400/10"
    },
    {
      icon: <Workflow className="h-6 w-6 text-blue-400" />,
      title: "Webflow Websites",
      description: "Stunning Webflow websites with pixel-perfect designs",
      features: [
        "Custom Webflow development",
        "Responsive design implementation",
        "CMS setup and integration",
        "Animation and interactions",
        "SEO optimization"
      ],
      iconBg: "bg-blue-400/10"
    }
  ];

  return (
    <section id="services" className="py-20 section-services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We specialize in building custom web solutions that are as beautiful as they are functional,
            focusing on clean code and exceptional user experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              iconBg={service.iconBg}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;