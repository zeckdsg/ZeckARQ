'use client';

import React from 'react';
import { Reveal } from './ui/Reveal';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 lg:py-32 px-6 lg:px-12 bg-white overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 opacity-50 skew-x-12 translate-x-32" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative group">
            <Reveal delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 border-2 border-primary/20 rounded-xl translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6" />
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo5bGsvISAXDGtzdIlgCncxUsjYxTN-4-FhCB6u8Spd4llUY7L6gnaifK7W3i-mGHcaI6zO55rW6jdCTRgILAbomkRdkUgGk67tijH7Ej6jX0vDgEUg7bOblsCAGOpSGJwAY5bUcxFfKjUReV6d8Nu_lh5yiR1YFRPeFhflflQNQCngMjHpNtIWXKjPE457o-NsLD1HikvjVMcZ1TntRw1VZpsbhxl7iqXmGwvyLgY-2c30bpuGJRLmTdt6MkadGNpBy_3M19bC_6B" 
                  alt="Professional Architect Portrait" 
                  className="rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover aspect-[4/5]"
                />
              </div>
            </Reveal>
          </div>

          <div className="space-y-8">
            <div>
              <Reveal>
                <span className="text-primary font-semibold tracking-widest uppercase text-sm block mb-4">Sobre Mim</span>
              </Reveal>
              <Reveal delay={0.4}>
                <h2 className="text-4xl md:text-5xl font-light text-slate-900 leading-tight">Inovação e <span className="text-primary italic font-normal">Sofisticação</span> no DNA</h2>
              </Reveal>
            </div>
            
            <Reveal delay={0.6}>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-light">
                <p>
                  Com mais de uma década dedicada à <span className="text-slate-900 font-medium">arquitetura de luxo</span>, meu trabalho busca o equilíbrio perfeito entre a estética atemporal e as necessidades contemporâneas. Acredito que cada metro quadrado deve ter um <span className="text-primary">propósito</span> e uma <span className="text-primary">alma</span>.
                </p>
                <p>
                  Meus projetos são pautados pela sustentabilidade e pelo uso inteligente de materiais nobres, garantindo que o design não seja apenas visual, mas uma experiência sensorial completa.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.8}>
              <div className="pt-6 flex gap-12 border-t border-slate-100">
                <div>
                  <span className="block text-4xl font-light text-primary mb-1">150+</span>
                  <span className="text-xs uppercase tracking-widest text-slate-500">Projetos Entregues</span>
                </div>
                <div>
                  <span className="block text-4xl font-light text-primary mb-1">12</span>
                  <span className="text-xs uppercase tracking-widest text-slate-500">Prêmios Design</span>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};