import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FAQSection = () => {
  const faqData = [
    {
      question: "Berapa lama proses evaluasi MacBook?",
      answer: "Proses evaluasi kami biasanya memakan waktu 15-30 menit tergantung kondisi MacBook. Tim teknisi akan melakukan pengecekan menyeluruh terhadap kondisi fisik, performa hardware, dan software. Anda bisa menunggu selama proses evaluasi berlangsung."
    },
    {
      question: "Apakah harga yang ditawarkan bisa dinegosiasi?",
      answer: "Tentu saja! Kami memberikan harga berdasarkan evaluasi fair, namun masih bisa dinegosiasi dalam batas wajar. Harga final akan bergantung pada kondisi MacBook, kelengkapan, dan kondisi pasar saat itu."
    },
    {
      question: "Bagaimana cara mengetahui harga MacBook saya?",
      answer: "Anda bisa menghubungi kami melalui WhatsApp dengan menyebutkan model MacBook, tahun, spesifikasi, dan kondisi umum. Tim kami akan memberikan harga awal. Untuk harga pasti, diperlukan evaluasi langsung."
    },
    {
      question: "Apakah MacBook tanpa charger masih bisa dijual?",
      answer: "Ya, MacBook tanpa charger tetap bisa kami terima. Namun, keberadaan charger original akan menambah nilai jual MacBook Anda. Jika tidak ada charger, harga akan disesuaikan."
    },
    {
      question: "Bagaimana jika MacBook saya masih dalam cicilan?",
      answer: "MacBook yang masih dalam cicilan tidak bisa kami terima kecuali cicilan sudah lunas dan Anda memiliki bukti pelunasan. Hal ini untuk menghindari masalah hukum di kemudian hari."
    },
    {
      question: "Apakah ada garansi untuk MacBook yang dibeli?",
      answer: "Ya, untuk MacBook yang kami jual, kami berikan garansi toko selama 1-3 bulan tergantung kondisi dan usia MacBook. Garansi mencakup hardware dan tidak termasuk kerusakan akibat pemakaian yang salah."
    },
    {
      question: "Bagaimana sistem pembayaran yang tersedia?",
      answer: "Kami menyediakan berbagai metode pembayaran: Cash/tunai, transfer bank (BCA, Mandiri, BRI, BNI), dan e-wallet (Dana, OVO, GoPay, ShopeePay). Pembayaran dilakukan setelah kesepakatan harga."
    },
    {
      question: "Apakah ada biaya tambahan untuk pickup service?",
      answer: "Pickup service gratis untuk area dalam radius 25km dari toko kami. Untuk area di luar radius tersebut, akan dikenakan biaya transportasi yang akan dikonfirmasi sebelumnya."
    },
    {
      question: "Bagaimana cara mempersiapkan MacBook sebelum dijual?",
      answer: "Pastikan data sudah di-backup dan dihapus, logout dari semua akun (iCloud, iTunes, App Store), lakukan factory reset, bersihkan MacBook dari debu dan kotoran, dan siapkan kelengkapan jika ada."
    },
    {
      question: "Apakah MacBook dengan layar bergaris masih bisa dijual?",
      answer: "Tergantung tingkat kerusakan layar. Jika hanya bergaris ringan dan masih bisa digunakan, kami masih bisa terima dengan penyesuaian harga. Namun jika layar retak parah atau tidak berfungsi, biasanya tidak kami terima."
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pertanyaan yang sering diajukan seputar jual beli MacBook
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="text-center">Punya Pertanyaan?</CardTitle>
              <p className="text-center text-muted-foreground">
                Temukan jawaban untuk pertanyaan umum di bawah ini
              </p>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <Card className="bg-gradient-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Masih Ada Pertanyaan?</h3>
                <p className="text-muted-foreground mb-6">
                  Tim customer service kami siap membantu Anda 24/7
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://wa.me/6281234567890" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    WhatsApp: 0812-3456-7890
                  </a>
                  <a 
                    href="tel:02112345678"
                    className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
                  >
                    Telepon: (021) 1234-5678
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;