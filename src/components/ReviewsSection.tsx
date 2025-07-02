import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Ahmad Rizki",
      location: "Jakarta Selatan",
      rating: 5,
      comment: "Pelayanan sangat memuaskan! MacBook Pro saya dievaluasi dengan fair dan proses pembayaran sangat cepat. Tim sangat profesional dan transparan dalam penjelasan harga.",
      macbook: "MacBook Pro M1 14-inch",
      date: "2 minggu lalu"
    },
    {
      name: "Sari Indira",
      location: "Bandung",
      rating: 5,
      comment: "Pertama kali jual MacBook di sini dan tidak kecewa! Harga yang ditawarkan lebih tinggi dari tempat lain. Pickup service juga gratis, sangat membantu.",
      macbook: "MacBook Air M2",
      date: "1 bulan lalu"
    },
    {
      name: "Budi Santoso",
      location: "Tangerang",
      rating: 5,
      comment: "Sudah langganan di sini untuk trade-in MacBook. Prosesnya mudah, tim sangat membantu, dan selalu mendapat harga terbaik. Highly recommended!",
      macbook: "MacBook Pro Intel 2019",
      date: "3 minggu lalu"
    },
    {
      name: "Diana Putri",
      location: "Jakarta Utara",
      rating: 5,
      comment: "Service repair MacBook juga top! Laptop yang sempat mati total bisa hidup kembali. Teknisinya sangat ahli dan harga service sangat reasonable.",
      macbook: "MacBook Air 2020",
      date: "1 minggu lalu"
    },
    {
      name: "Eko Prasetyo",
      location: "Depok",
      rating: 5,
      comment: "Terima kasih untuk pelayanan yang luar biasa. Dari konsultasi awal sampai deal final, semuanya sangat profesional. Pasti akan rekomendasikan ke teman-teman.",
      macbook: "MacBook Pro M3",
      date: "4 hari lalu"
    },
    {
      name: "Maya Sari",
      location: "Bekasi",
      rating: 5,
      comment: "Awalnya ragu karena baru pertama kali jual MacBook, tapi tim di sini sangat sabar menjelaskan proses dan kriteria evaluasi. Sangat puas dengan hasilnya!",
      macbook: "MacBook Air M1",
      date: "2 minggu lalu"
    }
  ];

  const stats = [
    { number: "4.9", label: "Rating Rata-rata", sublabel: "dari 5 bintang" },
    { number: "1,500+", label: "Review Positif", sublabel: "dalam 2 tahun terakhir" },
    { number: "98%", label: "Recommend Rate", sublabel: "akan merekomendasikan" },
    { number: "5,000+", label: "Happy Customers", sublabel: "sejak 2016" }
  ];

  return (
    <section id="reviews" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Apa Kata Mereka?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Testimoni nyata dari ribuan pelanggan yang telah mempercayai layanan kami
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-medium transition-shadow">
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
            </Card>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <div className="absolute top-4 right-4 text-primary/20">
                  <Quote className="h-8 w-8" />
                </div>
                
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.location}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "{review.comment}"
                </p>

                <div className="border-t pt-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-primary font-medium">{review.macbook}</span>
                    <span className="text-muted-foreground">{review.date}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-hero text-white max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Bergabunglah dengan Ribuan Pelanggan Puas</h3>
              <p className="text-white/90 mb-6">
                Jadilah bagian dari komunitas pelanggan yang telah merasakan layanan terbaik kami
              </p>
              <div className="flex items-center justify-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-2 text-lg font-semibold">4.9/5</span>
              </div>
              <p className="text-sm text-white/80">
                Berdasarkan 1,500+ review di Google, Facebook, dan platform lainnya
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;