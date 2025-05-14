import React, { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ExternalLink, Code, Layers } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

interface PortfolioItemProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  demoUrl?: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  description,
  imageSrc,
  tags,
  demoUrl = "#",
}) => {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-in-out" });
  }, []);

  return (
    <div
      className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <AspectRatio ratio={16 / 9} className="bg-muted">
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/40 z-10"></div>
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${imageSrc})` }}
        ></div>
      </AspectRatio>

      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-end">
          <Button variant="outline" size="sm" className="gap-1" asChild>
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <span>View Project</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

const PortfolioSection: React.FC = () => {
  const portfolioItems = [
    {
      category: "html-css",
      title: "Mountain Retreat",
      description:
        "A responsive landing page for a luxury mountain retreat resort",
      imageSrc:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070",
      tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    },
    {
      category: "shopify",
      title: "Nf Fabric",
      description: "Custom Shopify store for a trendy fashion boutique",
      imageSrc: "/portfolioImages/nffabric.png",
      tags: ["Shopify", "Liquid", "E-commerce"],
      demoUrl: "https://www.nffabric.com/",
    },
    {
      category: "React.js/Next.js",
      title: "Creative Studio",
      description: "A dynamic portfolio website for a creative design agency",
      imageSrc:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2064",
      tags: ["React.js/Next.js", "CMS", "Interactive"],
    },
    {
      category: "html-css",
      title: "Coffee Experience",
      description: "An interactive menu and ordering system for a coffee shop",
      imageSrc:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2070",
      tags: ["HTML", "CSS", "JavaScript", "API"],
    },
    {
      category: "shopify",
      title: "HK Beauty Online Shop",
      description: "Shopify store for curated Jewelery",
      imageSrc: "/portfolioImages/hkbeauty.png",
      tags: ["Shopify", "Custom Theme", "E-commerce"],
      demoUrl: "https://www.hkbeautyonlineshop.com/",
    },
    {
      category: "React.js",
      title: "Architecture Firm",
      description: "Portfolio website for an award-winning architecture firm",
      imageSrc:
        "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=2070",
      tags: ["React.js", "Animation", "Portfolio"],
    },
  ];

  return (
    <section id="portfolio" className="py-20 section-portfolio">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through our latest projects showcasing our expertise in
            HTML/CSS/JS, Shopify, and React.js/Next.js development.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all" className="gap-2">
                <span>All Projects</span>
              </TabsTrigger>
              <TabsTrigger value="html-css" className="gap-2">
                <span>HTML/CSS</span>
              </TabsTrigger>
              <TabsTrigger value="shopify">Shopify</TabsTrigger>
              <TabsTrigger value="React.js">React.js</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.map((item, index) => (
                <PortfolioItem key={index} {...item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="html-css" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems
                .filter((item) => item.category === "html-css")
                .map((item, index) => (
                  <PortfolioItem key={index} {...item} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="shopify" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems
                .filter((item) => item.category === "shopify")
                .map((item, index) => (
                  <PortfolioItem key={index} {...item} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="React.js" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems
                .filter((item) => item.category === "React.js")
                .map((item, index) => (
                  <PortfolioItem key={index} {...item} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PortfolioSection;
