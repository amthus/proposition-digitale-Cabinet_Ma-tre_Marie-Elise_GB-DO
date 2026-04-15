import { motion } from 'motion/react';
import { Play, ExternalLink } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const newsItems = [
  {
    id: 1,
    title: "Intervention sur l'accès à la justice pour tous",
    category: "Télévision",
    image: "https://picsum.photos/seed/media1/600/800",
    size: "large",
  },
  {
    id: 2,
    title: "Conférence : L'entrepreneuriat féminin en Afrique",
    category: "Événement",
    image: "https://picsum.photos/seed/media2/600/400",
    size: "small",
  },
  {
    id: 3,
    title: "Réforme du code de la famille : Enjeux et perspectives",
    category: "Article",
    image: "https://picsum.photos/seed/media3/600/400",
    size: "small",
  },
  {
    id: 4,
    title: "Défense des droits humains : Un combat permanent",
    category: "Podcast",
    image: "https://picsum.photos/seed/media4/600/600",
    size: "medium",
  },
  {
    id: 5,
    title: "Maître GBÈDO à la tribune des Nations Unies",
    category: "Diplomatie",
    image: "https://picsum.photos/seed/media5/600/800",
    size: "large",
  },
];

export default function NewsMedia() {
  return (
    <section id="news" className="bg-pure-white border-b border-anthracite/10 min-h-screen">
      <div className="p-12 md:p-24 lg:p-32 border-b border-anthracite/10 flex flex-col items-center text-center">
        <div className="max-w-4xl flex flex-col items-center">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-[1px] bg-bordeaux" />
            <span className="text-bordeaux font-sans font-bold uppercase tracking-[0.3em] text-[10px]">
              Actualités & Médias
            </span>
            <div className="w-8 h-[1px] bg-bordeaux" />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-anthracite leading-[0.9] mb-10">
            Prises de parole <br />
            <span className="italic text-bordeaux">& Rayonnement</span>.
          </h1>
          <p className="text-lg md:text-xl text-anthracite/60 font-sans leading-relaxed max-w-2xl">
            Retrouvez les dernières interventions médiatiques, analyses juridiques et contributions au débat public de Maître Marie-Elise GBÈDO.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 bg-anthracite/10 gap-[1px]">
        <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-anthracite/10 gap-[1px]">
          {newsItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-pure-white group relative overflow-hidden cursor-pointer h-[450px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-anthracite/40 group-hover:bg-bordeaux/20 transition-colors duration-500" />
              
              <div className="absolute inset-0 p-12 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                <span className="text-pure-white/70 text-[9px] uppercase tracking-[0.4em] font-sans mb-4 font-bold">
                  {item.category}
                </span>
                <h3 className="text-pure-white text-2xl font-serif font-medium leading-tight mb-6">
                  {item.title}
                </h3>
                <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  <span className="text-pure-white text-[10px] uppercase tracking-[3px] font-bold">Lire la suite</span>
                  <div className="w-12 h-[1px] bg-pure-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
