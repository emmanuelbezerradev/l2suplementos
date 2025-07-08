import React from "react";
import {
  FireIcon,
  ClockIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const PromoBanner = () => {
  return (
    <div className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white py-4 relative overflow-hidden">
      <div className="container-custom">
        <div className="flex items-center justify-center text-center relative z-10">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FireIcon className="w-6 h-6 text-yellow-300 animate-pulse" />
              <span className="font-bold text-lg">MEGA PROMOÇÃO!</span>
            </div>

            <div className="hidden md:block text-lg">
              <span className="font-semibold">ATÉ 50% OFF</span> em toda linha
              de proteínas
            </div>

            <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-full">
              <ClockIcon className="w-5 h-5" />
              <span className="font-semibold">Últimas 48h</span>
            </div>

            <button className="hidden lg:flex items-center space-x-2 bg-white text-red-600 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors">
              <span>APROVEITAR</span>
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Animação de fundo */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-yellow-300 rounded-full animate-bounce"></div>
        <div
          className="absolute -bottom-10 -right-10 w-16 h-16 bg-yellow-300 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
    </div>
  );
};

export default PromoBanner;
