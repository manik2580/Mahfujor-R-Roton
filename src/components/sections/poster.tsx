import { motion, AnimatePresence } from 'motion/react';
import { Image, Download, X, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const posters = [
  {
    title: 'Vice City Neon Poster',
    category: 'Cinematic Poster',
    year: '2026',
    description: 'A neon-soaked retro poster captures a lone man standing beside a sleek sports car, facing a glowing tropical city skyline at sunset. The sky burns with intense shades of red, fading into deep purple and black, creating a moody, nostalgic atmosphere. Tall buildings shimmer in the distance, reflecting on the wet ground below, while dark silhouettes of palm trees frame the scene on both sidees The character stands still, almost frozen in thought, giving a sense of isolation, power, and reflection like a moment right before everything changes. Subtle fog blends the foreground and background, adding depth and cinematic softness. At the top, a bold quote in clean white typography sets the tone raw, gritty, and unapologetic. At the bottom, a glowing pink neon script reads “Vice City,” bringing a strong 80s aesthetic and emotional punch.The overall mood feels like the final scene of a crime drama lonely, stylish, and unforgettable.',
    image: 'https://i.postimg.cc/5NvLKSRs/image.png',
    download: 'https://i.postimg.cc/5NvLKSRs/image.png',
  },
  {
    title: 'Comming Soon',
    category: 'Emotional Poster',
    year: '2026',
    description: 'A clean emotional billboard-style poster design made for a special birthday moment.',
    image: 'https://your-link.com/poster2.png',
    download: 'https://your-link.com/poster2.png',
  },
  {
    title: 'Comming Soon',
    category: 'Education Poster',
    year: '2026',
    description: 'A premium poster design for Japanese language course promotion and student attraction.',
    image: 'https://your-link.com/poster3.png',
    download: 'https://your-link.com/poster3.png',
  },
];

export function Posters() {
  const [selectedPoster, setSelectedPoster] = useState<typeof posters[0] | null>(null);

  const downloadPoster = async (url: string, title: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `${title.replaceAll(' ', '-')}-HD.png`;
      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(blobUrl);
    } catch {
      window.open(url, '_blank');
    }
  };

  return (
    <section id="posters" className="py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-yellow-500 font-mono text-sm tracking-widest uppercase mb-4 block">
              09 / Creative Works
            </span>

            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Poster <span className="text-gradient">Gallery</span>
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posters.map((poster, index) => (
            <motion.div
              key={poster.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setSelectedPoster(poster)}
              className="glass p-1 rounded-[2rem] group relative cursor-pointer"
            >
              <div className="aspect-[3/4] rounded-[1.8rem] overflow-hidden mb-6 bg-white/5">
                <img
                  src={poster.image}
                  alt={poster.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 pt-0">
                <div className="flex items-center gap-2 text-yellow-500 mb-2">
                  <Image size={16} />
                  <span className="text-[10px] uppercase tracking-widest font-bold">
                    {poster.year}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-500 transition-colors">
                  {poster.title}
                </h3>

                <p className="text-gray-500 text-sm mb-4">{poster.category}</p>

                <div className="flex justify-between items-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      downloadPoster(poster.download, poster.title);
                    }}
                    className="text-xs uppercase tracking-widest font-bold text-yellow-500 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Download size={16} />
                    Download HD
                  </button>

                  <ExternalLink
                    size={18}
                    className="text-white/20 group-hover:text-white transition-colors"
                  />
                </div>
              </div>

              <div className="absolute inset-0 rounded-[2rem] border border-yellow-500/0 group-hover:border-yellow-500/30 transition-all duration-500 pointer-events-none" />
              <div className="absolute inset-0 rounded-[2rem] bg-yellow-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPoster && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPoster(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full glass p-6 rounded-[3rem] overflow-hidden"
            >
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPoster(null);
                }}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all z-20"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/2">
                  <div className="max-h-[75vh] rounded-[2.5rem] overflow-hidden bg-white/5 flex items-center justify-center">
                    <img
                      src={selectedPoster.image}
                      alt={selectedPoster.title}
                      className="max-w-full max-h-[75vh] object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                <div className="w-full md:w-1/2 pr-0 md:pr-10">
                  <div className="flex items-center gap-2 text-yellow-500 mb-4">
                    <Image size={18} />
                    <span className="text-xs uppercase tracking-widest font-bold">
                      {selectedPoster.year}
                    </span>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-bold mb-4">
                    {selectedPoster.title}
                  </h3>

                  <p className="text-yellow-500 font-mono text-sm tracking-widest uppercase mb-6">
                    {selectedPoster.category}
                  </p>

                  <p className="text-gray-400 text-base leading-7 mb-10 max-w-xl">
                    {selectedPoster.description}
                  </p>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      downloadPoster(selectedPoster.download, selectedPoster.title);
                    }}
                    className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-yellow-500 text-black font-bold hover:bg-white transition-all"
                  >
                    <Download size={18} />
                    Download
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}