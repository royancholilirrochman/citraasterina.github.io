import { useState } from "react";
import { Heart, ArrowLeft, Play, Pause, Music, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Song = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const lyrics = [
    {
      time: "Intro",
      text: "Hari ini... hari bahagiamu, Citra\nSemoga semua mimpimu jadi nyata"
    },
    {
      time: "Verse 1",
      text: "Dua puluh enam tahun sudah berlalu\nKamu tumbuh jadi wanita yang indah\nSetiap langkahmu penuh makna\nSetiap senyummu beri cahaya"
    },
    {
      time: "Chorus",
      text: "Hari bahagiamu, Citra sayang\nSemoga Tuhan beri yang terbaik untukmu\nCinta dan kebahagiaan\nMelimpah di setiap jalan yang kau lalui"
    },
    {
      time: "Verse 2",
      text: "Kadang kau bilang takut tak bahagia\nTapi lihatlah betapa kau bercahaya\nKamu layak mendapat semua keindahan\nDi dunia ini dan selamanya"
    },
    {
      time: "Bridge",
      text: "Jika hari terasa berat\nIngatlah kau tak sendirian\nAda yang selalu mendoakan\nKebahagiaan untukmu, Citra"
    },
    {
      time: "Outro",
      text: "Selamat ulang tahun, gadis manis\nSemoga 26 ini jadi yang terbaik\nAku akan selalu di sini\nMendoakan kebahagiaanmu"
    }
  ];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // In a real app, you would control actual audio playback here
  };

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
            Lagu Spesial
          </h1>
          <div className="w-20"></div>
        </div>

        {/* Song Title */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-5xl font-bold text-transparent bg-romantic-gradient bg-clip-text mb-4">
            "Hari Bahagiamu, Citra"
          </h2>
          <p className="font-handwriting text-xl text-muted-foreground">
            Sebuah lagu yang diciptakan khusus untuk ulang tahunmu
          </p>
        </div>

        {/* Audio Player */}
        <Card className="p-8 bg-romantic-gradient text-white max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-6">
            <Music className="animate-gentle-float" size={32} />
            <div className="flex-1 text-center">
              <h3 className="font-serif text-xl mb-2">Audio Player</h3>
              <p className="opacity-80">Instrumen Piano & Vokal</p>
            </div>
            <Button
              onClick={togglePlay}
              size="lg"
              variant="secondary"
              className="rounded-full w-16 h-16 p-0"
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </Button>
          </div>
          
          {/* Simulated audio bar */}
          <div className="mt-6 bg-white/20 rounded-full h-2 overflow-hidden">
            <div 
              className={`bg-white h-full transition-all duration-1000 ${
                isPlaying ? 'w-1/3' : 'w-0'
              }`}
            ></div>
          </div>
          
          <div className="flex justify-between items-center mt-4">
            <span className="text-sm opacity-80">0:00</span>
            <Volume2 size={20} className="opacity-80" />
            <span className="text-sm opacity-80">3:24</span>
          </div>
        </Card>

        {/* Lyrics */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-serif text-2xl text-center text-foreground mb-8">Lirik Lagu</h3>
          
          <div className="space-y-8">
            {lyrics.map((section, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card/90 backdrop-blur animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 bg-romantic-gradient rounded-full flex items-center justify-center text-white font-serif font-bold text-sm">
                    {section.time}
                  </div>
                  <div className="flex-1">
                    <pre className="font-handwriting text-lg text-foreground leading-relaxed whitespace-pre-wrap">
                      {section.text}
                    </pre>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom message */}
        <div className="text-center mt-16">
          <Card className="p-6 bg-card/80 backdrop-blur max-w-2xl mx-auto">
            <Heart className="mx-auto mb-4 text-romantic-pink animate-heart-beat" size={32} />
            <p className="font-serif text-lg text-foreground leading-relaxed">
              "Musik adalah bahasa universal cinta. Lagu ini adalah caraku mengungkapkan 
              perasaan yang sulit dikatakan dengan kata-kata biasa. Semoga melodi ini 
              selalu mengingatkanmu betapa berartinya kamu."
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Song;