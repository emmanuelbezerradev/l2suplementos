import React from "react";
import {
  ArrowRightIcon,
  TruckIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
  GiftIcon,
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
    // Aqui você pode adicionar um toast de sucesso
    console.log("Produto adicionado ao carrinho:", product);
  };

  const handleQuickView = (product) => {
    console.log("Visualização rápida:", product);
    // Aqui você implementaria o modal de visualização rápida
  };

  const handleToggleFavorite = (productId) => {
    console.log("Toggle favorito:", productId);
    // Aqui você implementaria a lógica de favoritos
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-400 text-white py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold font-heading mb-6">
                Transforme seu corpo com os
                <span className="block text-yellow-300">
                  melhores suplementos
                </span>
              </h1>
              <p className="text-xl mb-8 text-primary-100">
                Qualidade premium, preços imbatíveis e entrega rápida. Sua
                jornada fitness começa aqui!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-primary-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition-colors flex items-center justify-center">
                  Ver Produtos
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold px-8 py-4 rounded-lg transition-colors">
                  Ofertas Especiais
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-sm">Produtos</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <div className="text-3xl font-bold">50k+</div>
                    <div className="text-sm">Clientes</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <div className="text-3xl font-bold">4.9★</div>
                    <div className="text-sm">Avaliação</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <div className="text-3xl font-bold">24h</div>
                    <div className="text-sm">Entrega</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TruckIcon className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Frete Grátis</h3>
              <p className="text-gray-600 text-sm">
                Acima de R$ 199 para todo Brasil
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Compra Segura</h3>
              <p className="text-gray-600 text-sm">
                SSL e pagamento 100% seguro
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChatBubbleLeftRightIcon className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Suporte 24/7</h3>
              <p className="text-gray-600 text-sm">Atendimento especializado</p>
            </div>

            <div className="text-center">
              <div className="bg-primary-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GiftIcon className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Primeira Compra</h3>
              <p className="text-gray-600 text-sm">20% de desconto especial</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categorias em Destaque */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-heading mb-4">
              Categorias em Destaque
            </h2>
            <p className="text-gray-600 text-lg">
              Encontre o suplemento ideal para seus objetivos
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {categories.map((category) => (
              <div key={category.id} className="group cursor-pointer">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center border border-gray-100 group-hover:border-primary-300">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500 transition-colors">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-8 h-8 group-hover:brightness-0 group-hover:invert transition-all"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors mb-1">
                    {category.name}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {category.productCount} produtos
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produtos em Destaque */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold font-heading mb-4">
                Produtos em Destaque
              </h2>
              <p className="text-gray-600 text-lg">
                Os mais vendidos e bem avaliados
              </p>
            </div>
            <button className="btn-outline hidden md:flex items-center">
              Ver Todos
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onQuickView={handleQuickView}
                onToggleFavorite={handleToggleFavorite}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Banner Promocional */}
      <section className="py-16">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                🔥 SUPER OFERTA 🔥
              </h2>
              <p className="text-xl md:text-2xl mb-2">
                Desconto de até <span className="text-6xl font-bold">50%</span>
              </p>
              <p className="text-lg mb-8">
                Em produtos selecionados. Oferta por tempo limitado!
              </p>
              <button className="bg-white text-gray-800 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition-colors text-lg">
                Ver Ofertas
              </button>
            </div>

            {/* Elementos decorativos */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white bg-opacity-10 rounded-full translate-y-12 -translate-x-12"></div>
          </div>
        </div>
      </section>

      {/* Produtos em Promoção */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold font-heading mb-4">
                Produtos em Promoção
              </h2>
              <p className="text-gray-600 text-lg">
                Aproveite os melhores preços
              </p>
            </div>
            <button className="btn-outline hidden md:flex items-center">
              Ver Todas as Ofertas
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {discountProducts.slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onQuickView={handleQuickView}
                onToggleFavorite={handleToggleFavorite}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold font-heading mb-4">
            Fique por dentro das novidades
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Receba ofertas exclusivas, dicas de treino e lançamentos em primeira
            mão
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-bold px-6 py-3 rounded-lg transition-colors">
                Cadastrar
              </button>
            </div>
            <p className="text-sm text-primary-200 mt-2">
              * Não enviamos spam. Cancele quando quiser.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
