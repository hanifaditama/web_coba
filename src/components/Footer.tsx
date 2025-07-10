import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Function to handle navigation to sections
  const navigateToSection = (id: string) => {
    // Check if we're on the index page
    const isIndexPage = window.location.pathname === "/";
    
    if (isIndexPage) {
      // If we're on the index page, scroll to the section
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to the index page with the section hash
      window.location.href = `/#${id}`;
    }
  };

  return (
    <footer className="bg-macbook-gray text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Mac Corner
            </h3>
            <p className="text-white/80 leading-relaxed">
              Platform terpercaya untuk jual beli MacBook di Indonesia. 
              Melayani dengan standar profesional dan kepuasan pelanggan.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => navigateToSection('services')} 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Layanan
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToSection('how-to-sell')} 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Cara Jual
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToSection('criteria')} 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Kriteria MacBook
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToSection('reviews')} 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Review
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToSection('faq')} 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 text-white/60" />
                <span className="text-white/80 text-sm">
                  Jl. Layar Raya 2A Kelapa Dua, Karawaci Tangerang
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-white/60" />
                <span className="text-white/80">085-727-800-711/089-880-308-69 </span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-white/60" />
                <span className="text-white/80">maccornerhub@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Jam Operasional</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span className="text-white/80">Senin - Jumat</span>
                <span className="text-white">09:00 - 21:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/80">Sabtu</span>
                <span className="text-white">09:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/80">Minggu</span>
                <span className="text-white">10:00 - 20:00</span>
              </li>
            </ul>
            <div className="flex items-center space-x-2 mt-3">
              <Clock className="h-4 w-4 text-green-400" />
              <span className="text-green-400 text-sm font-medium">24/7 WhatsApp Support</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {currentYear} MacBook Corner Indonesia. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;