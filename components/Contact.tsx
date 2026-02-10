'use client';

import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 px-6 lg:px-12 relative overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
          alt="Architectural detail" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-50/90 backdrop-blur-[2px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title Section - Top */}
        <div className="mb-16 text-center lg:text-left">
          <Reveal className="mx-auto lg:mx-0">
            <span className="text-primary font-semibold tracking-widest uppercase text-sm block mb-4">Contato</span>
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-8 max-w-3xl">Vamos dar vida ao seu <span className="text-primary italic font-normal">próximo projeto</span>?</h2>
          </Reveal>
          
          <Reveal delay={0.4} className="mx-auto lg:mx-0">
            <p className="text-slate-600 text-lg max-w-2xl mx-auto lg:mx-0">
              Seja para uma residência privativa ou um empreendimento comercial de grande porte, estou à disposição para discutir sua visão.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Form Section - First in grid flow */}
          <Reveal delay={0.2} width="100%" className="w-full">
            <div className="bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-xl shadow-slate-200/50 border border-white/50 text-left">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-semibold text-slate-500">Nome</label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-0 border-b-2 border-slate-200 focus:ring-0 focus:border-primary transition-colors py-3 px-0 text-slate-900 placeholder:text-slate-300 outline-none" 
                      placeholder="Seu nome"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-semibold text-slate-500">E-mail</label>
                    <input 
                      type="email" 
                      className="w-full bg-transparent border-0 border-b-2 border-slate-200 focus:ring-0 focus:border-primary transition-colors py-3 px-0 text-slate-900 placeholder:text-slate-300 outline-none" 
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-semibold text-slate-500">Tipo de Projeto</label>
                  <select className="w-full bg-transparent border-0 border-b-2 border-slate-200 focus:ring-0 focus:border-primary transition-colors py-3 px-0 text-slate-900 outline-none">
                    <option>Residencial</option>
                    <option>Comercial</option>
                    <option>Interiores</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-semibold text-slate-500">Mensagem</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-transparent border-0 border-b-2 border-slate-200 focus:ring-0 focus:border-primary transition-colors py-3 px-0 text-slate-900 resize-none placeholder:text-slate-300 outline-none" 
                    placeholder="Fale um pouco sobre seu projeto"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gold-gradient text-white py-4 rounded-xl font-bold tracking-widest uppercase text-sm hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Enviar Solicitação
                </button>
              </form>
            </div>
          </Reveal>

          {/* Contact Info Section - Second in grid flow */}
          <div className="space-y-8 lg:pt-8 w-full">
            <div className="space-y-6 max-w-md mx-auto lg:max-w-none lg:mx-0">
              <Reveal delay={0.5} width="100%">
                <div className="flex items-center space-x-6 group cursor-pointer bg-white/80 backdrop-blur-md p-6 rounded-xl border border-white/50 hover:shadow-lg transition-all text-left">
                  <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">E-mail</p>
                    <p className="text-lg text-slate-900 font-medium">contato@arquitetomoderno.com</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.6} width="100%">
                <div className="flex items-center space-x-6 group cursor-pointer bg-white/80 backdrop-blur-md p-6 rounded-xl border border-white/50 hover:shadow-lg transition-all text-left">
                  <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">Escritório</p>
                    <p className="text-lg text-slate-900 font-medium">Av. Paulista, 1000 - São Paulo, SP</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};