import { useState } from "react";
import { Mail, Phone, MapPin, Gamepad2, Rocket, BookOpen, Send, Linkedin, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const interests = [
    { icon: Gamepad2, text: "Playing esports and competitive gaming" },
    { icon: Rocket, text: "Exploring emerging technologies" },
    { icon: BookOpen, text: "Continuous learning and personal development" }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="contact-title">Let's Work Together</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto" data-testid="contact-description">
            I'm always open to discussing new opportunities and interesting projects. Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6" data-testid="contact-info-title">Get In Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4" data-testid="contact-email-info">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <a href="mailto:nikhilchetry942@gmail.com" className="text-foreground hover:text-primary transition-colors">
                        nikhilchetry942@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4" data-testid="contact-phone-info">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Phone</div>
                      <a href="tel:8011213013" className="text-foreground hover:text-primary transition-colors">
                        +91 8011213013
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4" data-testid="contact-location-info">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Location</div>
                      <div className="text-foreground">Navi Mumbai, India</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex space-x-4">
                    <a 
                      href="https://linkedin.com/in/nikhil-chetry" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
                      data-testid="contact-linkedin"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://github.com/Nirchetri" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-foreground text-background rounded-lg flex items-center justify-center hover:bg-foreground/90 transition-colors"
                      data-testid="contact-github"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Interests Card */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4" data-testid="interests-title">Interests</h3>
                <div className="space-y-3 text-muted-foreground">
                  {interests.map((interest, index) => (
                    <div key={index} className="flex items-center space-x-3" data-testid={`interest-${index}`}>
                      <interest.icon className="text-primary h-5 w-5" />
                      <span>{interest.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6" data-testid="contact-form-title">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      data-testid="input-email"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    data-testid="input-subject"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    data-testid="input-message"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={contactMutation.isPending}
                  data-testid="button-send"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
