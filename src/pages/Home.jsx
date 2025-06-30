import React from "react";
import {
  ArrowRightIcon,
  TruckIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
  GiftIcon,
  PlayIcon,
  SparklesIcon,
  FireIcon,
} from "@heroicons/react/24/outline";
import ProductCard from "../components/common/ProductCard";
import PromoBanner from "../components/common/PromoBanner";
import HeroBanner from "../components/common/HeroBanner";
import OffersBanner from "../components/common/OffersBanner";
import CategoriesBanner from "../components/common/CategoriesBanner";
import {
  featuredProducts,
  newProducts,
  discountProducts,
  categories,
} from "../data/products";
import { useCart } from "../contexts/CartContext";

const Home = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    console.log("Produto adicionado ao carrinho:", product);
  };

  const benefits = [
    {
      icon: TruckIcon,
      title: "Frete Grátis",
      description: "Acima de R$ 199",
      color: "text-green-500",
      bg: "bg-green-50",
    },
    {
      icon: ShieldCheckIcon,
      title: "Produtos Originais",
      description: "100% Garantido",
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: "Suporte 24/7",
      description: "Tire suas dúvidas",
      color: "text-purple-500",
      bg: "bg-purple-50",
    },
    {
      icon: GiftIcon,
      title: "Primeira Compra",
      description: "20% de desconto",
      color: "text-orange-500",
      bg: "bg-orange-50",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Banner de Promoção no Topo */}
      <PromoBanner />

      {/* Hero Section Novo */}
      <HeroBanner />

      {/* Ofertas Especiais */}
      <OffersBanner />

      {/* Categorias em Destaque */}
      <CategoriesBanner />

      {/* Benefícios */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center group fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 ${benefit.bg} rounded-2xl mb-4 group-hover:scale-110 transition-transform`}
                >
                  <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categorias em Destaque */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Categorias em Destaque</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Encontre exatamente o que precisa para seus objetivos fitness
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.slice(0, 8).map((category, index) => (
              <div
                key={category.id}
                className="category-card slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-bold mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {category.description}
                </p>
                <div className="text-blue-600 font-semibold text-sm">
                  {category.productCount} produtos
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produtos em Destaque com visual melhorado */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          {/* Header da seção */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
              <FireIcon className="w-4 h-4 mr-2" />
              PRODUTOS EM DESTAQUE
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Os{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                mais vendidos
              </span>{" "}
              e bem avaliados
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Produtos testados e aprovados por milhares de clientes que já
              alcançaram seus objetivos
            </p>
          </div>

          {/* Grid de produtos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard
                  product={product}
                  onAddToCart={() => handleAddToCart(product)}
                  onQuickView={() => console.log("Quick view:", product)}
                  onToggleFavorite={() =>
                    console.log("Toggle favorite:", product.id)
                  }
                />
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center mx-auto space-x-3">
              <span>VER TODOS OS PRODUTOS</span>
              <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter melhorada */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        {/* Background decorativo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-yellow-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-3 mb-8">
              <GiftIcon className="w-5 h-5 mr-2 text-yellow-300" />
              <span className="font-bold">
                GANHE 10% OFF NA PRIMEIRA COMPRA
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Fique por dentro das
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                melhores ofertas
              </span>
            </h2>

            <p className="text-xl text-blue-100 mb-10">
              Receba em primeira mão nossos lançamentos, promoções exclusivas e
              dicas de especialistas
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto mb-8">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-50"
              />
              <button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold px-8 py-4 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                QUERO DESCONTO
              </button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-blue-200">
              <div className="flex items-center space-x-2">
                <ShieldCheckIcon className="w-5 h-5 text-green-400" />
                <span>Sem spam, garantido</span>
              </div>
              <div className="flex items-center space-x-2">
                <GiftIcon className="w-5 h-5 text-yellow-400" />
                <span>Ofertas exclusivas</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
