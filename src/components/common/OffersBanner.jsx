import React from "react";
import { TagIcon, SparklesIcon, TruckIcon } from "@heroicons/react/24/outline";

const OffersBanner = () => {
  const offers = [
    {
      icon: TagIcon,
      title: "PRIMEIRA COMPRA",
      discount: "20% OFF",
      description: "Use o cupom: BEMVINDO20",
      bgColor: "bg-gradient-to-r from-blue-600 to-blue-700",
      textColor: "text-white",
    },
    {
      icon: TruckIcon,
      title: "FRETE GRÁTIS",
      discount: "R$ 199+",
      description: "Para todo o Brasil",
      bgColor: "bg-gradient-to-r from-green-600 to-green-700",
      textColor: "text-white",
    },
    {
      icon: SparklesIcon,
      title: "SUPER COMBO",
      discount: "30% OFF",
      description: "Whey + Creatina + BCAA",
      bgColor: "bg-gradient-to-r from-purple-600 to-purple-700",
      textColor: "text-white",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={`${offer.bgColor} ${offer.textColor} p-6 rounded-2xl relative overflow-hidden group cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl`}
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <offer.icon className="w-8 h-8" />
                  <div className="text-right">
                    <div className="text-2xl font-bold">{offer.discount}</div>
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-2">{offer.title}</h3>
                <p className="text-sm opacity-90">{offer.description}</p>

                <button className="mt-4 bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg text-sm font-semibold transition-all">
                  ATIVAR OFERTA
                </button>
              </div>

              
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-white bg-opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full group-hover:scale-125 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersBanner;
