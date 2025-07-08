import { useState, useEffect } from "react";
import { Heart, ArrowLeft, Calendar, Clock, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-07-09T00:00:00');
    
    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const motivationalQuotes = [
    "Setiap hari yang berlalu membawa kita lebih dekat dengan kebahagiaan baru",
    "Waktu adalah hadiah, dan setiap detik berharga untuk seseorang istimewa sepertimu",
    "Hari-hari menuju ulang tahunmu dipenuhi dengan doa dan harapan baik",
    "Setiap sunrise adalah pengingat bahwa hari bahagiamu semakin dekat",
    "Countdown ini bukan hanya menghitung waktu, tapi menghitung alasan untuk bersyukur"
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
            Countdown Menuju Hari Bahagia
          </h1>
          <div className="w-20"></div>
        </div>

        {/* Main Countdown */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="p-8 bg-romantic-gradient text-white text-center">
            <Calendar className="mx-auto mb-6 animate-gentle-float" size={64} />
            <h2 className="font-serif text-3xl mb-4">
              Menuju 9 Juli 2025
            </h2>
            <p className="font-handwriting text-xl mb-8 opacity-90">
              Ulang tahun ke-27 Citra Asterina
            </p>
            
            {/* Countdown Display */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/20 rounded-lg p-4 backdrop-blur">
                <div className="text-4xl font-bold font-serif mb-2">
                  {timeLeft.days}
                </div>
                <div className="text-sm uppercase tracking-wide">
                  Hari
                </div>
              </div>
              <div className="bg-white/20 rounded-lg p-4 backdrop-blur">
                <div className="text-4xl font-bold font-serif mb-2">
                  {timeLeft.hours}
                </div>
                <div className="text-sm uppercase tracking-wide">
                  Jam
                </div>
              </div>
              <div className="bg-white/20 rounded-lg p-4 backdrop-blur">
                <div className="text-4xl font-bold font-serif mb-2">
                  {timeLeft.minutes}
                </div>
                <div className="text-sm uppercase tracking-wide">
                  Menit
                </div>
              </div>
              <div className="bg-white/20 rounded-lg p-4 backdrop-blur">
                <div className="text-4xl font-bold font-serif mb-2 animate-pulse">
                  {timeLeft.seconds}
                </div>
                <div className="text-sm uppercase tracking-wide">
                  Detik
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Motivational Section */}
        <div className="max-w-3xl mx-auto mb-12">
          <Card className="p-8 bg-card/90 backdrop-blur">
            <div className="text-center">
              <Sparkles className="mx-auto mb-4 text-romantic-pink" size={48} />
              <h3 className="font-serif text-2xl text-foreground mb-6">
                Pesan Harian
              </h3>
              <p className="font-handwriting text-lg text-muted-foreground leading-relaxed">
                {motivationalQuotes[Math.floor(Date.now() / (1000 * 60 * 60 * 24)) % motivationalQuotes.length]}
              </p>
            </div>
          </Card>
        </div>

        {/* Wishes Timeline */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="font-serif text-2xl text-center text-foreground mb-8">
            Janji-Janji untuk Tahun Baru
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-card/90 backdrop-blur animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-romantic-gradient rounded-full flex items-center justify-center">
                  <Heart className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
                    Lebih Banyak Momen Bahagia
                  </h4>
                  <p className="text-muted-foreground">
                    Tahun depan akan dipenuhi dengan tawa, senyuman, dan kenangan indah yang tak terlupakan.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/90 backdrop-blur animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-romantic-gradient rounded-full flex items-center justify-center">
                  <Star className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
                    Mimpi yang Terwujud
                  </h4>
                  <p className="text-muted-foreground">
                    Semua yang kamu impikan akan mulai terbentuk menjadi kenyataan yang indah.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/90 backdrop-blur animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-romantic-gradient rounded-full flex items-center justify-center">
                  <Clock className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
                    Waktu Berkualitas
                  </h4>
                  <p className="text-muted-foreground">
                    Setiap momen akan dijalani dengan penuh makna dan kehadiran yang tulus.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/90 backdrop-blur animate-fade-in" style={{animationDelay: '0.6s'}}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-romantic-gradient rounded-full flex items-center justify-center">
                  <Sparkles className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
                    Keajaiban Setiap Hari
                  </h4>
                  <p className="text-muted-foreground">
                    Bahkan di hari-hari biasa, akan ada keajaiban kecil yang membuat hidup berwarna.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom Message */}
        <Card className="p-8 bg-romantic-gradient text-white text-center max-w-2xl mx-auto">
          <div className="text-4xl mb-4 animate-gentle-float">🎂</div>
          <h3 className="font-serif text-2xl mb-4">
            Sampai Jumpa di Hari Bahagiamu!
          </h3>
          <p className="font-handwriting text-lg opacity-90">
            Setiap detik yang terhitung adalah doa dan harapan baik yang terpanjat untukmu. 
            Tidak sabar untuk merayakan hari istimewa itu bersamamu!
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Countdown;