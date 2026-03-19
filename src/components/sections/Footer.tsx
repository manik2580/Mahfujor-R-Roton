export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold tracking-tighter text-gradient mb-2">ROTON</h2>
          <p className="text-gray-500 text-sm">মোঃ মাহফুজুর রহমান রতন</p>
        </div>
        
        <div className="flex gap-8 text-gray-500 text-sm font-medium">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="text-center md:text-right">
          <p className="text-gray-500 text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} MD Mahfujor Rahman Roton. <br />
            <span className="opacity-50">All Rights Reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
