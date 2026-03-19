import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, ArrowRight, Bookmark, X, Share2, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

const blogs = [
  { 
    title: 'আমি আমিই তো ছিলাম', 
    date: 'Oct 12, 2023', 
    excerpt: 'নিজেকে খুঁজে পাওয়ার এক অন্তহীন যাত্রা, যেখানে প্রতিটি পদক্ষেপ ছিল এক নতুন উন্মোচন...',
    content: `জীবনের এক পর্যায়ে এসে আমরা সবাই নিজেকে প্রশ্ন করি— "আমি আসলে কে?" এই ব্লগে আমি আমার সেই আত্ম-আবিষ্কারের যাত্রা নিয়ে আলোচনা করেছি। শৈশবের সেই স্বপ্নগুলো থেকে শুরু করে আজকের এই বাস্তবতায় এসে পৌঁছানো পর্যন্ত প্রতিটি মুহূর্ত আমাকে নতুন কিছু শিখিয়েছে। আমি বুঝেছি যে, আমি আমিই ছিলাম, শুধু সময়ের সাথে সাথে আমার অভিজ্ঞতার ঝুলিটা পূর্ণ হয়েছে। নিজেকে ভালোবাসা এবং নিজের সত্তাকে গ্রহণ করাই হলো প্রকৃত সুখের চাবিকাঠি।`,
    image: 'https://picsum.photos/seed/blog1/800/600',
    category: 'Self Discovery',
    readTime: '5 min read'
  },
  { 
    title: 'চক্রাকারে ফিরে আসি', 
    date: 'Nov 05, 2023', 
    excerpt: 'জীবনের প্রতিটি মোড় যেন এক নতুন শুরুর ইঙ্গিত, এক চক্রাকার আবর্তনে আমরা বারবার ফিরে আসি...',
    content: `ইতিহাস নিজেকে পুনরাবৃত্তি করে— এই কথাটি জীবনের ক্ষেত্রেও সত্য। আমরা অনেক সময় মনে করি যে আমরা অনেক দূরে এগিয়ে গেছি, কিন্তু কোনো এক অদ্ভুত কারণে আমরা আবার সেই পুরনো জায়গায় ফিরে আসি। তবে এই ফিরে আসাটা কোনো পরাজয় নয়, বরং এক নতুন দৃষ্টিভঙ্গি নিয়ে শুরু করার সুযোগ। জীবনের এই চক্রাকার আবর্তন আমাদের শেখায় যে কোনো কিছুই চিরস্থায়ী নয়, আবার কোনো কিছুই পুরোপুরি শেষ হয়ে যায় না।`,
    image: 'https://picsum.photos/seed/blog2/800/600',
    category: 'Philosophy',
    readTime: '7 min read'
  },
  { 
    title: 'অদৃশ্য মানুষ', 
    date: 'Dec 20, 2023', 
    excerpt: 'ভিড়ের মাঝে হারিয়ে যাওয়া এক নিঃসঙ্গ সত্তা, যার অস্তিত্ব কেবল নিজের কাছেই স্পষ্ট...',
    content: `শহরের এই ব্যস্ততায় আমরা সবাই যেন একেকজন অদৃশ্য মানুষ। আমাদের পাশে হাজার হাজার মানুষ থাকলেও আমরা নিজেদের খুব একা অনুভব করি। এই ব্লগে আমি আধুনিক জীবনের সেই নিঃসঙ্গতা এবং মানুষের সাথে মানুষের দূরত্বের কথা বলেছি। আমরা সামাজিক যোগাযোগ মাধ্যমে হাজার হাজার বন্ধুর সাথে যুক্ত থাকলেও মনের কথা বলার মতো কাউকে খুঁজে পাই না। এই অদৃশ্য হয়ে থাকার অনুভূতি আমাদের সত্তাকে কুরে কুরে খায়।`,
    image: 'https://picsum.photos/seed/blog3/800/600',
    category: 'Social',
    readTime: '6 min read'
  },
  { 
    title: 'নীরব প্রহরী', 
    date: 'Jan 15, 2024', 
    excerpt: 'সময়ের সাক্ষী হয়ে দাঁড়িয়ে থাকা এক প্রাচীন বৃক্ষ, যে দেখেছে সভ্যতার উত্থান আর পতন...',
    content: `প্রকৃতি আমাদের সবচেয়ে বড় শিক্ষক। এক প্রাচীন বৃক্ষ যেভাবে বছরের পর বছর দাঁড়িয়ে থেকে সব পরিবর্তন দেখে যায়, তা আমাদের ধৈর্য এবং সহনশীলতার শিক্ষা দেয়। এই ব্লগে আমি প্রকৃতির সেই নীরব প্রহরীদের কথা বলেছি যারা কোনো অভিযোগ ছাড়াই আমাদের ছায়া দিয়ে যাচ্ছে। আমাদের উচিত প্রকৃতির এই দানকে সম্মান করা এবং একে রক্ষা করা। কারণ প্রকৃতি ধ্বংস হওয়া মানে আমাদের নিজেদের অস্তিত্বই সংকটে পড়া।`,
    image: 'https://picsum.photos/seed/blog4/800/600',
    category: 'Nature',
    readTime: '4 min read'
  },
];

export function Blog() {
  const [selectedBlog, setSelectedBlog] = useState<typeof blogs[0] | null>(null);

  useEffect(() => {
    const lenis = (window as any).lenis;
    if (selectedBlog) {
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
  }, [selectedBlog]);

  return (
    <section id="blog" className="py-32 px-6 bg-[#050505] relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-emerald-400 font-mono text-sm tracking-[0.3em] uppercase mb-4 block">07 / Insights</span>
            <h2 className="text-3xl md:text-7xl font-bold tracking-tighter">
              Personal <span className="text-gradient">Blog</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-500 max-w-sm text-lg font-light leading-relaxed"
          >
            Thoughts, reflections, and technical deep-dives from my digital journey.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              onClick={() => setSelectedBlog(blog)}
              className="group relative flex flex-col md:flex-row gap-8 glass p-6 rounded-[2.5rem] hover:bg-white/[0.02] transition-all duration-500 cursor-pointer"
            >
              <div className="w-full md:w-2/5 aspect-square md:aspect-auto rounded-[1.8rem] overflow-hidden relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                    {blog.category}
                  </span>
                </div>
              </div>

              <div className="w-full md:w-3/5 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4 text-[10px] font-mono uppercase tracking-widest text-gray-500">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={12} className="text-emerald-500" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Bookmark size={12} className="text-emerald-500" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-emerald-400 transition-colors leading-tight">
                  {blog.title}
                </h3>
                
                <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-3 font-light">
                  {blog.excerpt}
                </p>
                
                <div className="mt-auto">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-white font-bold uppercase tracking-[0.2em] text-[10px] group/btn"
                  >
                    Read More 
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover/btn:bg-emerald-500 group-hover/btn:text-black transition-all">
                      <ArrowRight size={14} />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedBlog(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full glass rounded-[3.5rem] overflow-hidden max-h-[90vh] flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedBlog(null)}
                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white/20 transition-all z-20"
              >
                <X size={24} />
              </button>

              <div className="w-full md:w-2/5 h-64 md:h-auto relative">
                <img
                  src={selectedBlog.image}
                  alt={selectedBlog.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:bg-gradient-to-r" />
              </div>

              <div className="w-full md:w-3/5 p-8 md:p-16 overflow-y-auto custom-scrollbar bg-[#050505]/80 backdrop-blur-md">
                <div className="mb-10">
                  <span className="px-4 py-1.5 bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-6 inline-block">
                    {selectedBlog.category}
                  </span>
                  <h3 className="text-3xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tighter">
                    {selectedBlog.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-6 text-gray-500 text-[10px] font-mono uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-emerald-500" />
                      <span>{selectedBlog.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bookmark size={14} className="text-emerald-500" />
                      <span>{selectedBlog.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={14} className="text-emerald-500" />
                      <span>By Roton</span>
                    </div>
                  </div>
                </div>

                <div className="prose prose-invert max-w-none">
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                    {selectedBlog.content}
                  </p>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <User size={20} className="text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">মোঃ মাহফুজুর রহমান রতন</p>
                      <p className="text-gray-500 text-[10px] uppercase tracking-widest">Digital Creator</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 transition-all text-[10px] font-bold uppercase tracking-widest">
                      <MessageCircle size={16} /> Comment
                    </button>
                    <button className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-500 hover:text-black transition-all">
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
