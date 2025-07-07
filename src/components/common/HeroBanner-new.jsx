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
import SupplementIcon from "../icons/SupplementIcons";

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

  // Slides do carrossel de fundo com imagens reais - ATUALIZADO COM TODAS AS IMAGENS
  const backgroundSlides = [
    {
      id: 1,
      image: "/src/assets/creatina.webp",
      title: "Creatina Monohidratada",
      subtitle: "Força e performance máxima",
      color: "from-blue-600 to-purple-700",
      category: "Creatina",
    },
    {
      id: 2,
      image: "/src/assets/integral capa.png",
      title: "Integral Médica",
      subtitle: "Linha premium nacional",
      color: "from-emerald-600 to-teal-700",
      category: "Proteínas",
    },
    {
      id: 3,
      image: "/src/assets/black-skull.webp",
      title: "Black Skull",
      subtitle: "Suplementos de alta performance",
      color: "from-gray-800 to-black",
      category: "Pré-Treino",
    },
    {
      id: 4,
      image: "/src/assets/probiotica.jpg",
      title: "Probiótica",
      subtitle: "Tradição e qualidade",
      color: "from-green-600 to-emerald-700",
      category: "Proteínas",
    },
    {
      id: 5,
      image: "/src/assets/sharkpro.webp",
      title: "Shark Pro",
      subtitle: "Força dos mares",
      color: "from-indigo-600 to-blue-700",
      category: "Premium",
    },
  ];

  // Auto-slide effect - 6 segundos para melhor visualização das imagens
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundSlides.length);
    }, 6000); // Aumentado de 4000ms para 6000ms
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
      <div className="absolute inset-0 z-0 overflow-hidden">
        {backgroundSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 carousel-slide ${
              index === currentSlide
                ? "opacity-100 scale-100 carousel-slide-active"
                : "opacity-0 scale-105 carousel-slide-exit"
            }`}
            style={{
              transition: "all 2s cubic-bezier(0.4, 0, 0.2, 1)",
              transitionDelay: index === currentSlide ? "0.3s" : "0s",
            }}
          >
            {/* Imagem de fundo do produto - totalmente visível */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center scale-110 brightness-100"
                style={{
                  animation:
                    index === currentSlide
                      ? "slowZoom 8s ease-in-out infinite alternate"
                      : "none",
                }}
              />
            </div>

            {/* Info do produto no canto inferior direito */}
            <div
              className="absolute bottom-8 right-8 bg-black/30 backdrop-blur-lg rounded-2xl p-4 border border-white/20 transform translate-y-full opacity-0 transition-all duration-700 delay-500"
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

      {/* Indicadores do carrossel com animação */}
      <div className="absolute top-6 right-6 z-20 flex space-x-3">
        {backgroundSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 transform hover:scale-125 ${
              index === currentSlide
                ? "bg-white shadow-lg scale-110 indicator-active"
                : "bg-white/40 hover:bg-white/70 scale-100"
            }`}
            style={{
              animation:
                index === currentSlide
                  ? "indicatorGlow 2s ease-in-out infinite"
                  : "none",
            }}
          />
        ))}

        {/* Linha conectora animada */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/20 transform -translate-y-1/2 -z-10">
          <div
            className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-1000 ease-out"
            style={{
              width: `${((currentSlide + 1) / backgroundSlides.length) * 100}%`,
              animation: "gradientShift 3s ease infinite",
            }}
          ></div>
        </div>
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
                      <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-xl hover:shadow-blue-500/50 hover:scale-110 transition-all duration-500 border-2 border-white/30 hover:border-blue-300 relative overflow-hidden orbital-glow">
                        <SupplementIcon type="whey" size={28} color="white" />
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
                      <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 rounded-full flex items-center justify-center shadow-xl hover:shadow-emerald-500/50 hover:scale-110 transition-all duration-500 border-2 border-white/30 hover:border-emerald-300 relative overflow-hidden orbital-glow">
                        <SupplementIcon type="creatina" size={28} color="white" />
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
                      <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 rounded-full flex items-center justify-center shadow-xl hover:shadow-purple-500/50 hover:scale-110 transition-all duration-500 border-2 border-white/30 hover:border-purple-300 relative overflow-hidden orbital-glow">
                        <SupplementIcon type="pre-treino" size={28} color="white" />
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
                      <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-full flex items-center justify-center shadow-xl hover:shadow-orange-500/50 hover:scale-110 transition-all duration-500 border-2 border-white/30 hover:border-orange-300 relative overflow-hidden orbital-glow">
                        <SupplementIcon type="bcaa" size={24} color="white" />
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
                      <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 rounded-full flex items-center justify-center shadow-xl hover:shadow-yellow-500/50 hover:scale-110 transition-all duration-500 border-2 border-white/30 hover:border-yellow-300 relative overflow-hidden orbital-glow">
                        <SupplementIcon type="multivitaminico" size={24} color="white" />
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
                      <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-full flex items-center justify-center shadow-xl hover:shadow-red-500/50 hover:scale-110 transition-all duration-500 border-2 border-white/30 hover:border-red-300 relative overflow-hidden orbital-glow">
                        <SupplementIcon type="queimador" size={24} color="white" />
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
                animation: "slideProgress 4s linear infinite",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
