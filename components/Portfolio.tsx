import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from './ui/Reveal';
import { ArrowUpRight, X, MapPin, Calendar, Ruler, Layers } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  tag: string;
  description: string;
  location: string;
  year: string;
  area: string;
  gallery: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Villa Serena",
    category: "Residencial Luxo",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBatB51FWkzUuSeYMHvXWmvwL6NqZUfZptKR4BcQLuRxBZqmxQ3BNaNxIvNw1oTfW1VIBKmx2B32c69Lygd1CfLGVZNn3Q9ZNvxUnebt0E4xscsGSb4cV5aFI0Q2ASO1Wxqyn7_IYg9YbRPwKXTk8xiFKpyeutavc3eZEDjgMLQhCp6f5UQLjcnUEjWh0YVzIaHieJD-UBYL2iBcJWkuNfP-3-pMtUsdgNkwrtEXx2kzJzeeuzq587vy5vqhMlyuqgPl4eRf4ggKNwb",
    tag: "minimal",
    description: "Um santuário de paz projetado para se fundir perfeitamente com a paisagem costeira. A Villa Serena utiliza concreto aparente e madeira natural para criar uma atmosfera de luxo despretensioso. As grandes aberturas de vidro dissolvem a barreira entre interior e exterior.",
    location: "Angra dos Reis, RJ",
    year: "2023",
    area: "850m²",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: 2,
    title: "Nexus Hub",
    category: "Comercial",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7-dnp0_KmQtJV5uD6yd1jL5-n2UrgiKCiuXQjC4axLbdd-PQOAqCloLuZeG7pEAIYi6csCvh9EsJZzabP0EDe4eW8Y3HTv1Y1KPSyZckzc3aMRy7d6dwp4wqXKELOzhvAH4lkDtAVYGzsYJMlEX37jUgE4DkYIvfpk59v2J5CMh0a2XTJ8LyMmCUg47Gv3sKbFRZ0f6hbnadsrK1uqgHlPinNdF3ihSC22qHOs_ypkFDF2Pz548iwjiT5diSlbrNFJfZKjAAdz2hD",
    tag: "urbano",
    description: "O Nexus Hub redefine o espaço de trabalho corporativo. Com foco em produtividade e bem-estar, integramos jardins verticais, iluminação circadiana e espaços de descompressão acústica em um design industrial chique.",
    location: "Vila Olímpia, SP",
    year: "2024",
    area: "1.200m²",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: 3,
    title: "Penthouse Loft",
    category: "Interiores",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0OE9pcJspH5-Zycz3SOrqXbhc2i4gXVMmpsFEZla-Tp8blppXTL4hZ_TVrP3JzLV824-uaWr1QpPDJZOvHww050Yz-bsnlB6V7p9oFDtL9QsQPx_-LIhKPcEDprDBlujrhtuzpK439Tvu9OCA6GL8C89PWVy-vcJB5nMftIVb6yPO8VjIo-p6Kploj6vHwp7tjQq5A2J_8ueRqa7eZ2I_YlwlikqwcK5YCTQvNJya0vLt-WHwL46z2nJLv7co90SYGzxZx3boFnKN",
    tag: "minimal",
    description: "Transformação completa de uma cobertura duplex. O conceito open-plan maximiza a luz natural, enquanto a paleta monocromática com texturas ricas cria profundidade e interesse visual sem sobrecarregar os sentidos.",
    location: "Belo Horizonte, MG",
    year: "2022",
    area: "320m²",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: 4,
    title: "Concrete Silence",
    category: "Urbano",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBG37rKIbYDMe874_Fx2etIoqcCcL191g5fyr5_6i5-yQxK_puFItiMy9opcahmpiR4WXtvzU3MBSzOZvXvmJ_DzEC9KjtJtQBbL8aJONJrDz9QVYWqDA-vWVlRGH2HtjSbCgjLwhM5aW0vDNyerGh0Q4q71oiS3Bybd_2OUHolrRowYZsFfTdlCC1V4POdA5oDbbA5bLFCzp7iX0lzAATSid3kRteUeYaMOP7ms1ZWY6fca03Y9Q16KqOUVRZtOkTC0hGR0tYNY3T9",
    tag: "urbano",
    description: "Uma ode ao brutalismo moderno. Esta residência urbana utiliza o concreto como protagonista, aquecido por elementos em madeira ipê e paisagismo tropical denso que invade os ambientes internos.",
    location: "Curitiba, PR",
    year: "2023",
    area: "540m²",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: 5,
    title: "Aqua Retreat",
    category: "Lazer",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmdl-CH1-9JHnuHGbr1I44Y18wapREfu4g_peoiWUwqibKbJODJJIQ1ercrBvgPxoAIDGKabpk4QXiTJTaQj9N3qnFHHfEhWhFEUnYsnVq0cgT53uVe9iC273yJ2snLEBid9Bh0meel5NwOo7Njr1NMvqGH3ewGtu6JCXJbz1ofORm4ZC7I8rvVXrwIflsnh5aVE_aQhSKLSY0IqoLxzwpCzKtAKMuyZgnuloEygfnKWjqwOTJYutYlIEuiybVVnPcS13bXV4C9o9U",
    tag: "minimal",
    description: "Um complexo de lazer privativo onde a água é o elemento central. Piscinas com borda infinita em múltiplos níveis conectam visualmente a arquitetura ao mar, criando uma experiência de resort particular.",
    location: "Trancoso, BA",
    year: "2024",
    area: "1.100m²",
    gallery: [
      "https://images.unsplash.com/photo-1572331165267-854da2b00ca1?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464146804875-537ba24dac96?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: 6,
    title: "The Horizon",
    category: "Residencial",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDs8TCQlycggtr__mH4xXHK-VnMVRtt8jHIHjGKmoob46r-DHA9GU-kChrvHEz7vB7kc9ocT0tC3CNuRe9dt4ROm-sW3LpTYqRSLd6tS7nAhs5Px8CjB7VTC9uDIOD2nXQFk3mhrBehomDMISG41cPxqlvvNyBTCuY6ATNYCTYeRB58JaZkRoQnoqH5rOJ_cycKkWG4fCjuEsKmN1LivSmykY-1xl3T6EvvjjPbA1g-SmgzShk2AZ-egPXEzYlHheeFOy691o5RdYW8",
    tag: "urbano",
    description: "Situado no topo de uma colina, este projeto desafia a gravidade com balanços estruturais ousados. A arquitetura enquadra o horizonte, transformando a vista panorâmica na principal obra de arte da casa.",
    location: "Nova Lima, MG",
    year: "2023",
    area: "720m²",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=2070&auto=format&fit=crop"
    ]
  }
];

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.tag === filter);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedProject]);

  return (
    <section id="portfolio" className="py-24 lg:py-32 px-6 lg:px-12 bg-background-light relative overflow-hidden">
      {/* Background Blobs for Glass Effect */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 relative z-10">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-primary font-semibold tracking-widest uppercase text-sm block mb-4">Portfólio</span>
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 leading-tight">Projetos em <span className="text-primary italic font-normal">Destaque</span></h2>
          </div>
        </Reveal>
        
        <Reveal delay={0.4}>
          <div className="flex space-x-6 text-sm tracking-widest uppercase font-medium">
            {['all', 'urbano', 'minimal'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setFilter(tab)}
                className={`transition-colors pb-1 border-b-2 ${filter === tab ? 'text-primary border-primary' : 'text-slate-400 border-transparent hover:text-slate-900'}`}
              >
                {tab === 'all' ? 'Todos' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              layoutId={`card-${project.id}`}
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedProject(project)}
              className={`group cursor-pointer ${index === 1 || index === 5 ? 'lg:mt-12' : ''} ${index === 3 ? 'lg:-mt-12' : ''}`}
            >
              <div className="liquid-glass p-3 rounded-2xl h-full transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/10">
                <div className="relative overflow-hidden rounded-xl aspect-[4/5] w-full">
                  <motion.img 
                    layoutId={`image-${project.id}`}
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                  />
                  
                  {/* Gradient Glass Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                    <span className="text-primary text-xs tracking-widest uppercase mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100 font-bold">
                      {project.category}
                    </span>
                    <h4 className="text-white text-2xl font-light mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                      {project.title}
                    </h4>
                    <div className="flex items-center text-white text-xs tracking-widest uppercase border-b border-primary/50 self-start pb-1 hover:border-primary transition-colors translate-y-4 group-hover:translate-y-0 duration-500 delay-200 cursor-pointer">
                      Ver Detalhes
                      <ArrowUpRight className="ml-2 w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            
            <motion.div
              layoutId={`card-${selectedProject.id}`}
              className="relative w-full max-w-5xl h-[85vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row overflow-y-auto md:overflow-hidden scrollbar-hide"
            >
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedProject(null); }}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all duration-300 md:text-slate-900 md:bg-white/80"
              >
                <X size={20} />
              </button>

              {/* Left Side: Image */}
              <div className="w-full md:w-1/2 h-64 md:h-full relative shrink-0">
                <motion.img
                  layoutId={`image-${selectedProject.id}`}
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
                <div className="absolute bottom-6 left-6 text-white md:hidden">
                    <span className="text-primary text-xs tracking-widest uppercase font-bold">{selectedProject.category}</span>
                    <h3 className="text-3xl font-light mt-2">{selectedProject.title}</h3>
                </div>
              </div>

              {/* Right Side: Content */}
              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto bg-white flex flex-col">
                <div className="hidden md:block mb-8">
                  <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-primary font-semibold tracking-widest uppercase text-xs"
                  >
                    {selectedProject.category}
                  </motion.span>
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl md:text-5xl font-light text-slate-900 mt-2"
                  >
                    {selectedProject.title}
                  </motion.h3>
                </div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="grid grid-cols-2 gap-4 mb-8 border-y border-slate-100 py-6"
                >
                  <div className="flex items-center gap-3 text-slate-600">
                    <MapPin className="text-primary w-5 h-5" />
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-wider text-slate-400">Localização</span>
                        <span className="text-sm font-medium">{selectedProject.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <Calendar className="text-primary w-5 h-5" />
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-wider text-slate-400">Ano</span>
                        <span className="text-sm font-medium">{selectedProject.year}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <Ruler className="text-primary w-5 h-5" />
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-wider text-slate-400">Área</span>
                        <span className="text-sm font-medium">{selectedProject.area}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <Layers className="text-primary w-5 h-5" />
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-wider text-slate-400">Estilo</span>
                        <span className="text-sm font-medium capitalize">{selectedProject.tag}</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-6"
                >
                  <p className="text-slate-600 leading-relaxed font-light text-lg">
                    {selectedProject.description}
                  </p>
                  
                  <div className="pt-6">
                    <h5 className="text-sm uppercase tracking-widest font-semibold text-slate-900 mb-4">Galeria do Projeto</h5>
                    <div className="grid grid-cols-2 gap-4">
                      {selectedProject.gallery.map((img, i) => (
                        <div key={i} className="rounded-lg overflow-hidden h-32 relative group">
                            <img src={img} alt="Detail" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-auto pt-8"
                >
                   <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-medium uppercase tracking-widest text-xs hover:bg-primary transition-colors duration-300">
                     Agendar Consultoria para este estilo
                   </button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};