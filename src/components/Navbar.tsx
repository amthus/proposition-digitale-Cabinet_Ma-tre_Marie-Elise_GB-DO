import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'Expertise', href: '/expertise' },
  { name: 'Engagement', href: '/engagement' },
  { name: 'Médias', href: '/medias' },
  { name: 'Témoignages', href: '/temoignages' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-6 md:px-16 h-16 flex justify-between items-center border-b',
        scrolled ? 'bg-pure-white/95 backdrop-blur-sm border-anthracite/10' : 'bg-transparent border-transparent'
      )}
    >
      <div className="flex items-center gap-4">
        <Link to="/" className="group flex items-center gap-3">
          <div className="w-8 h-8 bg-anthracite group-hover:bg-bordeaux flex items-center justify-center text-pure-white font-serif text-sm font-bold transition-colors duration-500">
            G
          </div>
          <span className="font-serif text-lg font-bold tracking-[3px] uppercase text-anthracite group-hover:text-bordeaux transition-colors duration-500">
            Cabinet <span className="italic">Gbèdo</span>
          </span>
        </Link>
      </div>

      <div className="hidden lg:flex items-center gap-10">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            className={cn(
              "text-[10px] uppercase tracking-[2px] font-bold transition-colors",
              location.pathname === link.href ? "text-bordeaux" : "text-anthracite/60 hover:text-bordeaux"
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 flex flex-col gap-1.5 group cursor-pointer lg:hidden"
        aria-label="Menu"
      >
        <span className={cn("h-[1px] bg-anthracite transition-all duration-300", isOpen ? "w-8 rotate-45 translate-y-2" : "w-8")} />
        <span className={cn("h-[1px] bg-anthracite transition-all duration-300", isOpen ? "opacity-0" : "w-6 self-end")} />
        <span className={cn("h-[1px] bg-anthracite transition-all duration-300", isOpen ? "w-8 -rotate-45 -translate-y-2" : "w-8")} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-anthracite z-40 flex flex-col lg:flex-row"
          >
            <div className="hidden lg:flex lg:w-1/2 bg-bordeaux p-24 flex-col justify-between border-r border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-pure-white flex items-center justify-center text-bordeaux font-serif text-lg font-bold">
                  G
                </div>
                <span className="font-serif text-xl font-bold tracking-[4px] uppercase text-pure-white">
                  Cabinet Gbèdo
                </span>
              </div>
              
              <div className="space-y-8">
                <p className="text-4xl font-serif italic text-pure-white leading-tight">
                  "L'excellence juridique au service de l'humain."
                </p>
                <div className="w-24 h-[1px] bg-pure-white/30" />
                <p className="text-[10px] uppercase tracking-[4px] text-pure-white/50 font-bold">
                  Justice & Transformation Sociale
                </p>
              </div>

              <div className="flex gap-6">
                {['LinkedIn', 'Twitter', 'Instagram'].map((s) => (
                  <a key={s} href="#" className="text-[10px] uppercase tracking-[3px] text-pure-white/60 hover:text-pure-white transition-colors">
                    {s}
                  </a>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2 bg-anthracite p-12 md:p-24 flex flex-col justify-center relative">
              <div className="flex flex-col gap-6 md:gap-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.6 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-baseline gap-6"
                    >
                      <span className="text-bordeaux font-sans font-bold text-[10px] md:text-xs tracking-[0.3em]">
                        0{i + 1}
                      </span>
                      <span className="font-serif text-3xl md:text-5xl lg:text-8xl italic text-pure-white hover:text-bordeaux transition-all duration-500 transform group-hover:translate-x-4">
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: 1 }}
                className="absolute bottom-12 left-12 md:left-24 text-[9px] md:text-[10px] uppercase tracking-[4px] font-sans font-bold text-pure-white"
              >
                Cabinet Maître Marie-Elise GBÈDO — Est. 1989
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
