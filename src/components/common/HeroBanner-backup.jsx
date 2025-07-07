import React, { useState, useEffect } from "react";
import {
  ArrowRightIcon,
  PlayIcon,
  SparklesIcon,
  FireIcon,
  StarIcon,
  TruckIcon,
  CurrencyDollarIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as StarSolidIcon } from "@heroicons/react/24/solid";
import SupplementIcons from "../icons/SupplementIcons";

/**
 * HERO BANNER COM CARROSSEL DE IMAGENS REAIS E SISTEMA ORBITAL DE SUPLEMENTOS
 */

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slides do carrossel de fundo com imagens reais - CAMINHOS CORRIGIDOS
  const backgroundSlides = [
    {
      id: 1,
      image: "/creatina.webp",
      title: "Creatina Monohidratada",
      subtitle: "Força e performance máxima",
      color: "from-blue-600 to-purple-700",
      category: "Creatina",
    },
    {
      id: 2,
      image: "/integral capa.png",
      title: "Integral Médica",
      subtitle: "Linha premium nacional",
      color: "from-emerald-600 to-teal-700",
      category: "Proteínas",
    },
    {
      id: 3,
      image: "/black-skull.webp",
      title: "Black Skull",
      subtitle: "Suplementos de alta performance",
      color: "from-gray-800 to-black",
      category: "Pré-Treino",
    },
    {
      id: 4,
      image: "/probiotica.jpg",
      title: "Probiótica",
      subtitle: "Tradição e qualidade",
      color: "from-green-600 to-emerald-700",
      category: "Proteínas",
    },
    {
      id: 5,
      image: "/probiotica.webp",
      title: "Probiótica",
      subtitle: "Suplementos de qualidade",
      color: "from-indigo-600 to-blue-700",
      category: "Vitaminas",
    },
  ];

  // Auto-slide effect - 3 segundos para testar
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
      {/* Carrossel de Banners com Imagens Reais */}
      <div className="absolute inset-0 z-0">
        {backgroundSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide ${
              index === currentSlide
                ? "carousel-slide-active"
                : "carousel-slide-exit"
            }`}
          >
            {/* Imagem de fundo do produto */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center brightness-100"
                style={{
                  animation:
                    index === currentSlide
                      ? "slowZoomRotate 12s ease-in-out infinite alternate"
                      : "none",
                }}
              />
            </div>

            {/* Overlay gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>

            {/* Info do produto no canto inferior direito */}
            <div
              className="absolute bottom-8 right-8 bg-black/20 backdrop-blur-xl rounded-2xl p-4 border border-white/10 transform transition-all duration-1000"
              style={{
                transform:
                  index === currentSlide ? "translateY(0)" : "translateY(100%)",
                opacity: index === currentSlide ? 1 : 0,
              }}
            >
              <div className="text-white">
                <div className="text-xs text-white/60 mb-1">Categoria</div>
                <div className="text-sm font-bold">{slide.category}</div>
                <div className="text-xs text-white/80 mt-1">
                  {slide.subtitle}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicadores do carrossel */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {backgroundSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 border-2 border-white/50 ${
              index === currentSlide
                ? "bg-white scale-125 shadow-lg"
                : "bg-white/30 hover:bg-white/50 scale-100"
            }`}
          />
        ))}
      </div>

      {/* Container principal */}
      <div className="container-custom relative z-10">
        <div className="flex items-center justify-center min-h-[600px] lg:min-h-[700px] py-20">
          {/* Logo Central Premium com efeitos sofisticados */}
          <div className="relative">
            {/* Círculo principal com glassmorphism */}
            <div className="w-80 h-80 lg:w-96 lg:h-96 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 shadow-2xl relative group">
              {/* Logo */}
              <div className="relative z-20">
                <img
                  src="/ff1029ca-c8ba-4ddf-8970-800a4b712870.png"
                  alt="L2 Suplementos"
                  className="w-40 h-40 lg:w-48 lg:h-48 rounded-full object-cover border-4 border-white/30 shadow-2xl"
                />
              </div>

              {/* Sistema orbital simples */}
              <div className="absolute inset-0">
                {/* Órbitas simples */}
                {[1, 2, 3, 4, 5].map((orbit) => (
                  <div 
                    key={orbit} 
                    className={`absolute w-4 h-4 bg-blue-400 rounded-full opacity-80 animate-pulse`}
                    style={{
                      top: `${20 + orbit * 15}%`,
                      left: `${20 + orbit * 10}%`,
                      animationDelay: `${orbit * 0.5}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Texto sobre o logo */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 text-center z-20">
        <div className="text-lg font-medium text-white/80 mb-2">
          Produto em Destaque
        </div>
        <div className="text-3xl font-bold text-white mb-2">
          {backgroundSlides[currentSlide]?.title}
        </div>
        <div className="text-white/70 mb-6">
          {backgroundSlides[currentSlide]?.subtitle}
        </div>
        
        {/* Botões de ação */}
        <div className="flex items-center justify-center space-x-4">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
            <SparklesIcon className="w-5 h-5" />
            <span>EXPLORAR PRODUTOS</span>
            <ArrowRightIcon className="w-5 h-5" />
          </button>
          
          <div className="flex items-center space-x-2 text-yellow-400">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <StarSolidIcon key={i} className="w-5 h-5" />
              ))}
            </div>
            <span className="text-white font-medium">4.9/5</span>
            <span className="text-white/60">• +50k clientes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
