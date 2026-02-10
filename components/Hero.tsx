'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax effect for background
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <header ref={ref} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <motion.div 
        style={{ y, scale: 1.1 }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDR-3QZoYuY5rfV2Jr2aMfCYiaxjcsI7K5i8kA-C3V84Rjowc_PZiqh_sucUETClNJbJMpGm7XXqemz6VA2kqzEy6z3pYmsPzob1WZq1ra2Z48tMZoGBjryg5F3Ke3oiv9iadfctqfBJSSUu2TL6n8L1JflHwOxv05a4WuGoTombptWDUh66W7XN9GCp2rAS58EManEttenzTJ2hY6jTkUzwfLrnyOlvUwP47G0gazL5WYtdtiQwelGABRDqSKbSdkxO-KNpsFIbVw9" 
          alt="Modern architectural structure" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-white text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-tight mb-8 drop-shadow-lg"
        >
          Transformando <span className="text-primary italic font-normal">Espaços</span> em <span className="text-primary italic font-normal">Arte</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/90 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-10"
        >
          A fusão entre <span className="text-primary font-medium">minimalismo</span>, <span className="text-primary font-medium">luxo</span> e funcionalidade para criar ambientes que contam a sua história.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#portfolio"
            className="bg-gold-gradient text-white px-10 py-4 rounded-full font-medium tracking-widest uppercase text-sm hover:shadow-xl hover:shadow-primary/20 transition-all flex items-center group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Conheça Meus Projetos
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </motion.div>
      </div>

      <motion.div 
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ChevronDown size={32} />
      </motion.div>
    </header>
  );
};