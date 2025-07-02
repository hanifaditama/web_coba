import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Star, Clock, Users, CheckCircle, Banknote } from "lucide-react";
import handshakeImage from "@/assets/handshake-deal.jpg";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: Shield,
      title: "100% Terpercaya",
      description: "Dengan pengalaman 8+ tahun di industri teknologi, kami telah melayani ribuan pelanggan dengan kepuasan tinggi.",
      stats: "8+ tahun pengalaman"
    },
    {
      icon: Banknote,
      title: "Harga Terbaik",
      description: "Kami memberikan harga yang kompetitif berdasarkan evaluasi fair dan kondisi pasar terkini.",
      stats: "95% pelanggan puas dengan harga"
    },
    {
      icon: Clock,
      title: "Proses Cepat",
      description: "Dari evaluasi hingga pembayaran bisa selesai dalam hari yang sama. Tidak perlu menunggu lama.",
      stats: "Same day service"
    },
    {
      icon: Users,
      title: "Tim Profesional",
      description: "Teknisi bersertifikat Apple dan tim customer service yang siap membantu Anda 24/7.",
      stats: "Tim bersertifikat"
    },
    {
      icon: Star,
      title: "Rating Tinggi",
      description: "Kepuasan pelanggan adalah prioritas utama kami dengan rating konsisten 4.9/5 bintang.",
      stats: "4.9/5 rating"
    },
    {
      icon: CheckCircle,
      title: "Garansi Aman",
      description: "Transaksi dijamin aman dengan sistem pembayaran terpercaya dan dokumentasi lengkap.",
      stats: "100% aman"
    }
  ];

  const advantages = [
    {
      title: "Pickup Service Gratis",
      description: "Kami akan jemput MacBook Anda ke lokasi dalam radius 25km dari toko"
    },
    {
      title: "Evaluasi Transparan",
      description: "Proses pengecekan dilakukan di depan Anda dengan penjelasan detail"
    },
    {
      title: "Multiple Payment Options",
      description: "Cash, transfer bank, e-wallet - pilih sesuai kenyamanan Anda"
    },
    {
      title: "Trade-in Program",
      description: "Tukar tambah dengan MacBook terbaru dengan proses yang mudah"
    },
    {
      title: "After Sales Support",
      description: "Konsultasi gratis bahkan setelah transaksi selesai"
    },
    {
      title: "Legal & Licensed",
      description: "Toko resmi dengan ijin lengkap dan sistem perpajakan yang benar"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Mengapa Pilih Kami?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Alasan mengapa ribuan orang mempercayai kami untuk jual beli MacBook
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={handshakeImage} 
              alt="Handshake Deal" 
              className="w-full h-auto rounded-2xl shadow-large"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Komitmen Kami untuk Kepuasan Anda</h3>
            <p className="text-muted-foreground">
              Sejak 2016, kami telah menjadi pilihan utama untuk jual beli MacBook di Indonesia. 
              Dengan pendekatan yang customer-centric, kami memastikan setiap transaksi memberikan 
              value terbaik untuk kedua belah pihak.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gradient-card rounded-lg">
                <div className="text-2xl font-bold text-primary">5,000+</div>
                <div className="text-sm text-muted-foreground">MacBook Traded</div>
              </div>
              <div className="text-center p-4 bg-gradient-card rounded-lg">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reasons.map((reason, index) => (
            <Card key={index} className="text-center hover:shadow-medium transition-all duration-300 group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle>{reason.title}</CardTitle>
                <div className="text-sm text-primary font-semibold">{reason.stats}</div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-card shadow-medium">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Keunggulan Layanan Kami</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-primary rounded-full p-1 mt-1">
                    <CheckCircle className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{advantage.title}</h4>
                    <p className="text-sm text-muted-foreground">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;