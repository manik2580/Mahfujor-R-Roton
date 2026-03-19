import { motion, AnimatePresence } from 'motion/react';
import { Heart, Feather, Sparkles, ArrowUpRight, X, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

const poems = [
  { 
    title: 'তোমার জন্য', 
    excerpt: 'হৃদয়ের কোণে জমে থাকা কিছু না বলা কথা, যা কেবল তোমার জন্যই সংরক্ষিত...',
    content: `যখন আমি তোমাকে আশা সম্পর্কে বলি
-- মোঃ মাহফুজুর রহমান রতন --

তোমার জন্য দাঁড়িয়ে ছিলাম বলে ---
মেঘ বলেছে খানিক আঁধার ঢেলেও
বৃষ্টি আসুক আর কিছুক্ষণ পরে।

তোমার জন্য অঝর জলে
একটা জনম কাটিয়ে বলে ---
এ পৃথিবী হাজার বছর ধরে
নদীর নামে নারীর কথা বলে।`,
    date: '20 February 2024',
    image: 'https://picsum.photos/seed/poem1/600/800',
    mood: 'Romance'
  },
  { 
    title: 'কল্পকথার গল্প', 
    excerpt: 'তবু মনে রয়ে গেলে তুমি।',
    content: `তবু মনে রয়ে গেলে তুমি।
-- মোঃ মাহফুজুর রহমান রতন --

তোমাকে দেখিনাই কল্পনায় দেখি,
তোমার উক্তি হৃদয়ে মাখি ।
হৃদয়ে জুড়ায় সুখের মেলা,
কল্পনায় এক মায়াবী বেলা।
আক্ষেপ, এতটা ভালোবেসেও
অব্যক্ত থেকে যাবে সব কথা!


নিক্ষেপ, যতটা পারা যায় দূরে
ছুড়ে আমি অতিত ব্যাথা।
বর্ষা আসে বৃষ্টি নামে,
ছন্দ মনে আদর খেলে।
তোমার আমার অবুঝ সময়
কল্পকথার গল্প বলে।`,
    date: 'April 2, 2024',
    image: 'https://picsum.photos/seed/poem2/600/800',
    mood: 'Fantasy'
  },
  { 
    title: 'অপেক্ষার প্রহর', 
    excerpt: 'সময়ের স্রোতে ভেসে চলা এক নিঃসঙ্গ নাবিক, যে কেবল তোমার ফেরার প্রতীক্ষায়...',
    content: `তবুও হৃদয়ে তোমার ছায়া,
তোমার জন্য কবিতার মহিমায়---
জগৎ আমার স্নিগ্ধ বাতাসের কোলাহল।
নদীর ঢেউ এর মতো বলো হে কন্যা,
কবে হবে আবার আষাঢ়ী বন্যা?

দেখবো না আর কভু তোমায়,
দেখেলে ও এর না দেখে---
অপেক্ষার প্রহর শেষ হলো আজ!
জীবনের সেই প্রান্তে দাঁড়িয়ে।`,
    date: '15 March 2024',
    image: 'https://picsum.photos/seed/poem3/600/800',
    mood: 'Waiting'
  },
  { 
    title: 'মহাকাশের নিঃস্তব্ধতা', 
    excerpt: 'নক্ষত্রদের মাঝে খুঁজে ফিরি তোমার ছায়া, এক অসীম শূন্যতার মাঝে তোমার অস্তিত্ব...',
    content: `তবুও সে রয়ে যায় দূর তারা।
-- মোঃ মাহফুজুর রহমান রতন --
তারাদের ভিড়ে খুঁজে পাই সে একা,
মহাকাশের নিস্তব্ধতা, তার হৃদয়ের ভাষা---
মহাকাশের কোলাহল, গ্রন্থের লালিমা,
তাদের মাঝে যেন এক রহস্যময় প্রহেলিকা।


তার হৃদয় যেন এক অন্তহীন আকাশ---
প্রতিটি তারার মাঝে সে খুজে পাই নিজের নিঃশ্বাস,
সে মহাকাশের গভীরতায় তার প্রতিফলন,
সে যেন এক অনন্ত আকাশের স্পন্দন।`,
    date: '10 January 2024',
    image: 'https://picsum.photos/seed/poem4/600/800',
    mood: 'Cosmic'
  },
  { 
    title: 'মরীচিকার প্রেম', 
    excerpt: 'মরুভূমির তপ্ত বালুতে এক ফোঁটা জল, যা কেবল চোখের ভুল ছাড়া আর কিছুই নয়...',
    content: `তবুও তোমাতেই ফিরে আসি।
-- মোঃ মাহফুজুর রহমান রতন --
মরীচিকার প্রেমে মগ্ন হৃদয়--
কম্পাসে থাকে না চোখ;
আসল-কেই সে মেকি ভাবে,
মেকি-কেই আসল।


প্রখর রোদে পুড়েছি আমি--
আবার ভিজেছি মুষল বৃষ্টিতে;
তোমাতে আমি বর্ষা দেখেছি,
তোমাতেই দেখেছি গ্রীষ্মতে।`,
    date: 'May 26, 2024',
    image: 'https://picsum.photos/seed/poem5/600/800',
    mood: 'Illusion'
  },
  { 
    title: 'ধ্বংসের তীরে', 
    excerpt: 'ভেঙে পড়া পৃথিবীর শেষ গোধূলি বেলা, যেখানে সব শেষ হয়েও যেন কিছু বাকি থাকে...',
    content: `
ধ্বংসের তীরে মুক্তি কোথায়?
-- মোঃ মাহফুজুর রহমান রতন --
ধ্বংসের মাঝে পথ করেছি আঁকা,
নিঃস্ব প্রাণে জ্বলে উঠেছে পাঁকা।
চাইনি কাঁদাতে, কাঁদিয়েছি শেষে,
অভিশাপ এসে দাঁড়ায় প্রতিক্ষেশে।


অশ্রু ভেজা শূন্যতা ঘিরে রয়,
নিজ হাতেই ভেঙেছি শান্তির গয়।
ধ্বংস আমায় টেনে নেয় গভীরে,
বলো, মুক্তি কী আছে এই ধ্বংসের তীরে?`,
    date: '12 December 2023',
    image: 'https://picsum.photos/seed/poem6/600/800',
    mood: 'Apocalyptic'
  },
  { 
    title: 'অগ্নিস্নান', 
    excerpt: 'আগুনের শিখায় পুড়ে শুদ্ধ হওয়া আত্মা, এক নতুন জন্মের প্রতীক্ষায়...',
    content: `অগ্নিস্নানে পুড়ে জন্ম নেয় নতুন আমি।
-- মোঃ মাহফুজুর রহমান রতন --
আমি চিৎকার, আমি নিঃশ্বাসে আগুন,
আমি নিপীড়িত বুকে জাগা অশান্ত ফাগুন।
আমি কাঁদা জমিনে বজ্রের ঝাঁকুনি,
আমি নির্ভীক হাতে ন্যায়ের ডাকুনি।

আমি রাতভর জেগে থাকা বেদনার পাষাণ,
আমি বিদ্রোহী চেতনায় ন্যায়ের প্রবল গান।
আমি শিকল ভাঙা শব্দ, তুফানসম গতি,
আমি পথহারা পথিকের বুকে জ্বলন্ত স্মৃতি।

আমি ঘুমন্ত শহর জাগানো চিৎকার,
আমি ইতিহাসের পাতায় ক্ষুব্ধ অঙ্কার।
আমি শিশুর কান্নায় জাগা ক্ষুধিত ক্রন্দন
আমি জমে থাকা হাজার বছরের অন্ধকারে আন্দোলন।

আমি ভাঙা বাঁশির সুরে লুকানো অভিমান,
আমি চুরমার করি মিথ্যের সব সম্মান।
আমি অন্যায় ভেদ করা তলোয়ারের ধার,
আমি শোষকের বুকে জেগে থাকা আগ্নেয় আগার।

আমি না বলা কথার অগ্নিস্নান,
আমি মানুষের মুখে প্রতিরোধের গান।
আমি থেমে থাকা স্বপ্নের বিদ্রোহী হাঁক,
আমি সংগ্রাম, আমি শান্তি, আমি মুছে দিই যত ক্লান্তি।

আমি সত্যের পথে নির্ভীক বীর, ভাঙি মিথ্যার ভ্রান্তি।
আমি তাণ্ডব, আমি ঝড়,
আমি অগ্নি, নিপাত যত কুড়ানো ভয় কর!
আমি চিরজাগ্রত বিদ্রোহের চেতনা।

আমি ভাঙি বন্দিশালা, আমি মুক্তির গান গাওয়া জ্বালামুখ!
আমি সিংহসম গর্জন, বুকে বাজে বজ্র,
আমি পদদলিত শাসকের গর্বে লাগাই তেজের আগুন।
আমি প্রশ্ন, আমি জবাব, আমি উত্তাল ঢেউ।

আমি জাগি যখন, কেঁপে উঠে স্বর্গ-পৃথিবী-নরক!`,
    date: 'January 15, 2026',
    image: 'https://picsum.photos/seed/poem7/600/800',
    mood: 'Spiritual'
  },
];

export function Poetry() {
  const [selectedPoem, setSelectedPoem] = useState<typeof poems[0] | null>(null);

  useEffect(() => {
    const lenis = (window as any).lenis;
    if (selectedPoem) {
      document.body.style.overflow = 'hidden';
      lenis?.stop();
    } else {
      document.body.style.overflow = 'unset';
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = 'unset';
      lenis?.start();
    };
  }, [selectedPoem]);

  return (
    <section id="poetry" className="py-32 px-6 bg-[#050505] relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[150px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-purple-400 font-mono text-sm tracking-[0.4em] uppercase mb-4 block">05 / Literary Soul</span>
            <h2 className="text-3xl md:text-8xl font-bold tracking-tighter mb-8">
              Poetry & <span className="text-gradient">Verses</span>
            </h2>
            <div className="flex items-center justify-center gap-4 text-gray-500 italic text-lg md:text-xl font-light">
              <Feather size={20} className="text-purple-500" />
              <p>"কবিতা হলো হৃদয়ের সেই ভাষা যা শব্দে প্রকাশ পায় না।"</p>
              <Sparkles size={20} className="text-purple-500" />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {poems.map((poem, index) => (
            <motion.div
              key={poem.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -15 }}
              onClick={() => setSelectedPoem(poem)}
              className="group relative h-[500px] rounded-[2.5rem] overflow-hidden glass p-1 cursor-pointer"
            >
              <img
                src={poem.image}
                alt={poem.title}
                className="w-full h-full object-cover rounded-[2.3rem] transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-purple-500/20 backdrop-blur-md border border-purple-500/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-purple-400">
                    {poem.mood}
                  </span>
                  <Heart size={18} className="text-white/20 group-hover:text-purple-500 transition-colors" />
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors leading-tight">
                  {poem.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3 italic font-light opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  {poem.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-[10px] uppercase tracking-widest text-gray-500">By Roton</span>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-purple-500 group-hover:text-black transition-all">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPoem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPoem(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full glass p-8 md:p-12 rounded-[3rem] overflow-hidden max-h-[90vh] overflow-y-auto custom-scrollbar"
            >
              <button 
                onClick={() => setSelectedPoem(null)}
                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all z-10"
              >
                <X size={24} />
              </button>

              <div className="mb-8">
                <span className="px-4 py-1.5 bg-purple-500/20 backdrop-blur-md border border-purple-500/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-purple-400 mb-6 inline-block">
                  {selectedPoem.mood}
                </span>
                <h3 className="text-3xl md:text-6xl font-bold text-white mb-4 leading-tight">
                  {selectedPoem.title}
                </h3>
                <div className="flex items-center gap-4 text-gray-500 font-mono text-xs uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-purple-500" />
                    <span>{selectedPoem.date}</span>
                  </div>
                  <span>•</span>
                  <span>By মোঃ মাহফুজুর রহমান রতন</span>
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed whitespace-pre-line font-light italic">
                  {selectedPoem.content}
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Feather size={20} className="text-purple-500" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">মোঃ মাহফুজুর রহমান রতন</p>
                    <p className="text-gray-500 text-[10px] uppercase tracking-widest">Author & Poet</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-500 hover:text-black transition-all">
                    <Heart size={20} />
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
