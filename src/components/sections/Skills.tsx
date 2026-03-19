import { motion } from 'motion/react';
import { Palette, Layers, Globe, PenTool } from 'lucide-react';

const mainSkills = [
  { name: 'UI/UX Figma Designing', level: 90, color: 'from-purple-500 to-pink-500' },
  { name: 'Python', level: 85, color: 'from-blue-500 to-cyan-500' },
  { name: 'Node.js', level: 80, color: 'from-green-500 to-emerald-500' },
  { name: 'HTML5 & CSS3', level: 95, color: 'from-orange-500 to-red-500' },
  { name: 'JavaScript', level: 88, color: 'from-yellow-400 to-yellow-600' },
  { name: 'C Language', level: 75, color: 'from-blue-600 to-indigo-600' },
  { name: 'GitHub', level: 92, color: 'from-gray-600 to-gray-800' },
];

const subSkills = [
  { name: 'Branding Design', icon: Palette, color: 'text-purple-500' },
  { name: 'UI & UX Design', icon: Layers, color: 'text-blue-500' },
  { name: 'Web Design', icon: Globe, color: 'text-emerald-500' },
  { name: 'Illustration', icon: PenTool, color: 'text-pink-500' },
];

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4 block">02 / Expertise</span>
          <h2 className="text-3xl md:text-6xl font-bold tracking-tight">Technical & Creative <span className="text-gradient">Arsenal</span></h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-white/20" /> Core Technologies
            </h3>
            {mainSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{skill.name}</span>
                  <span className="text-gray-500 font-mono text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className={`h-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-white/20" /> Specialized Disciplines
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {subSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.05)' }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-8 rounded-3xl flex flex-col items-center text-center gap-4 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${skill.color}`}>
                    <skill.icon size={24} />
                  </div>
                  <span className="font-semibold text-lg">{skill.name}</span>
                  <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
                </motion.div>
              ))}
            </div>

            <div className="mt-12 glass p-8 rounded-3xl border-purple-500/20">
              <p className="text-gray-400 italic text-center">
                "I don't just write code; I craft digital experiences that resonate with users on an emotional level."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
