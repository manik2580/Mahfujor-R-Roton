import { motion, AnimatePresence } from 'motion/react';
import { Award, ExternalLink, X } from 'lucide-react';
import { useState } from 'react';

const certificates = [
  { 
    title: 'Web Development', 
    issuer: 'Programming Hero', 
    year: '2023',
    image: 'https://rotonvai.github.io/Roton.info/certificate/certificate1.png'
  },
  { 
    title: 'Digital Literacy Center', 
    issuer: 'ICT Division', 
    year: '2023',
    image: 'https://rotonvai.github.io/Roton.info/certificate/certificate2.png'
  },
  { 
    title: 'Sheikh Russel Dibos', 
    issuer: 'Government of Bangladesh', 
    year: '2022',
    image: 'https://rotonvai.github.io/Roton.info/certificate/certificate3.jpg'
  },
];

export function Awards() {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  return (
    <section id="awards" className="py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-yellow-500 font-mono text-sm tracking-widest uppercase mb-4 block">08 / Achievements</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Awards & <span className="text-gradient">Certificates</span></h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setSelectedCert(cert)}
              className="glass p-1 rounded-[2rem] group relative cursor-pointer"
            >
              <div className="aspect-[4/3] rounded-[1.8rem] overflow-hidden mb-6">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 pt-0">
                <div className="flex items-center gap-2 text-yellow-500 mb-2">
                  <Award size={16} />
                  <span className="text-[10px] uppercase tracking-widest font-bold">{cert.year}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-500 transition-colors">{cert.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{cert.issuer}</p>
                <div className="flex justify-end">
                  <ExternalLink size={18} className="text-white/20 group-hover:text-white transition-colors" />
                </div>
              </div>
              
              <div className="absolute inset-0 rounded-[2rem] border border-yellow-500/0 group-hover:border-yellow-500/30 transition-all duration-500 pointer-events-none" />
              <div className="absolute inset-0 rounded-[2rem] bg-yellow-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full glass p-4 rounded-[3rem] overflow-hidden"
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all z-10"
              >
                <X size={24} />
              </button>
              
              <div className="aspect-[1.414/1] w-full rounded-[2.5rem] overflow-hidden bg-white/5">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="p-8 text-center">
                <h3 className="text-3xl font-bold mb-2">{selectedCert.title}</h3>
                <p className="text-yellow-500 font-mono text-sm tracking-widest uppercase">{selectedCert.issuer} — {selectedCert.year}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

