import { Heart, ArrowLeft, BookOpen, Music, Mail, Gift, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Journey = () => {
  return (
    <div className="min-h-screen bg-romantic-gradient-soft">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <Button variant="ghost" asChild className="text-foreground hover:text-romantic-pink">
            <Link to="/">
              <ArrowLeft className="mr-2" size={20} />
              Kembali
            </Link>
          </Button>
          <h1 className="font-serif text-3xl text-center text-foreground">
            Perjalanan Cinta untuk Citra
          </h1>
          <div className="w-20"></div> {/* Spacer */}
        </div>

        {/* Main Navigation Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {/* Timeline */}
            <Link to="/timeline">
              <Card className="p-8 hover:shadow-romantic transition-all duration-300 hover:-translate-y-1 bg-card/90 backdrop-blur cursor-pointer group">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-romantic-gradient rounded-full flex items-center justify-center group-hover:animate-pulse">
                    <BookOpen className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-serif text-2xl font-semibold text-foreground mb-2">
                      26 Kenangan Terindah
                    </h2>
                    <p className="text-muted-foreground text-lg">
                      Setiap momen yang tersimpan dalam hati, setiap detik yang membuat hidup lebih bermakna
                    </p>
                  </div>
                  <Heart className="text-romantic-pink animate-heart-beat" size={24} />
                </div>
              </Card>
            </Link>

            {/* Song */}
            <Link to="/song">
              <Card className="p-8 hover:shadow-romantic transition-all duration-300 hover:-translate-y-1 bg-card/90 backdrop-blur cursor-pointer group">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-romantic-gradient rounded-full flex items-center justify-center group-hover:animate-pulse">
                    <Music className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-serif text-2xl font-semibold text-foreground mb-2">
                      "Hari Bahagiamu, Citra"
                    </h2>
                    <p className="text-muted-foreground text-lg">
                      Sebuah lagu yang diciptakan khusus untukmu, melodi dari hati yang terdalam
                    </p>
                  </div>
                  <Sparkles className="text-romantic-lilac animate-pulse" size={24} />
                </div>
              </Card>
            </Link>

            {/* Secret Letter */}
            <Link to="/letter">
              <Card className="p-8 hover:shadow-romantic transition-all duration-300 hover:-translate-y-1 bg-card/90 backdrop-blur cursor-pointer group">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-romantic-gradient rounded-full flex items-center justify-center group-hover:animate-pulse">
                    <Mail className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-serif text-2xl font-semibold text-foreground mb-2">
                      Surat Digital Rahasia
                    </h2>
                    <p className="text-muted-foreground text-lg">
                      Pesan yang hanya untukmu, tersembunyi dengan kode istimewa "09JULI"
                    </p>
                  </div>
                  <div className="text-romantic-pink">💌</div>
                </div>
              </Card>
            </Link>

            {/* Virtual Gifts */}
            <Link to="/gifts">
              <Card className="p-8 hover:shadow-romantic transition-all duration-300 hover:-translate-y-1 bg-card/90 backdrop-blur cursor-pointer group">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-romantic-gradient rounded-full flex items-center justify-center group-hover:animate-pulse">
                    <Gift className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-serif text-2xl font-semibold text-foreground mb-2">
                      Hadiah Virtual Spesial
                    </h2>
                    <p className="text-muted-foreground text-lg">
                      Kejutan-kejutan manis yang tak dapat dibeli dengan uang
                    </p>
                  </div>
                  <div className="text-romantic-lilac text-2xl animate-gentle-float">🎁</div>
                </div>
              </Card>
            </Link>

            {/* Countdown */}
            <Link to="/countdown">
              <Card className="p-8 hover:shadow-romantic transition-all duration-300 hover:-translate-y-1 bg-card/90 backdrop-blur cursor-pointer group">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-romantic-gradient rounded-full flex items-center justify-center group-hover:animate-pulse">
                    <Calendar className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-serif text-2xl font-semibold text-foreground mb-2">
                      Countdown 9 Juli 2025
                    </h2>
                    <p className="text-muted-foreground text-lg">
                      Menghitung detik menuju ulang tahun yang akan datang
                    </p>
                  </div>
                  <div className="text-romantic-blue text-2xl">⏰</div>
                </div>
              </Card>
            </Link>
          </div>
        </div>

        {/* Bottom message */}
        <div className="text-center mt-16">
          <p className="font-handwriting text-2xl text-muted-foreground">
            Dibuat dengan segenap cinta untuk Citra tersayang 💖
          </p>
        </div>
      </div>
    </div>
  );
};

export default Journey;