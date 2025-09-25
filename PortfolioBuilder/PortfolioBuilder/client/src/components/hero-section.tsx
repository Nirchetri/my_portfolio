import { Mail, Phone, MapPin, ArrowDown, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center gradient-bg relative overflow-hidden" data-testid="hero-section">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-float-slow"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in" data-testid="hero-title">
            NIKHIL CHETRY
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-8 animate-slide-up max-w-4xl mx-auto" data-testid="hero-subtitle">
            Software Engineer creating smooth, user-friendly web experiences with the MERN stack — combining clean code with creative thinking.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-slide-up">
            <a 
              href="mailto:nikhilchetry942@gmail.com" 
              className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors"
              data-testid="contact-email"
            >
              <Mail className="h-5 w-5" />
              <span className="hidden sm:inline">nikhilchetry942@gmail.com</span>
            </a>
            <a 
              href="tel:8011213013" 
              className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors"
              data-testid="contact-phone"
            >
              <Phone className="h-5 w-5" />
              <span>8011213013</span>
            </a>
            <div className="flex items-center space-x-2 text-white/90" data-testid="contact-location">
              <MapPin className="h-5 w-5" />
              <span>Navi Mumbai</span>
            </div>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://linkedin.com/in/nikhil-chetry" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              data-testid="social-linkedin"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/Nirchetri" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              data-testid="social-github"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>

          <Button
            onClick={scrollToAbout}
            className="bg-white text-primary hover:bg-white/90 transition-colors animate-slide-up"
            size="lg"
            data-testid="view-work-button"
          >
            View My Work
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
