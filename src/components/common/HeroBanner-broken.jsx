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
              index === currentSlide
                ? "bg-white scale-125 shadow-lg"
                : "bg-white/30 hover:bg-white/50 scale-100"
            }`}
          />
        ))}
      </div>ckIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as StarSolidIcon } from "@heroicons/react/24/solid";
import SupplementIcons from "../icons/SupplementIcons";

/**
 * HERO BANNER COM CARROSSEL DE IMAGENS REAIS E SISTEMA ORBITAL DE SUPLEMENTOS
 *
 * Para adicionar novas imagens:
 * 1. Coloque a imagem na pasta: src/assets/
 * 2. Descomente um dos slots no array backgroundSlides
 * 3. Atualize o caminho da imagem, título, categoria, etc.
 * 4. A imagem será exibida SEM OVERLAYS - totalmente visível
 *
 * Formatos recomendados: .webp, .jpg, .png
 * Tamanho recomendado: 1920x1080 ou maior
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

  // Auto-slide effect - 4 segundos para testar mais rapidamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = (prev + 1) % backgroundSlides.length;
        console.log(`Mudando slide de ${prev} para ${nextSlide}`);
        return nextSlide;
      });
    }, 2000); // Diminuído para 2000ms para testar mais rapidamente
    return () => clearInterval(interval);
  }, [backgroundSlides.length]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white min-h-[600px] lg:min-h-[700px]">
      {/* Efeito de nebulosa de fundo */}
      <div className="hero-nebula"></div>
      
      {/* Efeito de brilho sutil */}
      <div className="hero-glow"></div>
      
      {/* Partículas flutuantes */}
      <div className="hero-particles"></div>
      
      {/* Carrossel de Banners Profissional com Imagens Reais */}
      <div className="absolute inset-0 z-0 carousel-container">
        {/* Overlay para transição suave */}
        <div className="carousel-overlay"></div>
        
        {/* Máscara para efeito premium */}
        <div className="carousel-mask"></div>
        
        {/* Partículas flutuantes */}
        <div className="carousel-particles">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="carousel-particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {backgroundSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide ${
              index === currentSlide
                ? "carousel-slide-active"
                : "carousel-slide-exit"
            }`}
          >
            {/* Imagem de fundo do produto - totalmente visível */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center brightness-100"
                style={{
                  animation:
                    index === currentSlide
                      ? "smoothZoomRotate 15s ease-in-out infinite alternate"
                      : "none",
                }}
              />
            </div>

            {/* Overlay gradiente sutil */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>

            {/* Info do produto no canto inferior direito */}
            <div
              className="absolute bottom-8 right-8 bg-black/20 backdrop-blur-xl rounded-2xl p-4 border border-white/10 transform translate-y-full opacity-0 transition-all duration-1000 delay-700"
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

      {/* Indicadores do carrossel profissionais */}
      <div className="carousel-indicators">
        {backgroundSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`carousel-indicator ${
              index === currentSlide ? "active" : ""
            }`}
          />
        ))}
      </div>

      {/* Container principal */}
      <div className="container-custom relative z-10">
        <div className="flex items-center justify-center min-h-[600px] lg:min-h-[700px] py-20">
          {/* Logo Central Premium com efeitos sofisticados */}
          <div className="relative">
            {/* Efeito de borda gradiente */}
            <div className="logo-gradient-border"></div>
            
            {/* Círculo principal com glassmorphism e movimento */}
            <div className="w-80 h-80 lg:w-96 lg:h-96 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 shadow-2xl relative group hero-logo-container">
              {/* Anel animado externo com rotação */}
              <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 p-[2px] hero-ring-animation">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-900/90 to-blue-900/90 backdrop-blur-xl"></div>
              </div>

              {/* Anel intermediário com rotação oposta */}
              <div
                className="absolute inset-2 rounded-full border border-white/20 hero-ring-animation"
                style={{
                  animationDirection: "reverse",
                  animationDuration: "10s",
                }}
              ></div>

              {/* Container da logo com ajuste de centralização */}
              <div className="relative z-10 w-64 h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden bg-gradient-to-br from-white/20 to-white/5 p-6 flex items-center justify-center border border-white/30 logo-hover-effect">
                {/* Efeitos de energia sutil com animação */}
                <div className="absolute inset-0 rounded-full border border-white/20 pulse-ring"></div>
                <div
                  className="absolute inset-0 rounded-full border border-blue-400/30 pulse-ring"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute inset-0 rounded-full border border-purple-400/20 pulse-ring"
                  style={{ animationDelay: "2s" }}
                ></div>

                {/* Logo com ajuste de centralização considerando que está torta */}
                <div className="w-full h-full rounded-full overflow-hidden relative transform translate-x-1 translate-y-1">
                  <img
                    src="/src/assets/logol2.jpeg"
                    alt="L2 Suplementos Logo"
                    className="w-full h-full object-cover rounded-full filter brightness-110 contrast-110 transition-all duration-700 group-hover:scale-105 group-hover:brightness-125"
                    style={{
                      objectPosition: "center center",
                      objectFit: "cover",
                    }}
                  />

                  {/* Overlay de brilho premium com movimento */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  {/* Efeito de rotação sutil no hover */}
                  <div
                    className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-400/0 via-purple-400/30 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-spin"
                    style={{ animationDuration: "8s" }}
                  ></div>
                </div>
              </div>

              {/* Partículas flutuantes minimalistas com movimento */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-8 left-8 w-1 h-1 bg-blue-400 rounded-full float-particle opacity-60"></div>
                <div
                  className="absolute top-12 right-16 w-1 h-1 bg-purple-400 rounded-full float-particle opacity-70"
                  style={{ animationDelay: "2s" }}
                ></div>
                <div
                  className="absolute bottom-16 left-12 w-1 h-1 bg-emerald-400 rounded-full float-particle opacity-50"
                  style={{ animationDelay: "4s" }}
                ></div>
                <div
                  className="absolute bottom-8 right-8 w-1 h-1 bg-yellow-400 rounded-full float-particle opacity-65"
                  style={{ animationDelay: "6s" }}
                ></div>
                <div
                  className="absolute top-1/2 left-4 w-1 h-1 bg-pink-400 rounded-full float-particle opacity-55"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute top-1/2 right-4 w-1 h-1 bg-cyan-400 rounded-full float-particle opacity-75"
                  style={{ animationDelay: "3s" }}
                ></div>
                <div
                  className="absolute top-1/4 left-1/4 w-1 h-1 bg-orange-400 rounded-full float-particle opacity-60"
                  style={{ animationDelay: "5s" }}
                ></div>
                <div
                  className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-indigo-400 rounded-full float-particle opacity-70"
                  style={{ animationDelay: "7s" }}
                ></div>
              </div>
            </div>

            {/* Sistema Orbital de Suplementos - Estilo Premium */}
            <div className="absolute inset-0 pointer-events-none supplement-orbital-system">
              {/* Órbita 1 - Whey Protein (órbita mais próxima) */}
              <div className="absolute inset-0 supplement-orbit-1">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute pointer-events-auto supplement-element-1">
                    <div className="group cursor-pointer">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center shadow-xl hover:shadow-red-500/50 hover:scale-110 transition-all duration-500 border-2 border-white/30 hover:border-red-300 relative overflow-hidden orbital-glow">
                        <SupplementIcons.WheyProtein className="w-12 h-12 lg:w-14 lg:h-14" />
                      </div>

                      {/* Tooltip */}
                      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-white/20 z-50">
                        Whey Protein
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Órbita 2 - Creatina (órbita média) */}
              <div className="absolute inset-0 supplement-orbit-2">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute pointer-events-auto supplement-element-2">
                    <div className="group cursor-pointer">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center shadow-xl hover:shadow-blue-500/50 hover:scale-110 transition-all duration-500 border-2 border-white/30 hover:border-blue-300 relative overflow-hidden orbital-glow">
                        <SupplementIcons.Creatine className="w-12 h-12 lg:w-14 lg:h-14" />
                      </div>

                      {/* Tooltip */}
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-white/20 z-50">
                        Creatina
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Órbita 3 - Pré-Treino (órbita externa) */}
              <div className="absolute inset-0 supplement-orbit-3">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute pointer-events-auto supplement-element-3">
                    <div className="group cursor-pointer">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center shadow-xl hover:shadow-orange-500/50 hover:scale-110 transition-all duration-500 border-2 border-white/30 hover:border-orange-300 relative overflow-hidden orbital-glow">
                        <SupplementIcons.PreWorkout className="w-12 h-12 lg:w-14 lg:h-14" />
                      </div>

                      {/* Tooltip */}
                      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-white/20 z-50">
                        Pré-Treino
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Órbita 4 - BCAA (órbita rápida interna) */}
              <div className="absolute inset-0 supplement-orbit-4">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute pointer-events-auto supplement-element-4">
                    <div className="group cursor-pointer">
                      <div className="w-14 h-14 lg:w-16 lg:h-16 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center shadow-xl hover:shadow-purple-500/50 hover:scale-110 transition-all duration-500 border-2 border-white/30 hover:border-purple-300 relative overflow-hidden orbital-glow">
                        <SupplementIcons.BCAA className="w-10 h-10 lg:w-12 lg:h-12" />
                      </div>

                      {/* Tooltip */}
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-white/20 z-50">
                        BCAA
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Órbita 5 - Multivitamínico (órbita lenta externa) */}
              <div className="absolute inset-0 supplement-orbit-5">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute pointer-events-auto supplement-element-5">
                    <div className="group cursor-pointer">
                      <div className="w-14 h-14 lg:w-16 lg:h-16 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center shadow-xl hover:shadow-green-500/50 hover:scale-110 transition-all duration-500 border-2 border-white/30 hover:border-green-300 relative overflow-hidden orbital-glow">
                        <SupplementIcons.Multivitamin className="w-10 h-10 lg:w-12 lg:h-12" />
                      </div>

                      {/* Tooltip */}
                      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-white/20 z-50">
                        Multivitamínico
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Órbita 6 - Queimador (órbita intermediária) */}
              <div className="absolute inset-0 supplement-orbit-6">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute pointer-events-auto supplement-element-6">
                    <div className="group cursor-pointer">
                      <div className="w-14 h-14 lg:w-16 lg:h-16 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center shadow-xl hover:shadow-red-500/50 hover:scale-110 transition-all duration-500 border-2 border-white/30 hover:border-red-300 relative overflow-hidden orbital-glow">
                        <SupplementIcons.FatBurner className="w-10 h-10 lg:w-12 lg:h-12" />
                      </div>

                      {/* Tooltip */}
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-white/20 z-50">
                        Queimador
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Partículas decorativas */}
              <div className="absolute inset-0 supplement-particles">
                <div className="absolute supplement-particle-1">
                  <div className="w-2 h-2 bg-blue-400/60 rounded-full orbital-glow-small"></div>
                </div>
                <div className="absolute supplement-particle-2">
                  <div className="w-1.5 h-1.5 bg-purple-400/60 rounded-full orbital-glow-small"></div>
                </div>
                <div className="absolute supplement-particle-3">
                  <div className="w-2 h-2 bg-emerald-400/60 rounded-full orbital-glow-small"></div>
                </div>
                <div className="absolute supplement-particle-4">
                  <div className="w-1 h-1 bg-yellow-400/60 rounded-full orbital-glow-small"></div>
                </div>
                <div className="absolute supplement-particle-5">
                  <div className="w-1.5 h-1.5 bg-orange-400/60 rounded-full orbital-glow-small"></div>
                </div>
                <div className="absolute supplement-particle-6">
                  <div className="w-1 h-1 bg-red-400/60 rounded-full orbital-glow-small"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action inferior */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full font-bold text-lg flex items-center space-x-3 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-white/20">
              <SparklesIcon className="w-6 h-6" />
              <span>EXPLORAR PRODUTOS</span>
              <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>

            <div className="flex items-center space-x-2 text-white/80">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <StarSolidIcon key={i} className="w-4 h-4 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm">4.9/5 • +50k clientes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Slide atual info - canto inferior esquerdo com informações do produto */}
      <div className="absolute bottom-6 left-6 z-20">
        <div className="bg-black/20 backdrop-blur-xl rounded-xl p-4 border border-white/20 transition-all duration-500 hover:scale-105 hover:bg-black/30">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
            <div>
              <div className="text-xs text-white/60 mb-1">
                Produto em Destaque
              </div>
              <div className="text-sm font-bold text-white transition-all duration-300">
                {backgroundSlides[currentSlide].title}
              </div>
              <div className="text-xs text-white/80">
                {backgroundSlides[currentSlide].subtitle}
              </div>
              <div className="text-xs text-blue-200 mt-1">
                Categoria: {backgroundSlides[currentSlide].category}
              </div>
            </div>
          </div>

          {/* Barra de progresso do slide */}
          <div className="mt-3 w-full h-1 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-4000 ease-linear"
              style={{
                width: "100%",
                animation: "slideProgress 8s linear infinite",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
