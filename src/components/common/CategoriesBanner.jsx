import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const CategoriesBanner = () => {
  const categories = [
    {
      name: "Proteínas",
      image: "/src/assets/integral capa.png",
      description: "Whey, Caseína, Albumina",
      products: "50+ produtos",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Pré-Treino",
      image: "/src/assets/black-skull.webp",
      description: "Energia e foco máximo",
      products: "25+ produtos",
      color: "from-red-500 to-red-600",
    },
    {
      name: "Creatina",
      image: "/src/assets/creatina.webp",
      description: "Força e resistência",
      products: "15+ produtos",
      color: "from-green-500 to-green-600",
    },
    {
      name: "Vitaminas",
      image: "/src/assets/probiotica.webp",
      description: "Saúde e bem-estar",
      products: "30+ produtos",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Encontre o que você precisa
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Navegue pelas nossas principais categorias e descubra os melhores
            produtos para seus objetivos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
                {/* Imagem com overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-80 group-hover:opacity-70 transition-opacity`}
                  ></div>

                  {/* Conteúdo sobre a imagem */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                    <p className="text-sm opacity-90 mb-1">
                      {category.description}
                    </p>
                    <p className="text-xs opacity-75">{category.products}</p>
                  </div>
                </div>

                {/* Footer do card */}
                <div className="bg-white p-4 border-t-4 border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">
                      Ver produtos
                    </span>
                    <ArrowRightIcon className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesBanner;
