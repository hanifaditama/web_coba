import { Button } from "@/components/ui/button";
import { CheckCircleIcon, StarIcon, ClockIcon } from "lucide-react";
import heroImage from "@/assets/mac-bg.png";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 max-w-xl">
            <div className="space-y-5">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent">
                #1 Platform Jual Beli MacBook
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                Jual Beli MacBook
                <span className="block text-primary">Terpercaya</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-lg">
                Platform terpercaya untuk menjual MacBook Anda dengan harga tertinggi. 
                Proses cepat, aman, dan transparan.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white shadow-sm"
                onClick={() => scrollToSection('how-to-sell')}
              >
                Jual MacBook Saya
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
                onClick={() => scrollToSection('services')}
              >
                Lihat Layanan
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex-shrink-0 mr-3">
                  <div className="bg-primary/10 rounded-full p-2">
                    <CheckCircleIcon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Harga Terbaik</h3>
                  <p className="text-sm text-gray-600">Evaluasi fair</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex-shrink-0 mr-3">
                  <div className="bg-success/10 rounded-full p-2">
                    <ClockIcon className="h-5 w-5 text-success" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Proses Cepat</h3>
                  <p className="text-sm text-gray-600">Same day service</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative mt-10 lg:mt-0">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={heroImage} 
                alt="MacBook Pro" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <div className="text-sm font-semibold text-gray-900">5.0</div>
                <div className="text-xs text-gray-600">1,500+ Review</div>
              </div>
            </div>
            <div className="absolute -z-10 -bottom-8 -left-8 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -top-12 -right-12 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;