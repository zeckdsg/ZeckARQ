'use client';

import React from 'react';
import { Quote, Star } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mariana & Felipe",
      role: "Villa Serena",
      quote: "A sensibilidade em traduzir nosso estilo de vida para o projeto foi impressionante. Cada detalhe da casa traz uma sensação de paz e sofisticação que buscávamos há anos.",
      rating: 5
    },
    {
      id: 2,
      name: "Carlos Eduardo",
      role: "CEO, Nexus Hub",
      quote: "O novo escritório transformou a dinâmica da nossa equipe. O equilíbrio perfeito entre áreas de foco e convivência aumentou nossa produtividade e bem-estar no trabalho.",
      rating: 5
    },
    {
      id: 3,
      name: "Sofia Alencar",
      role: "Restaurante Alquimia",
      quote: "Nossos clientes elogiam a atmosfera tanto quanto a gastronomia. O design de iluminação e o mobiliário criaram uma experiência sensorial única que define nossa marca.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-200/50 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <Reveal width="100%" className="flex flex-col items-center">
             <span className="text-primary font-semibold tracking-widest uppercase text-sm block mb-4">Depoimentos</span>
             <h2 className="text-4xl md:text-5xl font-light text-slate-900 leading-tight">O Que Dizem Nossos <span className="text-primary italic font-normal">Clientes</span></h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.2} className="h-full">
              <div className="bg-background-light p-10 rounded-2xl relative h-full flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 group">
                <Quote className="text-primary/20 w-12 h-12 absolute top-8 right-8 transition-transform duration-500 group-hover:scale-110 group-hover:text-primary/30" />
                
                <div className="flex gap-1 mb-6 relative z-10 pt-2">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-primary fill-primary" />
                  ))}
                </div>

                <p className="text-slate-600 text-lg italic leading-relaxed mb-8 relative z-10 font-light flex-grow">
                  "{t.quote}"
                </p>

                <div className="mt-auto border-t border-slate-200 pt-6">
                  <h4 className="text-slate-900 font-medium text-lg">{t.name}</h4>
                  <p className="text-primary text-xs uppercase tracking-widest mt-1">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};