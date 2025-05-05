"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { PlanInquiryModal } from "./PricingModal"; // Make sure this matches your export

const pricingPlans = [
  {
    title: "Starter Plan",
    price: " ₱5,000",
    description:
      "Perfect for individuals or small businesses needing a simple online presence.",
    features: [
      "1 Landing page (Home or a Single-page site)",
      "Mobile-responsive design",
      "Basic contact form",
      "Basic SEO setup",
      "Free 1-year .com domain",
      "Free 1-month support",
    ],
  },
  {
    title: "Professional Plan",
    price: "₱14,000",
    description:
      "Best for small businesses or professionals who want more content and features.",
    features: [
      "3–5 pages (Home, About, Services, Contact, etc.)",
      "Mobile-friendly & responsive design",
      "Contact form",
      "Social media integration",
      "Basic SEO optimization",
      "Free 1-year domain (.com, .net, or .org)",
      "Free 2-month support",
    ],
  },
  {
    title: "Business Plan",
    price: "₱20,000",
    description:
      "Designed for businesses looking to establish a more professional and functional online presence.",
    features: [
      "7–10 pages (Landing page, About, Services, Blog, Contact, etc.)",
      "Mobile-responsive design",
      "Contact + inquiry forms",
      "Basic blog integration",
      "Social media & Google Maps integration",
      "Advanced SEO setup",
      "Free 1-year domain (.com, .net, or .org)",
      "Free 3-month support",
    ],
  },
];

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectPlan = (plan: string) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  return (
    <section className="py-24 bg-background relative z-10">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Flexible Pricing for Every Need
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Choose a plan that fits your goals — whether you're just starting or
            scaling fast.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, idx) => {
            const isSelected = selectedPlan === plan.title;
            return (
              <div
                key={idx}
                className={`rounded-2xl p-8 border transition-all duration-300 card-hover
                ${
                  isSelected
                    ? "ring-4 ring-primary ring-offset-2"
                    : "bg-muted/5 text-foreground"
                }
                `}
              >
                <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
                <p className="text-xl font-bold mb-4">{plan.price}</p>
                <p className="mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={isSelected ? "secondary" : "default"}
                  size="lg"
                  onClick={() => handleSelectPlan(plan.title)}
                >
                  {isSelected ? "Selected" : "Choose Plan"}
                </Button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal rendered outside the loop */}
      <PlanInquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </section>
  );
};

export default PricingSection;
