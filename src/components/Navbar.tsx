import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Search, ArrowRight } from 'lucide-react';
import { searchData, SearchItem } from '../constants/searchData';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Poetry', href: '#poetry' },
  { name: 'Blog', href: '#blog' },
  // { name: 'Posters', href: '#posters' },
  { name: 'Courses', href: '#courses' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<SearchItem[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const lenis = (window as any).lenis;
    if (isSearchOpen) {
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
  }, [isSearchOpen]);

  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const filtered = searchData.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  const handleSuggestionClick = (href: string) => {
    (window as any).lenis?.scrollTo(href);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'}`}>
      {/* Search Backdrop */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setIsSearchOpen(false);
              setSearchQuery('');
            }}
            className="fixed inset-0 bg-black/60 backdrop-blur-xl z-[-1]"
          />
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between min-h-[60px]">
        <AnimatePresence mode="wait">
          {!isSearchOpen ? (
            <motion.div
              key="nav-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-between w-full"
            >
              <motion.a
                href="#home"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center group shrink-0"
              >
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-black tracking-tighter text-white group-hover:text-emerald-400 transition-colors">
                    ROTON
                  </span>
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2" 
                  />
                </div>
              </motion.a>

              <div className="hidden lg:flex items-center gap-2 glass p-1.5 rounded-full border-white/5 mx-4">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => (window as any).lenis?.scrollTo(link.href)}
                    className="px-5 py-2 rounded-full text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
                  >
                    {link.name}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all cursor-pointer"
                >
                  <Search size={20} />
                </button>

                <div className="hidden lg:block">
                  <motion.button
                    onClick={() => (window as any).lenis?.scrollTo('#contact')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2.5 bg-white text-black rounded-full text-sm font-bold transition-colors hover:bg-gray-200 cursor-pointer"
                  >
                    Let's Talk
                  </motion.button>
                </div>

                <button
                  className="lg:hidden text-white p-2"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="search-bar"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="relative flex items-center w-full gap-4 glass p-2 rounded-2xl border-white/10"
            >
              <div className="flex items-center flex-1 px-4 gap-3">
                <Search size={20} className="text-emerald-500" />
                <input
                  ref={searchInputRef}
                  autoFocus
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for projects, blogs, or skills..."
                  className="w-full bg-transparent border-none outline-none text-white placeholder:text-gray-500 text-lg font-light"
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') {
                      setIsSearchOpen(false);
                      setSearchQuery('');
                    }
                  }}
                />
              </div>
              <button
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery('');
                }}
                className="p-3 text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-all cursor-pointer"
              >
                <X size={20} />
              </button>

              {/* Suggestions Dropdown */}
              <AnimatePresence>
                {suggestions.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-full mt-4 glass rounded-3xl border border-white/10 overflow-hidden shadow-2xl backdrop-blur-2xl z-[60]"
                  >
                    <div className="p-4">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-4 block px-4">Suggestions</span>
                      <div className="space-y-2">
                        {suggestions.map((item, index) => (
                          <button
                            key={`${item.title}-${index}`}
                            onClick={() => handleSuggestionClick(item.href)}
                            className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-all group text-left"
                          >
                            <div className="flex flex-col">
                              <span className="text-white font-medium group-hover:text-emerald-400 transition-colors">{item.title}</span>
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] uppercase tracking-widest text-emerald-500/60">{item.category}</span>
                                {item.description && (
                                  <>
                                    <span className="text-gray-700">•</span>
                                    <span className="text-xs text-gray-500">{item.description}</span>
                                  </>
                                )}
                              </div>
                            </div>
                            <ArrowRight size={16} className="text-gray-600 group-hover:text-white transition-all transform group-hover:translate-x-1" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && !isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#050505]/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    (window as any).lenis?.scrollTo(link.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-xl font-bold text-gray-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => {
                  (window as any).lenis?.scrollTo('#contact');
                  setIsMobileMenuOpen(false);
                }}
                className="mt-4 py-3 bg-white text-black text-center rounded-2xl font-bold cursor-pointer text-sm"
              >
                Let's Talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
