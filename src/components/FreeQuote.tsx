import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
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
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteFormSchema, QuoteFormData } from "@/lib/validators";

const FreeQuote: React.FC = () => {
  const { toast } = useToast();
  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      projectType: "",
      timeline: "",
      budget: "",
      description: "",
      email: "",
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    const endpoint = import.meta.env.VITE_FORMSPREE_FREE_QUOTE;

    if (!endpoint) {
      toast({
        title: "Missing Form Endpoint",
        description: "Submission endpoint is not configured.",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          projectType: data.projectType,
          timeline: data.timeline,
          budget: data.budget,
          description: data.description,
          email: data.email,
        }),
      });

      if (response.ok) {
        toast({
          title: "🎉 Quote Sent Successfully!",
          description:
            "We’ll contact you soon. Check your inbox at " + data.email,
        });
        form.reset();
      } else {
        toast({
          title: "Submission Failed",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Unable to send your request.",
        variant: "destructive",
      });
      console.error("Formspree Error:", error);
    }
  };

  return (
    <section id="get-quote" className="py-20 section-about">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get Your Free Quote
          </h2>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 p-8 rounded-2xl border border-border/50 bg-card shadow-lg"
            >
              <FormField
                control={form.control}
                name="projectType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What type of project do you need?</FormLabel>
                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                      required
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
                        <SelectItem value="react-next">
                          React.js/Next.js
                        </SelectItem>
                        <SelectItem value="shopify">Shopify Store</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
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
                      value={field.value}
                      onValueChange={field.onChange}
                      required
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
                        <SelectItem value="15-days">Within 15 days</SelectItem>
                        <SelectItem value="1-month">Within 1 month</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
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
                      value={field.value}
                      onValueChange={field.onChange}
                      required
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="below-5k">Below ₱5,000</SelectItem>
                        <SelectItem value="5k-10k">₱5,000 - ₱10,000</SelectItem>
                        <SelectItem value="10k-20k">
                          ₱10,000 - ₱20,000
                        </SelectItem>
                        <SelectItem value="above-20k">Above ₱20,000</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
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
                    <FormMessage />
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
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? (
                  <span className="animate-pulse">Sending . . .</span>
                ) : (
                  "Get Free Quote"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default FreeQuote;
