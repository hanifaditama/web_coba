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
        </div>

      </div>
    </section>
  );
};

export default ContactSection;