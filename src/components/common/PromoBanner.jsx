import React from "react";
import {
  FireIcon,
  ClockIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const PromoBanner = () => {
  return (
    <div className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white py-4 relative overflow-hidden animate-breathe" style={{ zIndex: 10, position: 'relative' }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center text-center relative z-10">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FireIcon className="w-6 h-6 text-yellow-300 animate-pulse animate-wave" />
              <span className="font-bold text-lg animate-shimmer">MEGA PROMOÇÃO!</span>
            </div>

            <div className="hidden md:block text-lg">
              <span className="font-semibold">ATÉ 50% OFF</span> em toda linha
              de proteínas
            </div>

            <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-full">
              <ClockIcon className="w-5 h-5" />
              <span className="font-semibold">Últimas 48h</span>
            </div>

            <button className="hidden lg:flex items-center space-x-2 bg-white text-red-600 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 animate-glow">
              <span>APROVEITAR</span>
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Animação de fundo aprimorada */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-yellow-300 rounded-full animate-bounce animate-morphing"></div>
        <div
          className="absolute -bottom-10 -right-10 w-16 h-16 bg-yellow-300 rounded-full animate-bounce animate-morphing"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-12 h-12 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-1/4 right-1/4 w-8 h-8 bg-yellow-200 rounded-full animate-ping"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      {/* Efeito de brilho deslizante */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
    </div>
  );
};

export default PromoBanner;
