import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-32 px-6 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden aspect-[4/5] glass p-1">
            <img
              src="https://i.postimg.cc/d0GwSJbT/image.png"
              alt="MD Mahfujor Rahman Roton"
              className="w-full h-full object-cover rounded-[22px]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -z-10" />
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-purple-500 font-mono text-sm tracking-widest uppercase mb-4 block">01 / About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            A Journey of <span className="text-gradient">Curiosity</span> & <span className="text-gradient">Creation</span>
          </h2>
          
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
            <p>
              Hi, I'm <span className="text-white font-medium">MD Mahfujor Rahman Roton</span>, a passionate and creative student currently studying in Class XI at Singair Govt. College. Having successfully passed my SSC examination, I continue to learn and grow through both academic learning and practical experience in the digital world.
            </p>
            <p>
              I come from a humble background, yet I strongly believe that creativity and innovation can grow anywhere with curiosity and dedication. I specialize in building digital solutions that solve problems and inspire people.
            </p>
            <p>
              From crafting modern websites to experimenting with game development and app design, I am always eager to explore the latest technologies. Whether it’s front-end development or backend logic, I strive to push boundaries and bring ideas to life.
            </p>
            <p>
              With a deep interest in storytelling and user experience, I aim to blend design and functionality to create impactful, engaging platforms that people love to use.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8">
            <div className="glass p-6 rounded-2xl">
              <span className="text-3xl font-bold text-white block mb-1">PSC</span>
              <span className="text-gray-500 text-sm uppercase tracking-wider">Vakum Joymontop govt. primary School</span>
            </div>
            <div className="glass p-6 rounded-2xl">
              <span className="text-3xl font-bold text-white block mb-1">SSC</span>
              <span className="text-gray-500 text-sm uppercase tracking-wider">Joymontop High School</span>
            </div>
            <div className="glass p-6 rounded-2xl">
              <span className="text-3xl font-bold text-white block mb-1">Class XI</span>
              <span className="text-gray-500 text-sm uppercase tracking-wider">Singair Govt. College</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
