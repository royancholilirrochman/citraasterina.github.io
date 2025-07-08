import { useState } from "react";
import { Heart, ArrowLeft, Gift, Sparkles, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Link } from "react-router-dom";

const Gifts = () => {
  const [selectedGift, setSelectedGift] = useState<number | null>(null);

  const gifts = [
    {
      id: 1,
      title: "Bunga Digital Abadi",
      icon: "🌹",
      description: "Sebuah taman bunga virtual yang tidak akan pernah layu",
      message: "Seperti bunga ini yang tidak akan pernah layu, cintaku untukmu akan selalu abadi. Setiap kelopak mewakili doa baik, setiap warna melambangkan harapan indah untuk masa depanmu.",
      color: "romantic-pink"
    },
    {
      id: 2,
      title: "Tiket ke Tempat Impian",
      icon: "✈️",
      description: "Perjalanan ke destinasi yang selalu kamu impikan",
      message: "Ini bukan tiket biasa, tapi janji bahwa suatu hari nanti kita akan bersama-sama menjelajahi tempat-tempat indah di dunia ini. Setiap tempat akan lebih bermakna jika dikunjungi bersamamu.",
      color: "romantic-blue"
    },
    {
      id: 3,
      title: "Voucher Kata Cinta",
      icon: "💌",
      description: "Kata-kata manis yang tak terbatas untuk harimu yang suram",
      message: "Hadiahku bukan barang yang bisa rusak atau hilang, tapi waktu bersamaku yang tak terbeli. Setiap detik bersamamu adalah hadiah terindah yang bisa kupersembahkan.",
      color: "romantic-lilac"
    }
  ];

  return (
    <div className="min-h-screen bg-romantic-gradient-soft">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <Button variant="ghost" asChild className="text-foreground hover:text-romantic-pink">
            <Link to="/journey">
              <ArrowLeft className="mr-2" size={20} />
              Kembali
            </Link>
          </Button>
          <h1 className="font-serif text-3xl text-center text-foreground">
            Hadiah Virtual Spesial
          </h1>
          <div className="w-20"></div>
        </div>

        {/* Intro */}
        <div className="text-center mb-12">
          <Card className="p-6 bg-romantic-gradient text-white max-w-2xl mx-auto">
            <Gift className="mx-auto mb-4 animate-gentle-float" size={48} />
            <h2 className="font-serif text-2xl mb-4">Kejutan Manis Untukmu</h2>
            <p className="font-handwriting text-lg opacity-90">
              Hadiah terbaik bukanlah yang paling mahal, tapi yang paling bermakna. 
              Pilih satu hadiah virtual yang paling menyentuh hatimu.
            </p>
          </Card>
        </div>

        {/* Gifts Grid */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 mb-12">
          {gifts.map((gift, index) => (
            <Dialog key={gift.id}>
              <DialogTrigger asChild>
                <Card className="p-6 cursor-pointer hover:shadow-romantic transition-all duration-300 hover:-translate-y-2 bg-card/90 backdrop-blur group animate-fade-in"
                      style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="text-center">
                    <div className="text-6xl mb-4 group-hover:animate-pulse">
                      {gift.icon}
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                      {gift.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {gift.description}
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full border-romantic-pink text-romantic-pink hover:bg-romantic-pink hover:text-white"
                    >
                      <Sparkles className="mr-2" size={16} />
                      Buka Hadiah
                    </Button>
                  </div>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-2xl bg-card/95 backdrop-blur">
                <DialogHeader>
                  <DialogTitle className="font-serif text-2xl text-center flex items-center justify-center gap-3">
                    <span className="text-3xl">{gift.icon}</span>
                    {gift.title}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-romantic-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                      <Gift className="text-white" size={36} />
                    </div>
                    <h4 className="font-serif text-xl text-foreground mb-4">
                      Pesan Khusus Untukmu
                    </h4>
                  </div>
                  
                  <Card className="p-6 bg-romantic-gradient text-white">
                    <p className="font-handwriting text-lg leading-relaxed text-center">
                      {gift.message}
                    </p>
                  </Card>
                  
                  <div className="text-center mt-6">
                    <Heart className="mx-auto text-romantic-pink animate-heart-beat" size={32} />
                    <p className="font-serif text-sm text-muted-foreground mt-2">
                      Dibuat dengan segenap cinta untuk Citra
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Special Message */}
        <Card className="p-8 bg-card/90 backdrop-blur max-w-3xl mx-auto">
          <div className="text-center">
            <MessageCircle className="mx-auto mb-4 text-romantic-lilac" size={48} />
            <h3 className="font-serif text-2xl text-foreground mb-4">
              Hadiah Terbesar
            </h3>
            <p className="font-handwriting text-lg text-muted-foreground leading-relaxed">
              "Hadiah terbesar yang bisa kuberikan bukanlah sesuatu yang bisa dibungkus 
              dengan pita. Hadiah terbesar adalah janji bahwa aku akan selalu ada untukmu, 
              mendukung mimpi-mimpimu, dan merayakan setiap kebahagiaan dalam hidupmu. 
              Kehadiranku mungkin sederhana, tapi cintaku untukmu tak terbatas."
            </p>
          </div>
        </Card>

        {/* Bottom decoration */}
        <div className="text-center mt-12">
          <div className="flex justify-center gap-4 text-4xl animate-gentle-float">
            <span style={{animationDelay: '0s'}}>🎁</span>
            <span style={{animationDelay: '0.5s'}}>💝</span>
            <span style={{animationDelay: '1s'}}>🎀</span>
          </div>
          <p className="font-handwriting text-lg text-muted-foreground mt-4">
            Setiap hadiah dipilih dengan cinta untuk Citra tersayang
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gifts;