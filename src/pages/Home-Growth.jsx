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
  StarIcon,
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
      title: "Frete grátis a partir de",
      subtitle: "R$ 299*",
      description: "Consulte condições",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: ShieldCheckIcon,
      title: "Compra em nossa loja",
      subtitle: "com 10% OFF no boleto",
      description: "ou PIX",
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      icon: GiftIcon,
      title: "CASHBACK GPONTOS",
      subtitle: "Pague 5 centavos",
      description: "Consulte configuração",
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: "Nutricionista Esportivo",
      subtitle: "Clique aqui",
      description: "",
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
    {
      icon: SparklesIcon,
      title: "Compras em até 6x sem",
      subtitle: "juros",
      description: "",
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Estilo Growth */}
      <section className="hero-gradient text-white py-12 lg:py-20 relative overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Conteúdo principal */}
            <div className="fade-in">
              <div className="flex items-center space-x-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
                <span className="text-yellow-300 font-semibold ml-2">
                  A CREATINA MAIS AVALIADA DO BRASIL
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-black font-heading mb-6 leading-tight">
                A CREATINA MAIS
                <span className="block text-yellow-300">
                  AVALIADA DO BRASIL
                </span>
              </h1>

              <p className="text-xl mb-6 text-blue-100">
                DESEMPENHO MÁXIMO COM
                <br />
                <span className="font-bold">MAIS ALTA TECNOLOGIA.</span>
              </p>

              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 mb-8">
                <div className="text-red-500 font-bold text-lg mb-2">
                  A PARTIR
                </div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-5xl font-black">R$ 0,78</span>
                  <span className="text-xl">A DOSE</span>
                </div>
                <div className="text-sm text-blue-200 mt-2">
                  *NO BOLETO OU PIX
                  <br />
                  *VALOR BASE DA CREATINA MONOHIDRATADA DE 250G EM NÚMERO DE
                  DOSES BASEADAS NA RECOMENDAÇÃO DE CONSUMO DO PRODUTO.
                </div>
              </div>

              <button className="bg-green-500 hover:bg-green-600 text-white font-black px-8 py-4 rounded-xl text-xl transition-all duration-300 transform hover:scale-105">
                COMPRAR
              </button>
            </div>

            {/* Imagem do produto */}
            <div className="lg:text-right slide-up relative">
              <div className="relative">
                <div className="w-full max-w-lg mx-auto">
                  {/* Placeholder para imagem do produto */}
                  <div className="bg-gradient-to-br from-purple-600 to-blue-800 w-80 h-80 rounded-full mx-auto flex items-center justify-center relative">
                    <div className="text-8xl">🏋️‍♂️</div>

                    {/* Produtos em volta */}
                    <div className="absolute -top-8 -left-8 w-24 h-32 bg-green-500 rounded-2xl flex items-center justify-center transform rotate-12">
                      <div className="text-white font-bold text-xs">
                        CREATINA
                      </div>
                    </div>

                    <div className="absolute -bottom-8 -right-8 w-24 h-32 bg-purple-600 rounded-2xl flex items-center justify-center transform -rotate-12">
                      <div className="text-white font-bold text-xs">
                        MONOHIDRATADA
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicadores do carousel */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === 2 ? "bg-white" : "bg-white bg-opacity-40"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Benefits Section - Estilo Growth */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center group fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 ${benefit.bg} rounded-full mb-4 group-hover:scale-110 transition-transform`}
                >
                  <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
                <h3 className="text-sm font-semibold mb-1 text-gray-700">
                  {benefit.title}
                </h3>
                <div className="text-sm font-bold text-gray-900">
                  {benefit.subtitle}
                </div>
                {benefit.description && (
                  <p className="text-xs text-gray-500 mt-1">
                    {benefit.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section - Estilo Growth */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Whey Protein */}
            <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 text-white overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl font-black mb-4">WHEY PROTEIN</h2>
                <p className="text-xl mb-6 text-gray-300">
                  Proteína de alta qualidade para ganho de massa muscular
                </p>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-3 rounded-xl transition-colors">
                  CONFERIR
                </button>
              </div>
              <div className="absolute right-4 top-4 text-8xl opacity-20">
                💪
              </div>
            </div>

            {/* Creatina */}
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-8 text-white overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl font-black mb-4">CREATINA</h2>
                <p className="text-xl mb-6 text-blue-100">
                  Aumente sua força e resistência nos treinos
                </p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-6 py-3 rounded-xl transition-colors">
                  CONFERIR
                </button>
              </div>
              <div className="absolute right-4 top-4 text-8xl opacity-20">
                ⚡
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid - Estilo Growth */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Produtos em Destaque
            </h2>
            <p className="text-xl text-gray-600">
              Os mais vendidos e bem avaliados pelos nossos clientes
            </p>
          </div>

          <div className="products-grid">
            {featuredProducts.slice(0, 8).map((product, index) => (
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

          <div className="text-center mt-12">
            <button className="btn-primary">
              Ver Todos os Produtos
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section - Estilo Growth */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Receba ofertas exclusivas
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Cadastre-se e seja o primeiro a saber de promoções, lançamentos e
              dicas de treino
            </p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Digite seu melhor e-mail"
                className="input-field bg-white text-gray-900"
              />
              <button className="btn-primary">Cadastrar</button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              📧 Não enviamos spam. Cancele quando quiser.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
