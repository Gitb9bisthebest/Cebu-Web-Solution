
import React from 'react';
import { Code2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    services: [
      { name: "HTML, CSS & JS", href: "#services" },
      { name: "Shopify Development", href: "#services" },
      { name: "Webflow Development", href: "#services" },
      { name: "Maintenance", href: "#services" }
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Our Team", href: "#about" },
      { name: "Contact", href: "#contact" }
    ],
    resources: [
      { name: "Blog", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Developer Tools", href: "#" }
    ]
  };
  
  return (
    <footer className="bg-card pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 text-lg mb-4">
              <Code2 className="h-6 w-6 text-primary" />
              <span className="gradient-text font-bold">WebAlchemy</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transforming ideas into exceptional web experiences with clean code and modern design.
              Specializing in custom HTML/CSS/JS, Shopify, and Webflow development.
            </p>
            <div className="flex gap-4">
              {["Twitter", "GitHub", "LinkedIn", "Instagram"].map((social, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
                  aria-label={social}
                >
                  <span className="text-xs">{social.charAt(0)}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <Separator className="mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} WebAlchemy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;