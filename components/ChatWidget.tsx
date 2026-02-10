'use client';

import React, { useState } from 'react';
import { MessageSquare, Send, Bot, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[100] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 w-80 liquid-glass rounded-2xl p-6 shadow-2xl backdrop-blur-xl bg-slate-900/80 border border-white/10"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Bot size={20} className="text-white" />
                </div>
                <div>
                  <h5 className="text-white text-sm font-semibold">Assistente Virtual</h5>
                  <span className="text-[10px] text-green-400 flex items-center uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5 animate-pulse"></span>
                    Online
                  </span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white">
                <X size={18} />
              </button>
            </div>

            <div className="space-y-4 max-h-60 overflow-y-auto mb-4 text-xs pr-2">
              <div className="bg-white/10 p-3 rounded-lg rounded-tl-none mr-8">
                <p className="text-white/90">Olá! Como posso ajudar você a planejar o seu projeto hoje?</p>
              </div>
              <div className="bg-primary/20 p-3 rounded-lg rounded-tr-none ml-8 text-right">
                <p className="text-white">Gostaria de saber o valor médio por m².</p>
              </div>
            </div>

            <div className="relative">
              <input 
                type="text" 
                placeholder="Digite sua mensagem..." 
                className="w-full bg-white/5 border border-white/10 rounded-full py-2 px-4 text-xs text-white placeholder:text-white/40 focus:ring-1 focus:ring-primary focus:border-transparent outline-none pr-10"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-primary hover:text-white transition-colors">
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gold-gradient rounded-full shadow-2xl flex items-center justify-center text-white relative z-50"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </motion.button>
    </div>
  );
};