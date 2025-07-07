import React from "react";
import { 
  HeartIcon,
  ShieldCheckIcon,
  SparklesIcon,
  FireIcon,
  BoltIcon
} from "@heroicons/react/24/outline";

const GenericCategory = ({ 
  category = "Categoria", 
  description = "Descrição da categoria", 
  color = "blue",
  icon: Icon = SparklesIcon 
}) => {
  
  const colorClasses = {
    blue: {
      gradient: "from-blue-600 to-purple-600",
      text: "blue-100",
      accent: "blue-600"
    },
    green: {
      gradient: "from-green-600 to-emerald-600",
      text: "green-100",
      accent: "green-600"
    },
    orange: {
      gradient: "from-orange-600 to-red-600",
      text: "orange-100",
      accent: "orange-600"
    },
    purple: {
      gradient: "from-purple-600 to-pink-600",
      text: "purple-100",
      accent: "purple-600"
    },
    indigo: {
      gradient: "from-indigo-600 to-blue-600",
      text: "indigo-100",
      accent: "indigo-600"
    }
  };

  const colors = colorClasses[color] || colorClasses.blue;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header da Categoria */}
      <div className={`bg-gradient-to-r ${colors.gradient} text-white py-20`}>
        <div className="container-custom">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Icon className={`w-16 h-16 text-${colors.text} mr-4`} />
              <h1 className="text-5xl lg:text-6xl font-bold">
                {category}
              </h1>
            </div>
            <p className={`text-xl text-${colors.text} max-w-3xl mx-auto mb-8`}>
              {description}
            </p>
            <div className={`flex justify-center items-center space-x-6 text-${colors.text}`}>
              <div className="flex items-center space-x-2">
                <ShieldCheckIcon className="w-6 h-6" />
                <span>Produtos Originais</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-2">
                <HeartIcon className="w-6 h-6" />
                <span>Melhores Marcas</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-2">
                <SparklesIcon className="w-6 h-6" />
                <span>Frete Grátis R$ 199+</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <div className={`w-24 h-24 bg-gradient-to-r ${colors.gradient} rounded-full flex items-center justify-center mx-auto mb-8`}>
              <Icon className="w-12 h-12 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Página em Desenvolvimento
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Estamos preparando uma experiência incrível para você! <br />
              Em breve, você encontrará aqui os melhores produtos de <strong>{category.toLowerCase()}</strong> 
              com os melhores preços e condições especiais.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <ShieldCheckIcon className={`w-12 h-12 text-${colors.accent} mx-auto mb-4`} />
                <h3 className="font-bold text-gray-800 mb-2">Qualidade Garantida</h3>
                <p className="text-gray-600 text-sm">Produtos originais das melhores marcas</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <SparklesIcon className={`w-12 h-12 text-${colors.accent} mx-auto mb-4`} />
                <h3 className="font-bold text-gray-800 mb-2">Melhores Preços</h3>
                <p className="text-gray-600 text-sm">Preços competitivos e promoções exclusivas</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <BoltIcon className={`w-12 h-12 text-${colors.accent} mx-auto mb-4`} />
                <h3 className="font-bold text-gray-800 mb-2">Entrega Rápida</h3>
                <p className="text-gray-600 text-sm">Frete grátis e entrega em todo o Brasil</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className={`bg-gradient-to-r ${colors.gradient} hover:opacity-90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105`}
                onClick={() => window.history.back()}
              >
                Voltar à Página Inicial
              </button>
              
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-4 px-8 rounded-xl transition-colors duration-200">
                Notificar quando Disponível
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenericCategory;
