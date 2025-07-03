import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Star, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/mac-bg.png";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-background/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Jual Beli MacBook
                <span className="block text-accent">Terpercaya #1</span>
              </h1>
              <p className="text-xl text-white/90 max-w-lg">
                Platform terpercaya untuk menjual MacBook Anda dengan harga tertinggi. 
                Proses cepat, aman, dan transparan.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => scrollToSection('how-to-sell')}
              >
                Jual MacBook Saya
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => scrollToSection('services')}
              >
                Lihat Layanan
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-8">
              <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="bg-accent rounded-full p-2">
                    <CheckCircle className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Harga Terbaik</h3>
                    <p className="text-sm text-white/80">Evaluasi fair</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="bg-success rounded-full p-2">
                    <Clock className="h-5 w-5 text-success-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Proses Cepat</h3>
                    <p className="text-sm text-white/80">Same day service</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="MacBook Pro" 
                className="w-full h-auto rounded-2xl shadow-large"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-full p-6 shadow-medium">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <div className="text-sm font-semibold">5.0</div>
                <div className="text-xs">1,500+ Review</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;