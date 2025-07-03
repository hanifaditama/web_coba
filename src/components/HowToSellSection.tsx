import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Search, HandHeart, Banknote } from "lucide-react";

const HowToSellSection = () => {
  const steps = [
    {
      icon: MessageCircle,
      number: "01",
      title: "Hubungi Kami",
      description: "Hubungi kami melalui WhatsApp, telepon, atau datang langsung ke toko",
      details: ["Via WhatsApp: 085-727-800-711", "Kunjungi toko kami"]
    },
    {
      icon: Search,
      number: "02",
      title: "Evaluasi MacBook",
      description: "Tim ahli kami akan melakukan pengecekan kondisi MacBook secara menyeluruh",
      details: ["Cek kondisi fisik", "Test performa hardware", "Verifikasi spesifikasi"]
    },
    {
      icon: HandHeart,
      number: "03",
      title: "Negosiasi Harga",
      description: "Kami berikan penawaran harga terbaik berdasarkan kondisi dan spesifikasi",
      details: ["Harga sesuai pasaran", "Transparan tanpa biaya tersembunyi", "Negosiasi fair"]
    },
    {
      icon: Banknote,
      number: "04",
      title: "Pembayaran",
      description: "Setelah deal, langsung terima pembayaran dengan berbagai metode",
      details: ["Cash / Tunai", "Transfer Bank", "E-wallet (Dana, OVO, GoPay)"]
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="how-to-sell" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Cara Jual MacBook</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proses jual MacBook yang mudah dan cepat dalam 4 langkah sederhana
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-medium transition-all duration-300 group">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-lg font-bold px-4 py-2 rounded-bl-2xl">
                {step.number}
              </div>
              
              <CardHeader className="pt-12">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-center">{step.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-center text-muted-foreground">
                  {step.description}
                </p>
                <div className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-6">
          <div className="bg-gradient-card rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Siap Jual MacBook Anda?</h3>
            <p className="text-muted-foreground mb-6">
              Dapatkan penawaran harga terbaik untuk MacBook Anda hari ini juga!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="min-w-[200px]"
              >
                Hubungi Sekarang
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('criteria')}
                className="min-w-[200px]"
              >
                Cek Kriteria MacBook
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToSellSection;