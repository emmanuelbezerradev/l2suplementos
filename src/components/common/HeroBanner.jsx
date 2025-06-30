import React from "react";
import {
  ArrowRightIcon,
  PlayIcon,
  SparklesIcon,
  FireIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as StarSolidIcon } from "@heroicons/react/24/solid";

const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 lg:py-28">
          {/* Conteúdo à esquerda */}
          <div className="space-y-8">
            {/* Badge de promoção */}
            <div className="inline-flex items-center bg-gradient-to-r from-red-500 to-orange-500 rounded-full px-6 py-3 text-sm font-bold shadow-lg animate-pulse">
              <FireIcon className="w-5 h-5 mr-2" />
              <span>MEGA LIQUIDAÇÃO - ATÉ 50% OFF</span>
            </div>

            {/* Título principal */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                <span className="block">TRANSFORME</span>
                <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  SEU CORPO
                </span>
                <span className="block text-4xl lg:text-5xl font-bold">
                  com os melhores suplementos
                </span>
              </h1>
            </div>

            {/* Descrição */}
            <p className="text-xl lg:text-2xl text-blue-100 max-w-lg leading-relaxed">
              Produtos{" "}
              <span className="font-bold text-yellow-300">premium</span>,
              entrega <span className="font-bold text-green-300">expressa</span>{" "}
              e preços{" "}
              <span className="font-bold text-orange-300">imbatíveis</span>. Sua
              jornada fitness começa aqui!
            </p>

            {/* Avaliações */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <StarSolidIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-semibold">4.9/5</span>
              <span className="text-blue-200">
                +50 mil clientes satisfeitos
              </span>
            </div>

            {/* Botões de ação */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <SparklesIcon className="w-6 h-6" />
                <span>VER OFERTAS IMPERDÍVEIS</span>
                <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>

              <button className="group bg-white bg-opacity-20 backdrop-blur-sm border-2 border-white border-opacity-30 hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center space-x-3 transition-all duration-300">
                <PlayIcon className="w-6 h-6" />
                <span>COMO ESCOLHER</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">500+</div>
                <div className="text-sm text-blue-200">Produtos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">50k+</div>
                <div className="text-sm text-blue-200">Clientes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">4.9★</div>
                <div className="text-sm text-blue-200">Avaliação</div>
              </div>
            </div>
          </div>

          {/* Visual à direita */}
          <div className="relative lg:text-right">
            <div className="relative inline-block">
              {/* Círculo principal */}
              <div className="w-96 h-96 lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-white/20 to-white/5 rounded-full flex items-center justify-center mx-auto lg:ml-auto backdrop-blur-sm border border-white/20 shadow-2xl">
                <div className="w-80 h-80 lg:w-[420px] lg:h-[420px] bg-gradient-to-br from-white/30 to-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center">
                    <div className="text-8xl lg:text-9xl mb-4 animate-bounce">
                      💪
                    </div>
                    <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                      L2
                    </div>
                    <div className="text-xl lg:text-2xl font-bold text-white">
                      SUPLEMENTOS
                    </div>
                  </div>
                </div>
              </div>

              {/* Cards flutuantes */}
              <div className="absolute -top-8 -right-8 bg-white text-gray-900 p-6 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform animate-pulse">
                <div className="text-3xl font-black text-red-600">50%</div>
                <div className="text-sm font-bold">OFF</div>
                <div className="text-xs text-gray-600">Proteínas</div>
              </div>

              <div className="absolute bottom-12 -left-12 bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform">
                <div className="text-2xl font-bold">FRETE</div>
                <div className="text-lg font-bold">GRÁTIS</div>
                <div className="text-xs opacity-90">R$ 199+</div>
              </div>

              <div className="absolute top-1/3 -left-8 bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 rounded-xl shadow-xl transform rotate-12 hover:rotate-0 transition-transform">
                <div className="text-lg font-bold">24H</div>
                <div className="text-xs">Entrega</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elementos decorativos extras */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
      <div
        className="absolute top-32 right-32 w-3 h-3 bg-green-400 rounded-full animate-ping"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-20 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-ping"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  );
};

export default HeroBanner;
