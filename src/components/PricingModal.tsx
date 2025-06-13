import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type PlanInquiryModalProps = {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: string;
};

export const PlanInquiryModal: React.FC<PlanInquiryModalProps> = ({
  isOpen,
  onClose,
  selectedPlan,
}) => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: selectedPlan || "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const endpoint = import.meta.env.VITE_FORMSPREE_PRICING;

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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you soon.",
        });
        form.reset();
        onClose();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md transition-all duration-300 ease-out data-[state=open]:animate-fadeIn">
        <DialogHeader>
          <DialogTitle>Send Inquiry</DialogTitle>
          <DialogDescription>
            Let us know you're interested in the <strong>{selectedPlan}</strong>
            .
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input className="rounded-full" {...field} />
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" className="rounded-full" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input className="rounded-full" readOnly {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea className="rounded-2xl" rows={4} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full rounded-full">
              {form.formState.isSubmitting ? "Sending..." : "Send Inquiry"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
