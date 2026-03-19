/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState, Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Lenis from 'lenis';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Services } from './components/sections/Services';
import { CreativeHub } from './components/sections/CreativeHub';
import { Poetry } from './components/sections/Poetry';
import { Stories } from './components/sections/Stories';
import { Blog } from './components/sections/Blog';
import { Websites } from './components/sections/Websites';
import { Courses } from './components/sections/Courses';
import { Awards } from './components/sections/Awards';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { Navbar } from './components/Navbar';
import { Scene3D } from './components/3d/Scene3D';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    // Expose lenis globally for other components to use
    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-purple-500/30 overflow-x-hidden">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold tracking-tighter text-gradient mb-2">ROTON</h1>
              <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  className="w-full h-full bg-gradient-to-r from-purple-500 to-blue-500"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed inset-0 z-0 pointer-events-none">
        <Scene3D />
      </div>

      <Navbar />

      <main className="relative z-10 overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Services />
        <CreativeHub />
        <Poetry />
        <Stories />
        <Blog />
        <Websites />
        <Courses />
        <Awards />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
