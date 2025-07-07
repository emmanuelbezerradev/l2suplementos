import React, { useState, useEffect } from "react";
import {
  ArrowRightIcon,
  SparklesIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as StarSolidIcon } from "@heroicons/react/24/solid";

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slides do carrossel
  const backgroundSlides = [
    {
      id: 1,
      image: "/creatina.webp",
      title: "Creatina Monohidratada",
      subtitle: "Força e performance máxima",
      category: "Creatina",
    },
    {
      id: 2,
      image: "/integral capa.png",
      title: "Integral Médica",
      subtitle: "Linha premium nacional",
      category: "Proteínas",
    },
    {
      id: 3,
      image: "/black-skull.webp",
      title: "Black Skull",
      subtitle: "Suplementos de alta performance",
      category: "Pré-Treino",
    },
    {
      id: 4,
      image: "/probiotica.jpg",
      title: "Probiótica",
      subtitle: "Tradição e qualidade",
      category: "Proteínas",
    },
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = (prev + 1) % backgroundSlides.length;
        console.log(`Mudando slide de ${prev} para ${nextSlide}`);
        return nextSlide;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [backgroundSlides.length]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white min-h-[600px] lg:min-h-[700px]">
      {/* Carrossel de Banners */}
      <div className="absolute inset-0 z-0">
        {backgroundSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
              style={{
                animation:
                  index === currentSlide
                    ? "slowZoom 10s ease-in-out infinite alternate"
                    : "none",
              }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
          </div>
        ))}
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {backgroundSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 border-2 border-white/50 ${
              index === currentSlide
                ? "bg-white scale-125 shadow-lg"
                : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Conteúdo central */}
      <div className="relative z-10 flex items-center justify-center min-h-[600px] lg:min-h-[700px]">
        <div className="text-center max-w-4xl mx-auto px-4">
          {/* Logo */}
          <div className="mb-8">
            <div className="w-40 h-40 lg:w-48 lg:h-48 mx-auto bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 shadow-2xl">
              <img
                src="/ff1029ca-c8ba-4ddf-8970-800a4b712870.png"
                alt="L2 Suplementos"
                className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-white/30"
              />
            </div>
          </div>

          {/* Texto principal */}
          <div className="mb-8">
            <div className="text-lg font-medium text-white/80 mb-2">
              Produto em Destaque
            </div>
            <div className="text-4xl lg:text-5xl font-bold text-white mb-4">
              {backgroundSlides[currentSlide]?.title}
            </div>
            <div className="text-xl text-white/70 mb-6">
              {backgroundSlides[currentSlide]?.subtitle}
            </div>
            <div className="text-sm text-white/60 mb-6">
              Categoria: {backgroundSlides[currentSlide]?.category}
            </div>
          </div>

          {/* Botões e avaliação */}
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-8">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
              <SparklesIcon className="w-6 h-6" />
              <span>EXPLORAR PRODUTOS</span>
              <ArrowRightIcon className="w-6 h-6" />
            </button>
            
            <div className="flex items-center space-x-2 text-yellow-400">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarSolidIcon key={i} className="w-6 h-6" />
                ))}
              </div>
              <span className="text-white font-medium text-lg">4.9/5</span>
              <span className="text-white/60">• +50k clientes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
