
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      value: "contact@webalchemy.dev",
      href: "mailto:contact@webalchemy.dev"
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Office",
      value: "123 Web Developer St, San Francisco, CA",
      href: "https://maps.google.com"
    }
  ];
  
  return (
    <section id="contact" className="py-20 section-contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Reach out to discuss how we can help bring your vision to life.
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
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
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
                  <div className="p-2 bg-muted rounded">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">{item.title}</h4>
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
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Working Hours</h4>
                <p>Monday - Friday: 9am - 6pm</p>
                <p>Saturday - Sunday: Closed</p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardContent className="p-4">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Follow Us</h4>
                <div className="flex gap-4 mt-2">
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
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;