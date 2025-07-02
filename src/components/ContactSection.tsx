import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CreditCard, 
  MessageCircle,
  Instagram,
  Facebook,
  Youtube
} from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat Toko",
      content: "Jl. Sudirman No. 123, Jakarta Pusat 10110",
      description: "Lantai 2, Gedung Cyber Center (Sebelah Starbucks)"
    },
    {
      icon: Phone,
      title: "Telepon",
      content: "(021) 1234-5678",
      description: "Customer Service 24/7"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "0812-3456-7890",
      description: "Fast Response"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@macbookpro.id",
      description: "Untuk inquiry dan partnership"
    }
  ];

  const operatingHours = [
    { day: "Senin - Jumat", hours: "09:00 - 21:00 WIB" },
    { day: "Sabtu", hours: "09:00 - 22:00 WIB" },
    { day: "Minggu", hours: "10:00 - 20:00 WIB" },
    { day: "Hari Libur Nasional", hours: "10:00 - 18:00 WIB" }
  ];

  const paymentMethods = [
    { name: "Cash/Tunai", available: true },
    { name: "Transfer Bank", available: true },
    { name: "BCA", available: true },
    { name: "Mandiri", available: true },
    { name: "BRI", available: true },
    { name: "BNI", available: true },
    { name: "Dana", available: true },
    { name: "OVO", available: true },
    { name: "GoPay", available: true },
    { name: "ShopeePay", available: true }
  ];

  const socialMedia = [
    { name: "Instagram", handle: "@macbookpro.id", icon: Instagram, color: "text-pink-600" },
    { name: "Facebook", handle: "MacBook Pro Indonesia", icon: Facebook, color: "text-blue-600" },
    { name: "YouTube", handle: "MacBook Pro Channel", icon: Youtube, color: "text-red-600" }
  ];

  const marketplaces = [
    { name: "Tokopedia", store: "MacBook Pro Official", rating: "4.9" },
    { name: "Shopee", store: "MacBook Pro Store", rating: "4.8" },
    { name: "Bukalapak", store: "MacBook Pro Center", rating: "4.9" },
    { name: "Blibli", store: "MacBook Pro Indonesia", rating: "4.8" }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Hubungi Kami</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Siap melayani Anda dengan berbagai cara komunikasi yang mudah dan nyaman
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center hover:shadow-medium transition-all duration-300 group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-primary mb-2">{info.content}</p>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Operating Hours */}
          <Card className="shadow-soft">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Clock className="h-6 w-6 text-primary" />
                <CardTitle>Jam Operasional</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {operatingHours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
                  <span className="font-medium">{schedule.day}</span>
                  <Badge variant="outline">{schedule.hours}</Badge>
                </div>
              ))}
              <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                <p className="text-sm text-center">
                  <span className="font-semibold text-primary">24/7 WhatsApp Support</span> - 
                  Respon cepat di luar jam operasional
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <Card className="shadow-soft">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <CreditCard className="h-6 w-6 text-primary" />
                <CardTitle>Metode Pembayaran</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {paymentMethods.map((method, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-sm">{method.name}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-success/10 rounded-lg">
                <p className="text-sm text-center text-success-foreground">
                  Semua metode pembayaran aman dan terpercaya
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Social Media */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Media Sosial</CardTitle>
              <p className="text-muted-foreground">Follow untuk update terbaru dan promo menarik</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {socialMedia.map((social, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:shadow-soft transition-shadow">
                  <div className="flex items-center space-x-3">
                    <social.icon className={`h-6 w-6 ${social.color}`} />
                    <div>
                      <p className="font-medium">{social.name}</p>
                      <p className="text-sm text-muted-foreground">{social.handle}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Follow
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Marketplace */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Marketplace</CardTitle>
              <p className="text-muted-foreground">Temukan kami juga di platform e-commerce</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {marketplaces.map((marketplace, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:shadow-soft transition-shadow">
                  <div>
                    <p className="font-medium">{marketplace.name}</p>
                    <p className="text-sm text-muted-foreground">{marketplace.store}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline">★ {marketplace.rating}</Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-hero text-white shadow-large">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Siap untuk Menjual MacBook Anda?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Dapatkan evaluasi gratis dan penawaran harga terbaik untuk MacBook Anda. 
              Tim profesional kami siap membantu Anda!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20jual%20MacBook" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Sekarang
              </a>
              <a 
                href="tel:02112345678"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Telepon Langsung
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;