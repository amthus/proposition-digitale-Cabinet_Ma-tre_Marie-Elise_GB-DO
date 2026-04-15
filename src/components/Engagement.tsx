import { motion } from 'motion/react';
import { Shield, Heart, Scale, Users } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: "Défense des Droits",
    description: "Un engagement sans faille pour la protection des libertés individuelles et le respect de la dignité humaine.",
  },
  {
    icon: Users,
    title: "Accompagnement des Femmes",
    description: "Soutien stratégique et juridique pour les femmes entrepreneures et leaders de demain.",
  },
  {
    icon: Scale,
    title: "Accès à la Justice",
    description: "Rendre le droit accessible à tous, sans distinction, pour une société plus équitable.",
  },
  {
    icon: Heart,
    title: "Engagement Social",
    description: "Participation active aux réformes législatives et aux débats de société pour le progrès commun.",
  },
];

export default function Engagement() {
  return (
    <section id="engagement" className="bg-pure-white border-b border-anthracite/10 min-h-screen">
      <div className="p-12 md:p-24 lg:p-32 border-b border-anthracite/10 flex flex-col items-center text-center">
        <div className="max-w-4xl flex flex-col items-center">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-[1px] bg-bordeaux" />
            <span className="text-bordeaux font-sans font-bold uppercase tracking-[0.3em] text-[10px]">
              Engagement & Valeurs
            </span>
            <div className="w-8 h-[1px] bg-bordeaux" />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-anthracite leading-[0.9] mb-10">
            Une vision <span className="italic">humaniste</span> <br />
            de la pratique.
          </h1>
          <p className="text-lg md:text-xl text-anthracite/60 font-sans leading-relaxed max-w-2xl">
            Le Cabinet Maître Marie-Elise GBÈDO ne se contente pas de conseiller ; il s'engage. Notre pratique est guidée par la conviction que le droit est un levier de transformation sociale.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 bg-anthracite/10 gap-[1px]">
        <div className="bg-pure-white p-12 md:p-24 flex flex-col justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
            {values.map((value, i) => (
              <div key={i} className="group">
                <div className="text-bordeaux mb-8 group-hover:scale-110 transition-transform duration-700 origin-left">
                  <value.icon size={32} strokeWidth={1} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-anthracite mb-4 tracking-tight">{value.title}</h3>
                <p className="text-sm text-anthracite/40 font-sans leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-pure-white relative overflow-hidden flex items-center justify-center p-12 md:p-24 border-l border-anthracite/10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="w-full h-full relative"
          >
            <div className="aspect-[4/5] overflow-hidden border border-anthracite/10">
              <img
                src="https://picsum.photos/seed/engagement/1200/1500"
                alt="Engagement"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-anthracite p-12 max-w-[340px] shadow-2xl">
              <p className="text-pure-white font-serif italic text-2xl leading-tight">
                "La justice n'est pas un concept abstrait, c'est une action quotidienne."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
