import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-macbook-gray text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              MacBook Pro
            </h3>
            <p className="text-white/80 leading-relaxed">
              Platform terpercaya untuk jual beli MacBook di Indonesia sejak 2016. 
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
              <li><a href="#services" className="text-white/80 hover:text-white transition-colors">Layanan</a></li>
              <li><a href="#how-to-sell" className="text-white/80 hover:text-white transition-colors">Cara Jual</a></li>
              <li><a href="#criteria" className="text-white/80 hover:text-white transition-colors">Kriteria MacBook</a></li>
              <li><a href="#reviews" className="text-white/80 hover:text-white transition-colors">Review</a></li>
              <li><a href="#faq" className="text-white/80 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 text-white/60" />
                <span className="text-white/80 text-sm">
                  Jl. Sudirman No. 123, Jakarta Pusat 10110
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-white/60" />
                <span className="text-white/80">(021) 1234-5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-white/60" />
                <span className="text-white/80">info@macbookpro.id</span>
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
              © {currentYear} MacBook Pro Indonesia. All rights reserved.
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