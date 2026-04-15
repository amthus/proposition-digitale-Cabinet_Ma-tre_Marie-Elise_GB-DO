import { motion } from 'motion/react';
import { Briefcase, Gavel, Users2, Landmark } from 'lucide-react';

const expertiseList = [
  {
    icon: Users2,
    title: "Droit de la Famille",
    description: "Divorce, garde d'enfants, successions et protection des mineurs. Une approche sensible et rigoureuse.",
    color: "bg-blue-50",
  },
  {
    icon: Gavel,
    title: "Droit Pénal",
    description: "Défense pénale, assistance en garde à vue et représentation devant les tribunaux répressifs.",
    color: "bg-red-50",
  },
  {
    icon: Briefcase,
    title: "Conseil Entrepreneurial",
    description: "Accompagnement juridique des créateurs d'entreprise, rédaction de contrats et conseil stratégique.",
    color: "bg-amber-50",
  },
  {
    icon: Landmark,
    title: "Droit Civil & Commercial",
    description: "Contentieux civil, recouvrement de créances et litiges commerciaux complexes.",
    color: "bg-emerald-50",
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="bg-pure-white border-b border-anthracite/10 min-h-screen">
      <div className="p-12 md:p-24 lg:p-32 border-b border-anthracite/10 flex flex-col items-center text-center">
        <div className="max-w-4xl flex flex-col items-center">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-[1px] bg-bordeaux" />
            <span className="text-bordeaux font-sans font-bold uppercase tracking-[0.3em] text-[10px]">
              Domaines d'Intervention
            </span>
            <div className="w-8 h-[1px] bg-bordeaux" />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-anthracite leading-[0.9] mb-10">
            Une expertise <br />
            <span className="italic text-bordeaux">sans compromis</span>.
          </h1>
          <p className="text-lg md:text-xl text-anthracite/60 font-sans leading-relaxed max-w-2xl">
            Le Cabinet Maître Marie-Elise GBÈDO déploie un savoir-faire juridique de pointe pour sécuriser vos intérêts et accompagner vos ambitions les plus complexes.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-anthracite/10 gap-[1px]">
        {expertiseList.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-pure-white p-12 md:p-16 flex flex-col group hover:bg-silver transition-colors duration-700 min-h-[400px]"
          >
            <div className="text-bordeaux mb-10 group-hover:scale-110 transition-transform duration-700 origin-left">
              <item.icon size={32} strokeWidth={1} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-anthracite mb-6 tracking-tight">
              {item.title}
            </h3>
            <p className="text-anthracite/60 font-sans text-sm leading-relaxed mb-12 flex-grow">
              {item.description}
            </p>
            
            <a href="#contact" className="text-anthracite font-sans font-bold text-[10px] uppercase tracking-[4px] flex items-center gap-4 group-hover:text-bordeaux transition-all">
              Consulter
              <div className="w-6 h-[1px] bg-anthracite group-hover:bg-bordeaux group-hover:w-12 transition-all duration-500" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
