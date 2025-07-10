import { Card } from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";
import { MapIcon, ClockIcon, InstagramIcon, FacebookIcon, YoutubeIcon } from "lucide-react";

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
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Mac Corner
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Platform terpercaya untuk jual beli MacBook di Indonesia. 
              Melayani dengan standar profesional dan kepuasan pelanggan.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <YoutubeIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => navigateToSection('services')} 
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Layanan
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToSection('how-to-sell')} 
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Cara Jual
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToSection('criteria')} 
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Kriteria MacBook
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToSection('reviews')} 
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Review
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToSection('faq')} 
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapIcon className="h-5 w-5 mt-0.5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">
                  Jl. Layar Raya 2A Kelapa Dua, Karawaci Tangerang
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">085-727-800-711/089-880-308-69 </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">maccornerhub@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Jam Operasional</h4>
            <ul className="space-y-2">
              <li className="flex justify-between text-sm sm:text-base">
                <span className="text-gray-400">Senin - Jumat</span>
                <span className="text-white">09:00 - 21:00</span>
              </li>
              <li className="flex justify-between text-sm sm:text-base">
                <span className="text-gray-400">Sabtu</span>
                <span className="text-white">09:00 - 22:00</span>
              </li>
              <li className="flex justify-between text-sm sm:text-base">
                <span className="text-gray-400">Minggu</span>
                <span className="text-white">10:00 - 20:00</span>
              </li>
            </ul>
            <div className="flex items-center space-x-2 mt-3 bg-green-900/20 px-3 py-2 rounded-md">
              <ClockIcon className="h-4 w-4 text-green-400" />
              <span className="text-green-400 text-sm font-medium">24/7 WhatsApp Support</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} MacBook Corner Indonesia. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;