import { motion } from 'motion/react';
import { Code, PenTool, Book, Box, Sparkles } from 'lucide-react';

const categories = [
  { name: 'Coding', icon: Code, color: 'bg-blue-500/10 text-blue-500' },
  { name: 'Design', icon: PenTool, color: 'bg-purple-500/10 text-purple-500' },
  { name: 'Writing', icon: Book, color: 'bg-emerald-500/10 text-emerald-500' },
  { name: '3D Art', icon: Box, color: 'bg-pink-500/10 text-pink-500' },
];

export function CreativeHub() {
  return (
    <section id="portfolio" className="py-40 px-6 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-pink-500 font-mono text-sm tracking-widest uppercase mb-4 block">04 / Creative Hub</span>
            <h2 className="text-3xl md:text-6xl font-bold tracking-tight">The Fusion of <br /><span className="text-gradient">Logic & Soul</span></h2>
          </div>
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <div key={cat.name} className={`flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 backdrop-blur-sm ${cat.color}`}>
                <cat.icon size={16} />
                <span className="text-xs font-bold uppercase tracking-wider">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Feature Column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative h-[400px] lg:h-[450px] rounded-[3rem] overflow-hidden glass p-1"
            >
              <img
                src="https://i.postimg.cc/d3GTnMq3/image.png"
                alt="Digital Ecosystem Explorer"
                className="w-full h-full object-cover rounded-[2.8rem] transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-12">
                <div className="flex items-center gap-2 text-purple-400 mb-4">
                  <Sparkles size={20} />
                  <span className="font-mono text-sm uppercase tracking-widest">Featured Project</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-bold mb-4">Digital Ecosystem Explorer</h3>
                <p className="text-gray-300 max-w-xl text-sm md:text-base">
                  An immersive 3D environment built with React Three Fiber, exploring the intersection of nature and technology.
                </p>
              </div>
            </motion.div>

            {/* Two Tall Cards Below Main Project */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative h-[500px] rounded-[2.5rem] overflow-hidden glass p-1"
              >
                <img
                  src="https://i.postimg.cc/CMrT7ZRN/image.png"
                  alt="Creative Exploration 1"
                  className="w-full h-full object-cover rounded-[2.3rem] transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group relative h-[500px] rounded-[2.5rem] overflow-hidden glass p-1"
              >
                <img
                  src="https://i.postimg.cc/25Nxnfnb/image.png"
                  alt="Creative Exploration 2"
                  className="w-full h-full object-cover rounded-[2.3rem] transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </motion.div>
            </div>
          </div>

          {/* Side Cards Column */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative flex-1 rounded-[2.5rem] overflow-hidden glass p-1 min-h-[200px] lg:h-[210px]"
            >
              <img
                src="https://i.postimg.cc/s2z7LgMb/image.png"
                alt="View Design"
                className="w-full h-full object-cover rounded-[2.3rem] transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold mb-2">View Design</h3>
                <p className="text-sm text-gray-300">Explore the visual language and UI/UX process.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative flex-1 rounded-[2.5rem] overflow-hidden glass p-1 min-h-[200px] lg:h-[210px]"
            >
              <img
                src="https://i.postimg.cc/JhTVFtpf/image.png"
                alt="Read Story"
                className="w-full h-full object-cover rounded-[2.3rem] transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold mb-2">Read Story</h3>
                <p className="text-sm text-gray-300">The narrative behind the creation.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
