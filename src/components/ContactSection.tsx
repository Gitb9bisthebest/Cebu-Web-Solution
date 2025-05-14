import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import axios from "axios"; // Import axios to handle requests

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send data to Formspree endpoint

      const formspreeID = import.meta.env.VITE_FORMSPREE_CONTACT_US;

      const response = await axios.post(formspreeID, formData);

      if (response.status === 200) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you as soon as possible.",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast({
          title: "Something went wrong!",
          description:
            "There was an error sending your message. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Something went wrong!",
        description:
          "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      value: "charliecocalon.moo@gmail.com",
      href: "mailto:charliecocalon.moo@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Phone",
      value: "+63 (915) 160-0007",
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Office",
      value: "Basak, Lapu-lapu City, Cebu, Philippines",
      href: "https://maps.app.goo.gl/7XosdGQN13cjgmTP6",
    },
  ];

  return (
    <section id="contact" className="py-20 section-contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Reach out to discuss how we can help bring
            your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 border border-border/50">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>

            {contactInfo.map((item, index) => (
              <Card key={index} className="border border-border/50">
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="p-2 bg-muted rounded">{item.icon}</div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">
                      {item.title}
                    </h4>
                    <a
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.value}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="border border-border/50">
              <CardContent className="p-4">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">
                  Working Hours
                </h4>
                <p>Monday - Friday: 9am - 6pm</p>
                <p>Saturday - Sunday: Closed</p>
              </CardContent>
            </Card>

            <Card className="border border-border/50">
              <CardContent className="p-4">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">
                  Follow Us
                </h4>
                <div className="flex gap-4 mt-2">
                  {[
                    {
                      name: "Twitter",
                      icon: <FaTwitter />,
                      link: "https://twitter.com",
                    },
                    {
                      name: "GitHub",
                      icon: <FaFacebook />,
                      link: "https://facebook.com",
                    },
                    {
                      name: "LinkedIn",
                      icon: <FaLinkedin />,
                      link: "https://linkedin.com",
                    },
                    {
                      name: "Instagram",
                      icon: <FaInstagram />,
                      link: "https://instagram.com",
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-colors duration-200 hover:scale-110"
                      aria-label={social.name}
                    >
                      <span className="text-lg transition-colors">
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
