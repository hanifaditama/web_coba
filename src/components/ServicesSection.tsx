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
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Layanan Kami</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Solusi lengkap untuk semua kebutuhan MacBook Anda dengan layanan terpercaya
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-medium transition-all duration-300 group">
              <CardHeader>
                <div className={`w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full" 
                  variant="outline"
                  onClick={() => scrollToSection('contact')}
                >
                  Konsultasi Gratis
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-card rounded-2xl p-8 shadow-soft">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <Clock className="h-8 w-8 text-primary mx-auto" />
              <h3 className="font-semibold">Same Day Service</h3>
              <p className="text-sm text-muted-foreground">Proses dalam hari yang sama</p>
            </div>
            <div className="space-y-2">
              <Shield className="h-8 w-8 text-success mx-auto" />
              <h3 className="font-semibold">100% Aman</h3>
              <p className="text-sm text-muted-foreground">Transaksi terjamin aman</p>
            </div>
            <div className="space-y-2">
              <Truck className="h-8 w-8 text-accent mx-auto" />
              <h3 className="font-semibold">Pickup Gratis</h3>
              <p className="text-sm text-muted-foreground">Jemput ke lokasi Anda</p>
            </div>
            <div className="space-y-2">
              <CheckCircle className="h-8 w-8 text-primary mx-auto" />
              <h3 className="font-semibold">Garansi</h3>
              <p className="text-sm text-muted-foreground">Jaminan kualitas produk</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;