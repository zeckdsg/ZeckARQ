import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projetos', href: '#portfolio' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`glass flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${isScrolled ? 'bg-white/70 shadow-md' : ''}`}>
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center shadow-lg shadow-primary/30">
              <span className="text-white font-bold text-xl font-display">A</span>
            </div>
            <span className="text-lg font-light tracking-[0.2em] uppercase text-slate-800 hidden sm:block">
              Arquiteto
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-10 text-xs font-medium tracking-widest uppercase">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className={`hover:text-primary transition-colors ${link.name === 'Contato' ? 'px-5 py-2 border border-primary/30 hover:bg-primary hover:text-white rounded-full' : 'text-slate-600'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <button 
            className="md:hidden text-slate-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-100 px-6 py-4 shadow-xl"
          >
            <div className="flex flex-col space-y-4 text-center">
               {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium tracking-widest uppercase text-slate-600 py-2 hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};