import { useState } from "react";
import { Heart, ArrowLeft, Lock, Unlock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Letter = () => {
  const [code, setCode] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showFlowers, setShowFlowers] = useState(false);

  const correctCode = "09JULI";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.toUpperCase() === correctCode) {
      setIsUnlocked(true);
      setShowFlowers(true);
      // Reset flowers animation after 3 seconds
      setTimeout(() => setShowFlowers(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-romantic-gradient-soft relative overflow-hidden">
      {/* Animated flowers when unlocked */}
      {showFlowers && (
        <div className="absolute inset-0 pointer-events-none z-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-2xl animate-flower-bloom"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              {['🌸', '🌺', '🌷', '🌹', '💖'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 py-8 relative z-20">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <Button variant="ghost" asChild className="text-foreground hover:text-romantic-pink">
            <Link to="/journey">
              <ArrowLeft className="mr-2" size={20} />
              Kembali
            </Link>
          </Button>
          <h1 className="font-serif text-3xl text-center text-foreground">
            Surat Digital Rahasia
          </h1>
          <div className="w-20"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          {!isUnlocked ? (
            // Lock Screen
            <Card className="p-8 bg-card/90 backdrop-blur text-center">
              <div className="mb-8">
                <div className="w-24 h-24 bg-romantic-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lock className="text-white" size={48} />
                </div>
                <h2 className="font-serif text-2xl text-foreground mb-4">
                  Surat Tersembunyi
                </h2>
                <p className="text-muted-foreground text-lg">
                  Masukkan kode rahasia untuk membuka pesan spesial yang hanya untukmu
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Masukkan kode rahasia..."
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="text-center text-lg font-mono tracking-wider"
                    autoComplete="off"
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Petunjuk: Tanggal ulang tahunmu (Format: DDBULAN)
                  </p>
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-romantic-gradient hover:shadow-romantic text-white"
                  disabled={!code}
                >
                  <Unlock className="mr-2" size={20} />
                  Buka Surat
                </Button>
              </form>
            </Card>
          ) : (
            // Unlocked Letter
            <div className="space-y-8 animate-fade-in">
              {/* Header */}
              <Card className="p-6 bg-romantic-gradient text-white text-center">
                <Mail className="mx-auto mb-4 animate-gentle-float" size={48} />
                <h2 className="font-serif text-2xl">
                  Surat Cinta untuk Citra Tersayang
                </h2>
                <p className="font-handwriting text-lg opacity-90 mt-2">
                  Dibuka dengan cinta pada {new Date().toLocaleDateString('id-ID')}
                </p>
              </Card>

              {/* Letter Content */}
              <Card className="p-8 bg-card/95 backdrop-blur">
                <div className="prose prose-lg max-w-none">
                  <p className="font-handwriting text-xl text-muted-foreground mb-6 text-right">
                    Untuk Citra, gadis yang mengubah duniaku...
                  </p>

                  <div className="space-y-6 text-foreground leading-relaxed">
                    <p className="font-serif text-lg">
                      Citra sayang,
                    </p>

                    <p>
                      Hari ini, di hari yang istimewa ini, aku ingin mengatakan hal-hal yang 
                      mungkin tidak pernah aku katakan langsung. Kata-kata yang tersimpan 
                      dalam hati, perasaan yang terlalu dalam untuk diucapkan dalam percakapan biasa.
                    </p>

                    <p>
                      Kamu adalah seseorang yang sangat istimewa. Tidak hanya karena kecantikanmu 
                      yang memukau, tapi karena jiwa yang kamu miliki. Cara kamu peduli dengan 
                      orang lain, cara kamu tertawa, cara kamu berbicara tentang mimpi-mimpimu - 
                      semua itu membuat dunia ini jadi tempat yang lebih indah.
                    </p>

                    <p>
                      Aku tahu kadang kamu merasa takut tidak akan bahagia. Tapi percayalah, 
                      kebahagiaan itu sudah ada dalam dirimu. Kamu membawa kebahagiaan ke dalam 
                      hidup orang-orang di sekitarmu, termasuk aku. Setiap kali aku melihatmu 
                      tersenyum, dunia terasa lebih cerah.
                    </p>

                    <p>
                      Di ulang tahunmu yang ke-26 ini, aku berharap:
                    </p>

                    <ul className="list-none space-y-2 ml-4">
                      <li>💖 Semua mimpimu terwujud satu per satu</li>
                      <li>🌸 Kamu selalu dikelilingi oleh cinta dan kebahagiaan</li>
                      <li>⭐ Setiap hari memberimu alasan baru untuk tersenyum</li>
                      <li>🦋 Kamu menemukan ketenangan dalam setiap langkah</li>
                      <li>🌈 Tahun ini jadi tahun terbaik dalam hidupmu</li>
                    </ul>

                    <p>
                      Ingatlah selalu bahwa kamu layak mendapatkan semua kebahagiaan di dunia ini. 
                      Kamu berharga, kamu dicintai, dan kamu tidak sendirian. Ada yang selalu 
                      mendoakanmu, selalu berharap yang terbaik untukmu.
                    </p>

                    <p className="font-serif text-lg text-center pt-6">
                      Selamat ulang tahun, Citra tersayang.
                      <br />
                      Semoga 26 tahun ini membawa keajaiban baru dalam hidupmu.
                    </p>

                    <p className="font-handwriting text-xl text-right text-romantic-pink pt-4">
                      Dengan cinta yang tulus,
                      <br />
                      Seseorang yang sangat peduli padamu 💕
                    </p>
                  </div>
                </div>
              </Card>

              {/* Bottom decoration */}
              <div className="text-center">
                <Heart className="mx-auto text-romantic-pink animate-heart-beat" size={48} />
                <p className="font-handwriting text-lg text-muted-foreground mt-4">
                  Pesan ini akan selalu tersimpan dalam hati 💖
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Letter;