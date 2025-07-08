import { useState } from "react";
import { Heart, ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Timeline = () => {
  const [expandedMemory, setExpandedMemory] = useState<number | null>(null);

  const memories = [
    {
      title: "Hari Pertama Mengenalmu",
      date: "Awal Cerita Kita",
      content: "Saat mata ini pertama kali melihatmu, dunia terasa berubah. Ada sesuatu yang berbeda, sesuatu yang istimewa. Kamu bukan hanya seseorang yang lewat begitu saja, kamu adalah permulaan dari cerita yang indah.",
      emoji: "✨",
      color: "romantic-pink"
    },
    {
      title: "Saat Aku Mulai Menyukaimu",
      date: "Ketika Hati Mulai Berbicara",
      content: "Tanpa sadar, tanpa rencana, hatiku mulai mengucapkan namamu dalam setiap doa. Kamu bukan lagi teman biasa, kamu sudah menjadi seseorang yang istimewa yang ingin kukenal lebih dalam.",
      emoji: "💕",
      color: "romantic-lilac"
    },
    {
      title: "Percakapan Pertama Yang Bermakna",
      date: "Saat Jiwa Mulai Terhubung",
      content: "Aku ingat bagaimana kita berbicara sampai larut malam, tentang mimpi, tentang takut, tentang harapan. Saat itu aku tahu, kamu bukan hanya cantik di luar, tapi juga memiliki jiwa yang indah.",
      emoji: "🌙",
      color: "romantic-blue"
    },
    {
      title: "Saat Kamu Bilang Kamu Takut Tak Bahagia",
      date: "Ketika Aku Ingin Melindungimu",
      content: "Kata-katamu itu menusuk hatiku. Aku ingin memelukmu, memberitahumu bahwa kamu layak mendapatkan semua kebahagiaan di dunia ini. Sejak saat itu, aku berjanji akan melakukan apapun untuk melihatmu tersenyum.",
      emoji: "🤗",
      color: "romantic-pink"
    },
    {
      title: "Momen Ketika Aku Sadar Aku Mencintaimu",
      date: "Saat Hati Berteriak Jujur",
      content: "Tidak ada petir, tidak ada drama. Hanya saat tenang di mana aku sadar bahwa aku tidak bisa membayangkan hidup tanpamu. Cinta itu datang dengan lembut, seperti fajar yang perlahan menerangi dunia.",
      emoji: "❤️",
      color: "romantic-lilac"
    },
    // Add more memories to reach 26
    ...Array.from({ length: 21 }, (_, i) => ({
      title: `Kenangan Indah ${i + 6}`,
      date: `Momen Berharga`,
      content: `Setiap hari bersamamu adalah hadiah. Setiap tawa, setiap percakapan, setiap momen keheningan yang nyaman. Kamu membuat hidup ini lebih berwarna dan bermakna.`,
      emoji: ["🌸", "🌺", "🌷", "🌹", "💖", "🦋", "⭐", "🌈"][i % 8],
      color: ["romantic-pink", "romantic-lilac", "romantic-blue"][i % 3] as "romantic-pink" | "romantic-lilac" | "romantic-blue"
    }))
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
            26 Kenangan Terindah
          </h1>
          <div className="w-20"></div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-romantic-gradient h-full"></div>
            
            {memories.map((memory, index) => (
              <div 
                key={index} 
                className={`relative mb-8 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-8'} animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-romantic-gradient rounded-full flex items-center justify-center text-white font-bold border-4 border-background">
                  {index + 1}
                </div>
                
                {/* Memory card */}
                <Card className={`ml-16 md:ml-0 p-6 bg-card/90 backdrop-blur hover:shadow-romantic-soft transition-all duration-300 ${
                  expandedMemory === index ? 'ring-2 ring-romantic-pink' : ''
                }`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{memory.emoji}</span>
                        <h3 className="font-serif text-xl font-semibold text-foreground">
                          {memory.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground font-handwriting text-lg mb-3">
                        {memory.date}
                      </p>
                      {expandedMemory === index && (
                        <p className="text-foreground leading-relaxed animate-fade-in">
                          {memory.content}
                        </p>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setExpandedMemory(expandedMemory === index ? null : index)}
                      className="text-romantic-pink hover:text-romantic-pink"
                    >
                      {expandedMemory === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom message */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-romantic-gradient text-white max-w-2xl mx-auto">
            <Heart className="mx-auto mb-4 animate-heart-beat" size={48} />
            <p className="font-serif text-xl leading-relaxed">
              "26 tahun hidupmu telah memberikan begitu banyak kebahagiaan bagi orang-orang di sekitarmu. 
              Semoga tahun ini dan tahun-tahun selanjutnya dipenuhi dengan cinta, tawa, dan mimpi yang terwujud."
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Timeline;