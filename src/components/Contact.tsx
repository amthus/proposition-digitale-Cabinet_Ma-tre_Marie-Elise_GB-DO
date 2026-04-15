import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Globe, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-pure-white border-b border-anthracite/10 min-h-screen">
      <div className="p-12 md:p-24 lg:p-32 border-b border-anthracite/10 flex flex-col items-center text-center">
        <div className="max-w-4xl flex flex-col items-center">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-[1px] bg-bordeaux" />
            <span className="text-bordeaux font-sans font-bold uppercase tracking-[0.3em] text-[10px]">
              Contact & Consultation
            </span>
            <div className="w-8 h-[1px] bg-bordeaux" />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-anthracite leading-[0.9] mb-10">
            Parlons de votre <br />
            <span className="italic text-bordeaux">projet juridique</span>.
          </h1>
          <p className="text-lg md:text-xl text-anthracite/60 font-sans leading-relaxed max-w-2xl">
            Que vous soyez un particulier, une entreprise ou un média, nous sommes à votre écoute pour vous accompagner dans vos démarches.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 bg-anthracite/10 gap-[1px]">
        <div className="lg:col-span-5 bg-pure-white p-12 md:p-24 flex flex-col justify-center">
          <div className="space-y-12">
            {[
              { label: 'Téléphone', value: '+229 00 00 00 00', icon: Phone },
              { label: 'Email', value: 'contact@maitregbedo.com', icon: Mail },
              { label: 'Adresse', value: 'Cotonou, Bénin', icon: MapPin },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-8 group">
                <div className="text-bordeaux group-hover:scale-110 transition-transform duration-500">
                  <item.icon size={24} strokeWidth={1} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[4px] text-anthracite/40 font-bold mb-3">{item.label}</p>
                  <p className="font-sans font-medium text-anthracite text-lg">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-20 border-t border-anthracite/10">
            <div className="flex items-center gap-4 text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-anthracite/60">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              Disponibilité Médias : Réponse sous 24h
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-silver p-8 md:p-16 lg:p-24 flex flex-col justify-center">
          <form className="space-y-10 md:space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
              <div className="space-y-3">
                <label className="text-[9px] md:text-[10px] uppercase tracking-[4px] text-anthracite/40 font-bold ml-1">Nom complet</label>
                <input 
                  type="text" 
                  placeholder="Jean Dupont"
                  className="w-full bg-transparent border-b border-anthracite/20 py-4 md:py-6 px-1 focus:outline-none focus:border-bordeaux transition-colors font-sans text-sm md:text-base"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[9px] md:text-[10px] uppercase tracking-[4px] text-anthracite/40 font-bold ml-1">Email</label>
                <input 
                  type="email" 
                  placeholder="jean@exemple.com"
                  className="w-full bg-transparent border-b border-anthracite/20 py-4 md:py-6 px-1 focus:outline-none focus:border-bordeaux transition-colors font-sans text-sm md:text-base"
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="text-[9px] md:text-[10px] uppercase tracking-[4px] text-anthracite/40 font-bold ml-1">Sujet de consultation</label>
              <select className="w-full bg-transparent border-b border-anthracite/20 py-4 md:py-6 px-1 focus:outline-none focus:border-bordeaux transition-colors font-sans text-sm md:text-base appearance-none">
                <option>Consultation Juridique</option>
                <option>Accompagnement Entreprise</option>
                <option>Demande Média / Interview</option>
                <option>Autre</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-[9px] md:text-[10px] uppercase tracking-[4px] text-anthracite/40 font-bold ml-1">Message</label>
              <textarea 
                rows={4}
                placeholder="Décrivez brièvement votre situation..."
                className="w-full bg-transparent border-b border-anthracite/20 py-4 md:py-6 px-1 focus:outline-none focus:border-bordeaux transition-colors font-sans text-sm md:text-base resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full md:w-auto px-10 md:px-16 py-4 md:py-6 bg-anthracite text-pure-white font-sans font-bold rounded-sm flex items-center justify-center gap-4 md:gap-6 hover:bg-bordeaux transition-all duration-500 uppercase tracking-[4px] text-[10px] md:text-[11px] shadow-2xl shadow-anthracite/20"
            >
              Envoyer la demande
              <Send size={18} />
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}
