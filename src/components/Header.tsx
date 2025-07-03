import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Mac Corner
            </h1>
            <span className="text-sm text-muted-foreground hidden sm:block">
              Jual Beli MacBook Terpercaya
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Layanan
            </button>
            <button 
              onClick={() => scrollToSection('how-to-sell')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Cara Jual
            </button>
            <button 
              onClick={() => scrollToSection('criteria')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Kriteria
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Review
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-foreground hover:text-primary transition-colors"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contact-section')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Kontak
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            </div>
            <Button onClick={() => scrollToSection('contact')} variant="default">
              Jual Sekarang
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-background border-t py-4">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Layanan
              </button>
              <button 
                onClick={() => scrollToSection('how-to-sell')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Cara Jual
              </button>
              <button 
                onClick={() => scrollToSection('criteria')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Kriteria
              </button>
              <button 
                onClick={() => scrollToSection('reviews')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Review
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Kontak
              </button>
              <div className="pt-4 border-t">
                <Button onClick={() => scrollToSection('contact-section')} variant="default">
                  Jual Sekarang
                </Button>


              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;