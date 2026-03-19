import { motion } from 'motion/react';
import { ExternalLink, Globe, Layout, Smartphone, Zap, Shield, Code } from 'lucide-react';

const projects = [
  { 
    name: 'Singair Bloodline', 
    url: 'https://singair-bloodline.vercel.app/', 
    desc: 'A blood donation management platform for the Singair community.',
    icon: Shield,
    color: 'text-red-500',
    bg: 'bg-red-500/10'
  },
  { 
    name: 'Learn N5 Japanese', 
    url: 'https://rotonvai.github.io/learnn5bd/', 
    desc: 'Interactive platform for learning Japanese N5 level vocabulary and grammar.',
    icon: Globe,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10'
  },
  { 
    name: 'Tic-Tac-Toe', 
    url: 'https://rotonvai.github.io/Tic-Tac-Toe/', 
    desc: 'A classic game built with modern web technologies and smooth animations.',
    icon: Zap,
    color: 'text-yellow-500',
    bg: 'bg-yellow-500/10'
  },
  { 
    name: 'QuickNotes', 
    url: 'https://rotonvai.github.io/AlFAA-Note/', 
    desc: 'Fast and efficient note-taking application for digital productivity.',
    icon: Layout,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10'
  },
  { 
    name: 'To-Do List', 
    url: 'https://rotonvai.github.io/To-Do_list/', 
    desc: 'Simple yet powerful task management tool to stay organized.',
    icon: Smartphone,
    color: 'text-purple-500',
    bg: 'bg-purple-500/10'
  },
  { 
    name: 'QR Code Generator', 
    url: 'https://rotonvai.github.io/QR/', 
    desc: 'Instantly generate custom QR codes for links and text.',
    icon: Code,
    color: 'text-pink-500',
    bg: 'bg-pink-500/10'
  },
];

export function Websites() {
  return (
    <section id="websites" className="py-32 px-6 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-400 font-mono text-sm tracking-[0.3em] uppercase mb-4 block">04 / Digital Ecosystem</span>
            <h2 className="text-3xl md:text-7xl font-bold tracking-tighter">
              My <span className="text-gradient">Websites</span>
            </h2>
            <p className="text-gray-500 mt-6 max-w-2xl text-lg font-light">
              A collection of live web applications and tools I've built to solve real-world problems.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-[2.5rem] group relative overflow-hidden"
            >
              <div className={`w-14 h-14 rounded-2xl ${project.bg} flex items-center justify-center ${project.color} mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <project.icon size={28} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{project.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 font-light">
                {project.desc}
              </p>
              
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                Visit Website <ExternalLink size={14} />
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
