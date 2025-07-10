import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    // Check if we're on the index page
    const isIndexPage = window.location.pathname === "/";
    
    if (isIndexPage) {
      // If we're on the index page, scroll to the section
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    } else {
      // If we're on another page, navigate to the index page with the section hash
      window.location.href = `/#${id}`;
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center space-x-3">
            <a href="/" className="cursor-pointer">
              <h1 className="text-xl sm:text-2xl font-bold text-primary">
                Mac Corner
              </h1>
            </a>
            <span className="text-sm text-gray-600 hidden sm:block">
              Jual Beli MacBook Terpercaya
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-6">
            <button 
              onClick={() => scrollToSection('services')}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Layanan
            </button>
            <button 
              onClick={() => scrollToSection('how-to-sell')}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Cara Jual
            </button>
            <button 
              onClick={() => scrollToSection('criteria')}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Kriteria
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Review
            </button>
            <button 
              onClick={() => scrollToSection('blog-section')}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Article
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contact-section')}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Kontak
            </button>
          </nav>

          <div className="hidden md:flex items-center">
            <Button 
              onClick={() => scrollToSection('contact-section')} 
              className="bg-primary hover:bg-primary/90 text-white shadow-sm"
            >
              Jual Sekarang
            </Button>
          </div>

          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t py-3 px-2 shadow-lg absolute left-0 right-0 animate-accordion-down">
            <nav className="flex flex-col space-y-1">
              <button 
                onClick={() => scrollToSection('services')}
                className="px-4 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
              >
                Layanan
              </button>
              <button 
                onClick={() => scrollToSection('how-to-sell')}
                className="px-4 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
              >
                Cara Jual
              </button>
              <button 
                onClick={() => scrollToSection('criteria')}
                className="px-4 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
              >
                Kriteria
              </button>
              <button 
                onClick={() => scrollToSection('reviews')}
                className="px-4 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
              >
                Review
              </button>
              <button 
                onClick={() => scrollToSection('blog-section')}
                className="px-4 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
              >
                Article
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="px-4 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('contact-section')}
                className="px-4 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
              >
                Kontak
              </button>
              <div className="pt-2 pb-1">
                <Button 
                  onClick={() => scrollToSection('contact-section')} 
                  className="w-full bg-primary hover:bg-primary/90 text-white shadow-sm"
                >
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