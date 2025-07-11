import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Wrench, Shield, Truck, Clock, CheckCircle } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: "Jual Beli MacBook",
      description: "Jual MacBook bekas Anda atau beli MacBook berkualitas dengan harga terbaik",
      features: ["Evaluasi harga fair", "Proses cepat", "Garansi kualitas"],
      color: "text-primary"
    },
    {
      icon: Wrench,
      title: "Service & Repair",
      description: "Layanan perbaikan MacBook profesional dengan teknisi berpengalaman",
      features: ["Diagnosis gratis", "Spare part original", "Garansi service"],
      color: "text-success"
    },
    {
      icon: Shield,
      title: "Trade In Program",
      description: "Tukar tambah MacBook lama Anda dengan model terbaru",
      features: ["Cashback maksimal", "Proses mudah", "Tanpa ribet"],
      color: "text-accent"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-2">
            Layanan Lengkap
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Layanan Kami
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Solusi lengkap untuk semua kebutuhan MacBook Anda dengan layanan terpercaya
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-full bg-${service.color.split('-')[1]}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`h-6 w-6 ${service.color}`} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full bg-white hover:bg-gray-50 text-primary border border-primary/20 hover:border-primary/40" 
                  variant="outline"
                  onClick={() => scrollToSection('contact-section')}
                >
                  Konsultasi Gratis
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-xl p-6 sm:p-8 lg:p-10 shadow-sm border border-gray-100">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            <div className="space-y-3 text-center">
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900">Same Day Service</h3>
              <p className="text-sm text-gray-600">Proses dalam hari yang sama</p>
            </div>
            <div className="space-y-3 text-center">
              <div className="bg-success/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-7 w-7 text-success" />
              </div>
              <h3 className="font-semibold text-gray-900">100% Aman</h3>
              <p className="text-sm text-gray-600">Transaksi terjamin aman</p>
            </div>
            <div className="space-y-3 text-center">
              <div className="bg-accent/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto">
                <Truck className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-semibold text-gray-900">Pickup Gratis</h3>
              <p className="text-sm text-gray-600">Jemput ke lokasi Anda</p>
            </div>
            <div className="space-y-3 text-center">
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900">Garansi</h3>
              <p className="text-sm text-gray-600">Jaminan kualitas produk</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;