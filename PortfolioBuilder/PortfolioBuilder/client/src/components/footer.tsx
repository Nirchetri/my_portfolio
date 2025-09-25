import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-8 bg-card border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-muted-foreground mb-4 md:mb-0" data-testid="footer-copyright">
            © 2024 Nikhil Chetry. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Button
              variant="ghost"
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-primary"
              data-testid="back-to-top"
            >
              <ArrowUp className="mr-2 h-4 w-4" />
              Back to Top
            </Button>
            <div className="w-1 h-4 bg-border"></div>
            <span className="text-muted-foreground text-sm" data-testid="footer-tech">
              Built with ❤️ using React & Tailwind
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
