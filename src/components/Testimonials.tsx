import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "L'accompagnement de Maître GBÈDO a été déterminant pour le lancement de ma structure. Sa vision stratégique et son expertise juridique sont des atouts majeurs.",
    author: "Sophie K.",
    role: "Entrepreneure",
  },
  {
    quote: "Une figure d'autorité qui sait rester humaine et accessible. Sa ténacité en salle d'audience est impressionnante.",
    author: "Marc L.",
    role: "Client Particulier",
  },
  {
    quote: "Un engagement sincère pour les causes sociales. Maître Marie-Elise est bien plus qu'une avocate, c'est une voix pour ceux qui n'en ont pas.",
    author: "Association Droit & Vie",
    role: "Partenaire Institutionnel",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-pure-white border-b border-anthracite/10 min-h-screen">
      <div className="p-12 md:p-24 lg:p-32 border-b border-anthracite/10 flex flex-col items-center text-center">
        <div className="max-w-4xl flex flex-col items-center">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-[1px] bg-bordeaux" />
            <span className="text-bordeaux font-sans font-bold uppercase tracking-[0.3em] text-[10px]">
              Témoignages & Impact
            </span>
            <div className="w-8 h-[1px] bg-bordeaux" />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-anthracite leading-[0.9] mb-10">
            Échos de notre <br />
            <span className="italic text-bordeaux">engagement</span>.
          </h1>
          <p className="text-lg md:text-xl text-anthracite/60 font-sans leading-relaxed max-w-2xl">
            La confiance de nos clients et partenaires est le moteur de notre excellence. Découvrez les retours d'expérience sur notre pratique juridique.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-anthracite/10 gap-[1px]">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-pure-white p-12 md:p-20 flex flex-col justify-between group hover:bg-silver transition-colors duration-700 min-h-[450px]"
          >
            <div>
              <Quote size={40} strokeWidth={1} className="text-bordeaux/20 mb-10 group-hover:text-bordeaux transition-colors duration-700" />
              <p className="text-2xl md:text-3xl font-serif italic text-anthracite leading-relaxed mb-12">
                "{t.quote}"
              </p>
            </div>
            <div>
              <p className="font-sans font-bold text-anthracite text-base tracking-tight">{t.author}</p>
              <p className="font-sans text-[10px] text-bordeaux uppercase tracking-[4px] mt-3 font-bold">
                {t.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
