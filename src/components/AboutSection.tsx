import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

type QuoteFormData = {
  projectType: string;
  timeline: string;
  budget: string;
  description: string;
  email: string;
};

const AboutSection: React.FC = () => {
  const { toast } = useToast();
  const form = useForm<QuoteFormData>();

  const onSubmit = (data: QuoteFormData) => {
    console.log("Quote Form Data:", data);
    toast({
      title: "Quote Request Received!",
      description: "We'll send your free quote to " + data.email + " shortly.",
    });
    form.reset();
  };

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
            About WebAlchemy
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're a team of passionate developers and designers creating
            exceptional web experiences since 2018.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
            <p className="text-muted-foreground mb-4">
              WebAlchemy was founded with a simple mission: to transform the web
              development landscape by creating websites that combine clean code
              with stunning design.
            </p>
            <p className="text-muted-foreground mb-4">
              What started as a small freelance operation has grown into a
              specialized agency serving clients worldwide, with expertise
              spanning custom HTML/CSS/JS development, Shopify store creation,
              and Webflow website design.
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

        <div className="max-w-2xl mx-auto py-20" id="get-quote">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Get Your Free Quote
          </h3>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="projectType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What type of project do you need?</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="html-css-js">
                          Custom HTML/CSS/JavaScript
                        </SelectItem>
                        <SelectItem value="shopify">Shopify Store</SelectItem>
                        <SelectItem value="webflow">Webflow Website</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="timeline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>When do you need this completed?</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="asap">
                          As soon as possible
                        </SelectItem>
                        <SelectItem value="1-month">Within 1 month</SelectItem>
                        <SelectItem value="3-months">
                          Within 3 months
                        </SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What's your budget range?</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="below-5k">Below $5,000</SelectItem>
                        <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k-20k">
                          $10,000 - $20,000
                        </SelectItem>
                        <SelectItem value="above-20k">Above $20,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tell us about your project</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Please describe your project requirements..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email address to receive the quote</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Get Free Quote
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
