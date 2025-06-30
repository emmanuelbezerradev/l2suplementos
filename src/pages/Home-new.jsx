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
      {/* Hero Section Moderno */}
      <section className="hero-gradient text-white py-20 lg:py-28 relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="fade-in">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2 mb-6">
                <FireIcon className="w-5 h-5 mr-2 text-yellow-300" />
                <span className="text-sm font-semibold">
                  Promoção Limitada - 48h
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
                Transforme seu corpo com os
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  melhores suplementos
                </span>
              </h1>

              <p className="text-xl mb-8 text-blue-100 max-w-lg">
                Produtos premium, entrega rápida e preços imbatíveis. Sua
                jornada fitness começa aqui!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="btn-primary group">
                  <SparklesIcon className="w-5 h-5" />
                  Ver Produtos em Destaque
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="btn-secondary bg-white bg-opacity-20 border-white border-opacity-30 text-white hover:bg-white hover:text-gray-900">
                  <PlayIcon className="w-5 h-5" />
                  Como Escolher Suplementos
                </button>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                  <span>+50 mil clientes satisfeitos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                  <span>Avaliação 4.9/5</span>
                </div>
              </div>
            </div>

            <div className="lg:text-right slide-up">
              <div className="relative inline-block">
                <div className="w-96 h-96 bg-white bg-opacity-10 rounded-full flex items-center justify-center mx-auto lg:ml-auto pulse-animation">
                  <div className="w-80 h-80 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl mb-4">💪</div>
                      <div className="text-2xl font-bold">L2</div>
                      <div className="text-lg">SUPLEMENTOS</div>
                    </div>
                  </div>
                </div>

                {/* Stats flutuantes */}
                <div className="absolute -top-4 -right-4 bg-white text-gray-900 p-4 rounded-2xl shadow-2xl">
                  <div className="text-2xl font-bold text-blue-600">20%</div>
                  <div className="text-sm">OFF primeira compra</div>
                </div>

                <div className="absolute bottom-8 -left-8 bg-white text-gray-900 p-4 rounded-2xl shadow-2xl">
                  <div className="text-2xl font-bold text-green-600">Frete</div>
                  <div className="text-sm">Grátis R$ 199+</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Elementos decorativos */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white bg-opacity-10 rounded-full blur-xl"></div>
      </section>

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

      {/* Produtos em Destaque */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Produtos em Destaque</h2>
              <p className="text-xl text-gray-600">
                Os mais vendidos e bem avaliados
              </p>
            </div>
            <button className="btn-primary">
              Ver Todos
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="slide-up"
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
        </div>
      </section>

      {/* Banner Promocional */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-6">
              🔥 Mega Promoção de Verão
            </h2>
            <p className="text-2xl mb-8">
              Até 50% OFF em produtos selecionados + Frete Grátis
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors">
                Ver Ofertas Imperdíveis
              </button>
              <button className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-orange-600 transition-colors">
                Cadastre-se e Ganhe 10% OFF
              </button>
            </div>
            <div className="mt-8 text-lg">
              ⏰ Oferta válida por tempo limitado
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Fique por dentro das novidades
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Receba ofertas exclusivas, dicas de treino e lançamentos em
              primeira mão
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition-colors">
                Inscrever
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Não enviamos spam. Cancele quando quiser.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
