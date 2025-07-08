import { Heart, Sparkles, Music, Gift, Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroBackground from "@/assets/hero-background.jpg";
import { Link } from "react-router-dom";

const Birthday = () => {
  return (
    <div className="min-h-screen bg-romantic-gradient-soft">
      {/* Hero Section */}
      <div 
        className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 240, 250, 0.8), rgba(245, 235, 255, 0.8)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Floating flowers animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-romantic-pink text-2xl animate-gentle-float">🌸</div>
          <div className="absolute top-40 right-16 text-romantic-lilac text-3xl animate-gentle-float" style={{animationDelay: '1s'}}>🌺</div>
          <div className="absolute bottom-32 left-20 text-romantic-blue text-2xl animate-gentle-float" style={{animationDelay: '2s'}}>🌷</div>
          <div className="absolute bottom-20 right-10 text-romantic-pink text-3xl animate-gentle-float" style={{animationDelay: '0.5s'}}>🌹</div>
        </div>

        <div className="z-10 max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 animate-heart-beat">
            Selamat Ulang Tahun,
            <span className="block text-transparent bg-romantic-gradient bg-clip-text mt-2">
              Citra Asterina
            </span>
          </h1>
          
          <div className="flex items-center justify-center gap-2 mb-8">
            <Sparkles className="text-romantic-pink animate-pulse" size={24} />
            <span className="font-handwriting text-2xl text-muted-foreground">26 Tahun Penuh Kebahagiaan</span>
            <Sparkles className="text-romantic-lilac animate-pulse" size={24} />
          </div>

          <blockquote className="font-serif text-xl md:text-2xl text-foreground/80 mb-12 leading-relaxed max-w-3xl mx-auto italic">
            "Hari ini adalah hari istimewa, karena kamu lahir — dan dunia jadi lebih indah sejak saat itu."
          </blockquote>

          <Button 
            asChild
            size="lg"
            className="bg-romantic-gradient hover:shadow-romantic text-white font-serif text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
          >
            <Link to="/journey">
              <Heart className="mr-2 animate-heart-beat" />
              Mulai Perjalanan
            </Link>
          </Button>
        </div>
      </div>

      {/* Navigation Cards Preview */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl text-center text-foreground mb-16">
            Perjalanan Spesial Untukmu
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-romantic-soft transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur">
              <div className="text-center">
                <div className="w-16 h-16 bg-romantic-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-white" size={24} />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">26 Kenangan</h3>
                <p className="text-muted-foreground">Timeline momen-momen indah yang tersimpan di hati</p>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-romantic-soft transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur">
              <div className="text-center">
                <div className="w-16 h-16 bg-romantic-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music className="text-white" size={24} />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Lagu Spesial</h3>
                <p className="text-muted-foreground">"Hari Bahagiamu, Citra" - Sebuah melodi untuk jiwa</p>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-romantic-soft transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur">
              <div className="text-center">
                <div className="w-16 h-16 bg-romantic-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-white" size={24} />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Surat Rahasia</h3>
                <p className="text-muted-foreground">Pesan tersembunyi yang hanya untukmu</p>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-romantic-soft transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur md:col-span-2 lg:col-span-1">
              <div className="text-center">
                <div className="w-16 h-16 bg-romantic-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="text-white" size={24} />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Hadiah Virtual</h3>
                <p className="text-muted-foreground">Kejutan-kejutan manis yang tak terbeli</p>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-romantic-soft transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur md:col-span-2">
              <div className="text-center">
                <div className="w-16 h-16 bg-romantic-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="text-white" size={24} />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Countdown 9 Juli 2025</h3>
                <p className="text-muted-foreground">Menghitung hari menuju kebahagiaan selanjutnya</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Birthday;