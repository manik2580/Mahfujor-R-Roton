import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, X, Clock, User, Share2, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

const stories = [
  { 
    title: 'হৃদয়ে তুমি চিরদিন', 
    category: 'Romance',
    excerpt: 'এক অমর প্রেমের গল্প যা সময়ের সীমানা ছাড়িয়ে বেঁচে থাকে হৃদয়ের মণিকোঠায়...',
    content: `প্রেম কখনো শেষ হয় না, শুধু রূপ বদলায়। আমাদের গল্পটাও ঠিক তেমনই ছিল। এক বিকেলে যখন সূর্যটা গোধূলির রঙে আকাশ রাঙিয়ে দিচ্ছিল, তখন তুমি বলেছিলে— "যদি কখনো হারিয়ে যাই, তবে আমায় খুঁজবে নক্ষত্রদের মাঝে।" আজ তুমি নেই, কিন্তু প্রতিটি নক্ষত্র যেন তোমার কথা বলে। হৃদয়ের প্রতিটি স্পন্দনে তোমার অস্তিত্ব অনুভব করি। তুমি ছিলে, আছো এবং থাকবে— হৃদয়ে তুমি চিরদিন।`,
    date: 'Jan 12, 2024',
    readTime: '8 min read'
  },
  { 
    title: 'মনে বসন্তের ছোঁয়া', 
    category: 'Life',
    excerpt: 'জীবনের ধূসর ক্যানভাসে বসন্তের রঙের ছোঁয়া লাগার এক অদ্ভুত অনুভূতি...',
    content: `শীতের রিক্ততা কাটিয়ে যখন প্রথম কোকিলটা ডেকে উঠল, তখনই বুঝলাম বসন্ত এসে গেছে। কিন্তু আমার মনে বসন্ত এসেছিল অনেক আগে, যেদিন তোমার সাথে প্রথম দেখা হয়েছিল। জীবনের সব না পাওয়াগুলো যেন এক নিমিষেই ধুয়ে মুছে গেল। মনে হলো, বেঁচে থাকাটা কতই না সুন্দর! প্রতিটি দিন যেন এক নতুন সম্ভাবনা, এক নতুন বসন্তের ছোঁয়া।`,
    date: 'Feb 15, 2024',
    readTime: '6 min read'
  },
  { 
    title: 'সম্পদ', 
    category: 'Social',
    excerpt: 'প্রকৃত সম্পদের সংজ্ঞা কি কেবল টাকা-পয়সা, নাকি অন্য কিছু? এক সামাজিক বাস্তবতার প্রতিফলন...',
    content: `মানুষ সম্পদের পেছনে ছোটে সারা জীবন। কিন্তু দিনশেষে প্রকৃত সম্পদ কি? অঢেল টাকা, বিশাল অট্টালিকা, নাকি মানুষের ভালোবাসা? রতন সাহেব যখন তার জীবনের শেষ প্রান্তে এসে দাঁড়ালেন, তখন দেখলেন তার পাশে কেউ নেই। তার সব সম্পদ যেন এক নিমিষেই অর্থহীন হয়ে গেল। তিনি বুঝলেন, মানুষের দোয়াই ছিল তার জীবনের শ্রেষ্ঠ সম্পদ।`,
    date: 'Mar 05, 2024',
    readTime: '10 min read'
  },
  { 
    title: 'বিশ্বাস', 
    category: 'Drama',
    excerpt: 'কাঁচের মতো ভঙ্গুর এক অনুভূতি, যা একবার ভেঙে গেলে আর জোড়া লাগানো যায় না...',
    content: `বিশ্বাস হলো সেই সুতো, যা দুটি মানুষকে বেঁধে রাখে। কিন্তু সেই সুতো যদি একবার ছিঁড়ে যায়, তবে হাজার চেষ্টা করেও আর আগের মতো করা যায় না। আরিয়ানের জীবনেও ঠিক তাই ঘটেছিল। সে যাকে সবচেয়ে বেশি বিশ্বাস করত, সেই তাকে সবচেয়ে বড় আঘাতটা দিল। এখন সে একা, কিন্তু তার মনে এক গভীর শিক্ষা— বিশ্বাস করা সহজ, কিন্তু রক্ষা করা কঠিন।`,
    date: 'Dec 20, 2023',
    readTime: '7 min read'
  },
  { 
    title: 'অস্ত যাওয়া সূর্য', 
    category: 'Philosophy',
    excerpt: 'প্রতিটি সমাপ্তিই কি এক নতুন শুরুর ইঙ্গিত? এক দার্শনিক ভাবনার বহিঃপ্রকাশ...',
    content: `সূর্য যখন অস্ত যায়, তখন সে আমাদের শিখিয়ে যায় যে প্রতিটি সমাপ্তিই সুন্দর হতে পারে। অন্ধকারের পরেই আসে আলো। জীবনের দুঃখগুলোও ঠিক তেমনই। তারা আসে আমাদের আরও শক্তিশালী করতে। অস্ত যাওয়া সূর্য আমাদের মনে করিয়ে দেয় যে, কাল আবার নতুন করে শুরু করার সুযোগ আছে।`,
    date: 'Nov 10, 2023',
    readTime: '5 min read'
  },
  { 
    title: 'জীবন যেখানে যেমন', 
    category: 'Reality',
    excerpt: 'বাস্তবতার কঠিন জমিনে দাঁড়িয়ে জীবনের গল্পগুলো যেখানে মিলেমিশে একাকার হয়ে যায়...',
    content: `জীবন কখনো মখমলের মতো নরম নয়। এর পরতে পরতে লুকিয়ে আছে সংগ্রাম। ফুটপাথের সেই ছেলেটা যখন এক টুকরো রুটির জন্য লড়াই করে, তখন আমরা আমাদের বিলাসিতা নিয়ে ব্যস্ত থাকি। জীবন যেখানে যেমন, সেখানে মানিয়ে নেওয়াই হলো আসল সার্থকতা। প্রতিটি মানুষের গল্প আলাদা, কিন্তু সবার লক্ষ্য একটাই— বেঁচে থাকা।`,
    date: 'Oct 25, 2023',
    readTime: '9 min read'
  },
];

export function Stories() {
  const [selectedStory, setSelectedStory] = useState<typeof stories[0] | null>(null);

  useEffect(() => {
    const lenis = (window as any).lenis;
    if (selectedStory) {
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
  }, [selectedStory]);

  return (
    <section id="stories" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-4 block">06 / Narrative World</span>
            <h2 className="text-3xl md:text-6xl font-bold tracking-tight">Cinematic <span className="text-gradient">Stories</span></h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <p className="text-gray-500 max-w-sm text-right text-lg font-light italic">
              "গল্পের মাঝে বেঁচে থাকে হাজারো না বলা অনুভূতি, যা আমাদের এক অন্য জগতে নিয়ে যায়।"
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedStory(story)}
              className="group relative h-80 rounded-[2.5rem] overflow-hidden glass p-1 cursor-pointer"
            >
              <img
                src={`https://picsum.photos/seed/story${index}/600/400`}
                alt={story.title}
                className="w-full h-full object-cover rounded-[2.3rem] transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <span className="text-[10px] uppercase tracking-widest text-blue-400 mb-2 font-bold">{story.category}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:translate-x-2 transition-transform duration-300 leading-tight">
                  {story.title}
                </h3>
                <p className="text-gray-400 text-xs mt-3 line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  {story.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-2 text-white/40 group-hover:text-white transition-colors">
                  <BookOpen size={14} />
                  <span className="text-[10px] uppercase tracking-wider font-bold">Read Full Story</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStory(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full glass p-8 md:p-16 rounded-[3.5rem] overflow-hidden max-h-[90vh] overflow-y-auto custom-scrollbar"
            >
              <button 
                onClick={() => setSelectedStory(null)}
                className="absolute top-8 right-8 w-14 h-14 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-all z-10"
              >
                <X size={28} />
              </button>

              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-4 py-1.5 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-blue-400">
                    {selectedStory.category}
                  </span>
                  <div className="flex items-center gap-2 text-gray-500 text-[10px] uppercase tracking-widest font-mono">
                    <Clock size={12} />
                    <span>{selectedStory.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-3xl md:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                  {selectedStory.title}
                </h3>
                
                <div className="flex items-center gap-6 py-6 border-y border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <User size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white text-xs font-bold uppercase tracking-wider">মোঃ মাহফুজুর রহমান রতন</p>
                      <p className="text-gray-500 text-[10px] uppercase tracking-widest">Storyteller</p>
                    </div>
                  </div>
                  <div className="h-8 w-px bg-white/10" />
                  <div className="text-[10px] uppercase tracking-widest text-gray-500 font-mono">
                    Published: {selectedStory.date}
                  </div>
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light first-letter:text-5xl first-letter:font-bold first-letter:text-blue-400 first-letter:mr-3 first-letter:float-left">
                  {selectedStory.content}
                </p>
              </div>

              <div className="mt-16 flex items-center justify-between">
                <div className="flex gap-4">
                  <button className="px-6 py-3 rounded-full bg-blue-500 text-black font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-blue-400 transition-all">
                    <Heart size={14} fill="currentColor" /> Like Story
                  </button>
                  <button className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all">
                    <Share2 size={18} />
                  </button>
                </div>
                <p className="text-gray-600 text-[10px] uppercase tracking-[0.3em] font-mono">© 2024 Mahfuzur Rahman</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
