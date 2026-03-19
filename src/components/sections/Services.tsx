import { motion } from 'motion/react';
import { Layout, Palette, Code, Cpu, PenTool, BookOpen } from 'lucide-react';

const services = [
  {
    title: 'Web Design',
    description: 'Crafting visually stunning and highly functional website layouts that captivate audiences.',
    icon: Layout,
    color: 'text-blue-500'
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive user interfaces and seamless experiences focused on user needs.',
    icon: Palette,
    color: 'text-purple-500'
  },
  {
    title: 'Frontend Development',
    description: 'Building responsive, high-performance web applications using modern frameworks.',
    icon: Code,
    color: 'text-emerald-500'
  },
  {
    title: 'Creative Development',
    description: 'Experimenting with 3D elements, animations, and interactive storytelling.',
    icon: Cpu,
    color: 'text-pink-500'
  },
  {
    title: 'Branding Concepts',
    description: 'Developing unique visual identities that tell a powerful brand story.',
    icon: PenTool,
    color: 'text-orange-500'
  },
  {
    title: 'Digital Storytelling',
    description: 'Blending literature and technology to create immersive narrative experiences.',
    icon: BookOpen,
    color: 'text-cyan-500'
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-[#080808] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-4 block">03 / Services</span>
          <h2 className="text-3xl md:text-6xl font-bold tracking-tight">What I <span className="text-gradient">Bring to Life</span></h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-[2.5rem] group transition-all duration-500 hover:border-white/20"
            >
              <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 ${service.color}`}>
                <service.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient transition-all">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
