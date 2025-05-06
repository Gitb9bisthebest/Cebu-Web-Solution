import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md py-3 shadow-md"
          : "bg-transparent py-5"
      )}
    >
      {/* Container with proper desktop padding */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          {/* Logo with controlled spacing */}
          <div className="flex-shrink-0">
            <a href="#" className="block">
              <img
                src="/logo-light.svg"
                alt="Logo"
                className="block dark:hidden h-[3.5rem] w-auto"
              />
              <img
                src="/logo-dark.svg"
                alt="Logo"
                className="hidden dark:block h-[3.5rem] w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation - centered properly */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Button size="sm" asChild>
                <a href="#get-quote">Get Quote</a>
              </Button>
            </div>
          </div>

          {/* Mobile Controls - properly spaced */}
          <div className="flex md:hidden items-center gap-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-50 flex flex-col">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center">
            <div className="flex-shrink-0">
              <a href="#" className="block">
                <img
                  src="/logo-light.svg"
                  alt="Logo"
                  className="block dark:hidden h-[3.5rem] w-auto"
                />
                <img
                  src="/logo-dark.svg"
                  alt="Logo"
                  className="hidden dark:block h-[3.5rem] w-auto"
                />
              </a>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <nav className="flex flex-col items-center justify-center flex-1 gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button size="sm" asChild>
              <a href="#get-quote">Get Quote</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
