import { motion } from 'motion/react';
import { Mail, MessageSquare, Send, Facebook, Github, Linkedin, Instagram, Youtube } from 'lucide-react';

const socials = [
  { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/Roton595', color: 'hover:text-blue-600' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/Rotonvai', color: 'hover:text-white' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/md-mahfujor-rahman-roton-34814b3b8/', color: 'hover:text-blue-500' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/paradoxical_roton/', color: 'hover:text-pink-500' },
  { name: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/@MrBonGTuBE', color: 'hover:text-red-600' },
];

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-gradient-to-t from-[#0a0a0a] to-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4 block">09 / Connection</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Let's Build <br /><span className="text-gradient">Something Great</span></h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md leading-relaxed">
              Have a project in mind or just want to say hi? My inbox is always open for creative collaborations.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6 p-6 glass rounded-2xl group hover:bg-white/5 transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-gray-500 block mb-1">Email Me</span>
                  <span className="text-lg font-medium">roton@example.com</span>
                </div>
              </div>
              <div className="flex items-center gap-6 p-6 glass rounded-2xl group hover:bg-white/5 transition-all">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:scale-110 transition-transform">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-gray-500 block mb-1">Social Media</span>
                  <div className="flex gap-4 mt-2">
                    {socials.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        className={`text-gray-400 transition-colors ${social.color}`}
                        aria-label={social.name}
                      >
                        <social.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[3rem]"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 ml-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 ml-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500/50 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 ml-2">Subject</label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 ml-2">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500/50 transition-all resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20"
              >
                Send Message <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
