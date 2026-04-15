import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row overflow-hidden border-b border-anthracite/10">
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative bg-silver flex items-center justify-center border-r border-anthracite/10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="relative w-full h-full p-8 md:p-24 flex items-center justify-center"
        >
          <div className="w-full h-full overflow-hidden image-container-radius shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] relative z-10 bg-anthracite">
            <img
              src="https://picsum.photos/seed/lawyer-portrait/1200/1600"
              alt="Maître Marie-Elise GBÈDO"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-anthracite/60 via-transparent to-transparent" />
          </div>
          
          <div className="absolute bottom-12 md:bottom-32 -right-2 md:-right-4 z-20 bg-bordeaux text-pure-white px-4 md:px-6 py-2 md:py-3 font-serif italic text-sm md:text-lg shadow-xl">
            Maître Marie-Elise Gbèdo
          </div>
        </motion.div>
      </div>

      <div className="w-full md:w-1/2 min-h-[40vh] md:min-h-screen flex flex-col justify-center px-12 md:px-24 py-24 bg-pure-white relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-[1px] bg-bordeaux" />
            <span className="text-bordeaux font-sans font-bold uppercase tracking-[5px] text-[10px]">
              Justice & Transformation
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-bold leading-[0.95] mb-10 text-anthracite tracking-tighter">
            L'Excellence <br />
            <span className="italic text-bordeaux font-medium">au service</span> <br />
            du Droit.
          </h1>
          
          <p className="text-base md:text-lg lg:text-[1.15rem] leading-[1.7] text-anthracite/70 font-sans max-w-[480px] mb-12 text-balance">
            Une approche rigoureuse et humaine pour transformer les défis juridiques en opportunités de progrès social et entrepreneurial.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-anthracite text-pure-white font-sans font-bold rounded-sm flex items-center gap-4 shadow-2xl hover:bg-bordeaux transition-all uppercase tracking-[2px] text-[11px]"
            >
              Prendre contact
              <ArrowRight size={16} />
            </motion.a>
            
            <div className="flex items-center gap-4 px-6 border-l border-anthracite/10">
              <span className="text-[10px] uppercase tracking-widest text-anthracite/40 font-bold leading-tight">
                Barreau du Bénin <br /> International
              </span>
            </div>
          </div>
        </motion.div>

        <div className="absolute inset-0 pointer-events-none opacity-[0.03] grid grid-cols-6 grid-rows-6">
          {[...Array(36)].map((_, i) => (
            <div key={i} className="border border-anthracite" />
          ))}
        </div>
      </div>
    </section>
  );
}
