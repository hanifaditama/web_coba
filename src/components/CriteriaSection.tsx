import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react";

const CriteriaSection = () => {
  const acceptedCriteria = [
    {
      category: "Kondisi Fisik",
      items: [
        "Body dalam kondisi baik (goresan ringan masih OK)",
        "Layar berfungsi normal tanpa dead pixel",
        "Keyboard dan trackpad responsif",
        "Port USB, Thunderbolt berfungsi normal",
        "Hinge laptop masih kuat"
      ]
    },
    {
      category: "Performa Hardware",
      items: [
        "MacOS dapat berjalan dengan lancar",
        "Battery health minimal 70%",
        "RAM dan storage berfungsi normal",
        "Webcam dan speaker berfungsi",
        "WiFi dan Bluetooth berfungsi"
      ]
    },
    {
      category: "Kelengkapan",
      items: [
        "Unit MacBook (tanpa charger masih bisa)",
        "Charger original (nilai plus)",
        "Box dan dokumentasi (nilai plus)",
        "Akun iCloud sudah di-logout",
        "Data sudah di-backup dan dihapus"
      ]
    }
  ];

  const notAcceptedCriteria = [
    "MacBook dengan layar pecah/retak parah",
    "Tidak bisa booting atau mati total",
    "Liquid damage (terkena air/cairan)",
    "Body bengkok atau rusak parah",
    "MacBook hasil curian (tanpa dokumen)",
    "iCloud locked yang tidak bisa dibuka",
    "Battery kembung/bengkak",
    "Motherboard rusak atau short",
    "Model di bawah tahun 2015 (case by case)"
  ];

  const macbookModels = [
    { name: "MacBook Air M1/M2/M3", price: "Rp 12-25 juta", condition: "Sangat diminati" },
    { name: "MacBook Pro M1/M2/M3", price: "Rp 15-35 juta", condition: "Sangat diminati" },
    { name: "MacBook Pro Intel 2019-2021", price: "Rp 8-20 juta", condition: "Diminati" },
    { name: "MacBook Air Intel 2018-2020", price: "Rp 6-15 juta", condition: "Diminati" },
    { name: "MacBook Pro 2016-2018", price: "Rp 5-12 juta", condition: "Kondisional" },
    { name: "MacBook 2015-2017", price: "Rp 3-8 juta", condition: "Case by case" }
  ];

  return (
    <section id="criteria" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Kriteria MacBook</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ketahui kriteria MacBook yang kami terima dan estimasi harga pasar
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* MacBook yang Diterima */}
          <Card className="shadow-soft">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="bg-success rounded-full p-2">
                  <CheckCircle className="h-6 w-6 text-success-foreground" />
                </div>
                <CardTitle className="text-success">MacBook yang Kami Terima</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {acceptedCriteria.map((criteria, index) => (
                <div key={index}>
                  <h4 className="font-semibold mb-3 text-foreground">{criteria.category}</h4>
                  <ul className="space-y-2">
                    {criteria.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* MacBook yang Tidak Diterima */}
          <Card className="shadow-soft">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="bg-destructive rounded-full p-2">
                  <XCircle className="h-6 w-6 text-destructive-foreground" />
                </div>
                <CardTitle className="text-destructive">MacBook yang Tidak Kami Terima</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {notAcceptedCriteria.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <XCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-amber-800 dark:text-amber-200">Catatan Penting</h5>
                    <p className="text-sm text-amber-700 dark:text-amber-300 mt-1">
                      Untuk kondisi khusus atau keraguan, silakan konsultasi dengan tim kami terlebih dahulu
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Estimasi Harga */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="text-center">Estimasi Harga MacBook</CardTitle>
            <p className="text-center text-muted-foreground">
              *Harga dapat berubah tergantung kondisi, spesifikasi, dan kondisi pasar
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {macbookModels.map((model, index) => (
                <div key={index} className="p-4 border rounded-lg hover:shadow-soft transition-shadow">
                  <h4 className="font-semibold mb-2">{model.name}</h4>
                  <p className="text-primary font-bold text-lg mb-2">{model.price}</p>
                  <Badge 
                    variant={
                      model.condition === "Sangat diminati" ? "default" :
                      model.condition === "Diminati" ? "secondary" :
                      "outline"
                    }
                    className="text-xs"
                  >
                    {model.condition}
                  </Badge>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Ingin mengetahui harga pasti MacBook Anda? Hubungi kami untuk evaluasi gratis!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CriteriaSection;