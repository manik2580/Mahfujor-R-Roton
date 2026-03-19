import { motion } from 'motion/react';
import { ArrowRight, Globe } from 'lucide-react';

export function Hero() {
  const handleExplore = () => {
    const lenis = (window as any).lenis;
    if (!lenis) return;

    // Scroll to contact
    lenis.scrollTo('#contact', {
      duration: 4, // Slower scroll to show the content
      onComplete: () => {
        // Wait a bit at the bottom then scroll back up
        setTimeout(() => {
          lenis.scrollTo('#home', {
            duration: 4,
          });
        }, 1000);
      }
    });
  };

  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505] z-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-20 text-center max-w-5xl"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium tracking-widest uppercase mb-6 backdrop-blur-sm"
        >
          Welcome to my creative universe
        </motion.span>
        
        <h1 className="text-4xl md:text-8xl font-bold tracking-tighter leading-tight mb-8">
          IMAGINATION IS <br />
          <span className="text-gradient">MORE IMPORTANT</span> <br />
          THAN KNOWLEDGE
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Blending technology, storytelling, and innovation to craft digital experiences that solve problems and inspire the soul.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            onClick={() => (window as any).lenis?.scrollTo('#portfolio')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-black rounded-full font-semibold flex items-center gap-2 transition-colors hover:bg-gray-200"
          >
            View Projects <ArrowRight size={18} />
          </motion.button>
          
          <motion.button
            onClick={handleExplore}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-semibold flex items-center gap-2 backdrop-blur-md transition-all hover:bg-white/10"
          >
            Explore My World <Globe size={18} />
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
