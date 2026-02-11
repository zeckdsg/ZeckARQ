'use client';

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 py-16 px-6 lg:px-12 text-slate-400">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 border-b border-white/5 pb-12">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-white font-bold text-xl font-display">A</span>
            </div>
            <span className="text-white text-lg font-light tracking-[0.2em] uppercase">Arquiteto</span>
          </div>
          
          <div className="flex space-x-8 text-sm">
            {['Instagram', 'LinkedIn', 'Behance', 'Pinterest'].map((social) => (
              <a key={social} href="#" className="hover:text-primary transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
        
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs uppercase tracking-widest">
          <p>© 2024 Arquiteto Moderno. Todos os direitos reservados.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
