import { motion } from 'motion/react';
import { ExternalLink, BookOpen, Code, Terminal, FileCode, Layers, ArrowRight } from 'lucide-react';

const courses = [
  { 
    name: 'HTML', 
    url: 'https://rotonvai.github.io/Roton.info/HTML/index.html', 
    desc: 'Master the foundation of the web with our comprehensive HTML course.',
    icon: FileCode,
    color: 'text-orange-500',
    bg: 'bg-orange-500/10'
  },
  { 
    name: 'CSS', 
    url: 'https://rotonvai.github.io/Roton.info/CSS/index.html', 
    desc: 'Learn to style beautiful, responsive websites with modern CSS techniques.',
    icon: Layers,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10'
  },
  { 
    name: 'JavaScript', 
    url: 'https://rotonvai.github.io/Roton.info/JavaScript/index.html', 
    desc: 'Unlock the power of interactivity and dynamic behavior with JavaScript.',
    icon: Code,
    color: 'text-yellow-500',
    bg: 'bg-yellow-500/10'
  },
  { 
    name: 'Python', 
    url: 'https://rotonvai.github.io/Roton.info/Python/index.html', 
    desc: 'Dive into the world of data, automation, and AI with Python programming.',
    icon: Terminal,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10'
  },
  { 
    name: 'C Programming', 
    url: 'https://rotonvai.github.io/Roton.info/C/index.html', 
    desc: 'Understand the core concepts of computer science with C programming.',
    icon: BookOpen,
    color: 'text-purple-500',
    bg: 'bg-purple-500/10'
  },
];

export function Courses() {
  return (
    <section id="courses" className="py-32 px-6 bg-[#050505] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-purple-400 font-mono text-sm tracking-[0.3em] uppercase mb-4 block">05 / Knowledge Hub</span>
            <h2 className="text-3xl md:text-7xl font-bold tracking-tighter">
              Learning <span className="text-gradient">Resources</span>
            </h2>
            <p className="text-gray-500 mt-6 max-w-2xl text-lg font-light">
              Explore my curated courses and tutorials designed to help you master modern programming languages and web technologies.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.a
              key={course.name}
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-[2.5rem] group relative overflow-hidden flex flex-col h-full"
            >
              <div className={`w-14 h-14 rounded-2xl ${course.bg} flex items-center justify-center ${course.color} mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <course.icon size={28} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">{course.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 font-light flex-grow">
                {course.desc}
              </p>
              
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                Start Learning <ArrowRight size={14} />
              </div>

              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <ExternalLink size={18} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
