'use client';

import React from 'react';
import { Home, Building2, Armchair } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Residencial",
      desc: "Criação de lares luxuosos que priorizam o bem-estar e a integração com a natureza."
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Comercial",
      desc: "Espaços corporativos que inspiram produtividade e refletem a identidade da sua marca."
    },
    {
      icon: <Armchair className="w-8 h-8" />,
      title: "Interiores",
      desc: "Design de interiores minucioso com curadoria de mobiliário e iluminação cênica."
    }
  ];

  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden bg-background-light">
      {/* Background Blurs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-20">
        <Reveal width="100%" className="flex flex-col items-center">
          <span className="text-primary font-semibold tracking-widest uppercase text-sm block mb-4">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900">Nossas <span className="text-primary italic font-normal">Soluções</span></h2>
        </Reveal>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Reveal key={index} delay={0.2 + (index * 0.2)} className="h-full">
            <div className="liquid-glass p-10 rounded-2xl group hover:-translate-y-2 transition-all duration-500 h-full flex flex-col items-start border border-white/40">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-300">
                <div className="text-primary group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-light mb-4 text-slate-900">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                {service.desc}
              </p>
              <div className="w-12 h-1 bg-primary/20 rounded-full group-hover:w-full transition-all duration-500" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
