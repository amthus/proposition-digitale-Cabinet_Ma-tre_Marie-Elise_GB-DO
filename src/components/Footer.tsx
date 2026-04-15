import { motion } from 'motion/react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-anthracite text-pure-white border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-12 bg-white/5 gap-[1px]">
        <div className="md:col-span-4 bg-anthracite p-12 flex flex-col justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-bordeaux flex items-center justify-center text-pure-white font-serif text-sm font-bold">
              G
            </div>
            <span className="font-serif text-lg font-bold tracking-[3px] uppercase">
              Cabinet Gbèdo
            </span>
          </div>
          <p className="text-[9px] uppercase tracking-[4px] text-pure-white/30 mt-12">
            © 2026 Cabinet Maître Marie-Elise Gbèdo. <br />
            Tous droits réservés.
          </p>
        </div>

        <div className="md:col-span-4 bg-anthracite p-12 grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-[9px] uppercase tracking-[3px] text-pure-white/40 font-bold mb-6">Navigation</p>
            {['Expertise', 'Engagement', 'Médias', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="block text-[10px] uppercase tracking-[2px] text-pure-white/60 hover:text-bordeaux transition-colors">
                {item}
              </a>
            ))}
          </div>
          <div className="space-y-4">
            <p className="text-[9px] uppercase tracking-[3px] text-pure-white/40 font-bold mb-6">Légal</p>
            {['Mentions Légales', 'Confidentialité', 'Honoraires'].map((item) => (
              <a key={item} href="#" className="block text-[10px] uppercase tracking-[2px] text-pure-white/60 hover:text-bordeaux transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-4 bg-anthracite p-12 flex flex-col justify-between items-end">
          <div className="flex gap-4">
            {[
              { name: 'LinkedIn', icon: Linkedin },
              { name: 'Twitter', icon: Twitter },
              { name: 'Instagram', icon: Instagram },
            ].map((social) => (
              <a
                key={social.name}
                href="#"
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-pure-white/60 hover:bg-bordeaux hover:border-bordeaux transition-all duration-300"
                aria-label={social.name}
              >
                <social.icon size={16} strokeWidth={1.5} />
              </a>
            ))}
          </div>
          <div className="text-right">
            <p className="text-[9px] uppercase tracking-[3px] text-pure-white/40 font-bold mb-2">Localisation</p>
            <p className="text-[10px] text-pure-white/60">Cotonou, Bénin <br /> Avenue de la Justice</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
