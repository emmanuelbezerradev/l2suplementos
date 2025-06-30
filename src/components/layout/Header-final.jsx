import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  HeartIcon,
  Bars3Icon,
  XMarkIcon,
  PhoneIcon,
  EnvelopeIcon,
  TruckIcon,
  TagIcon,
} from "@heroicons/react/24/outline";
import Logo from "../common/Logo";
import CartSidebar from "../common/CartSidebar";
import { useCart } from "../../contexts/CartContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getCartItemsCount } = useCart();

  const categories = [
    "Proteínas",
    "Creatina",
    "Pré-Treino",
    "Vitaminas",
    "Queimadores",
    "Massa Muscular",
    "Aminoácidos",
  ];

  return (
    <>
      <header className="bg-white shadow-xl sticky top-0 z-50">
        {/* Barra superior promocional */}
        <div className="bg-gray-900 text-white py-2">
          <div className="container-custom">
            <div className="flex justify-between items-center text-sm">
              <div className="hidden md:flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <PhoneIcon className="w-4 h-4 text-green-400" />
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-2">
                  <EnvelopeIcon className="w-4 h-4 text-blue-400" />
                  <span>contato@l2suplementos.com</span>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <TruckIcon className="w-4 h-4 text-green-400" />
                  <span className="hidden sm:inline">
                    Frete grátis acima de R$ 199
                  </span>
                  <span className="sm:hidden">Frete grátis R$ 199+</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TagIcon className="w-4 h-4 text-yellow-400" />
                  <span className="hidden sm:inline">
                    20% OFF na primeira compra
                  </span>
                  <span className="sm:hidden">20% OFF</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Header principal */}
        <div className="bg-white border-b border-gray-100">
          <div className="container-custom py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center space-x-4">
                <button
                  className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <Bars3Icon className="w-6 h-6" />
                </button>
                <Logo className="h-12 w-auto" />
              </div>

              {/* Barra de pesquisa */}
              <div className="hidden md:flex flex-1 max-w-lg mx-8">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Buscar suplementos, proteínas, creatina..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors bg-gray-50 focus:bg-white"
                  />
                  <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Ações do usuário */}
              <div className="flex items-center space-x-4">
                {/* Pesquisa mobile */}
                <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <MagnifyingGlassIcon className="w-6 h-6" />
                </button>

                {/* Conta */}
                <button className="hidden sm:flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <UserIcon className="w-6 h-6" />
                  <span className="hidden lg:inline text-sm font-medium">
                    Conta
                  </span>
                </button>

                {/* Favoritos */}
                <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <HeartIcon className="w-6 h-6" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    3
                  </span>
                </button>

                {/* Carrinho */}
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <ShoppingCartIcon className="w-6 h-6" />
                  {getCartItemsCount() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center pulse-animation">
                      {getCartItemsCount()}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Menu de categorias */}
        <div className="bg-white border-b border-gray-100">
          <div className="container-custom">
            <nav className="hidden lg:flex items-center justify-center space-x-8 py-4">
              <a
                href="#"
                className="text-blue-600 font-semibold px-4 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
              >
                TODAS CATEGORIAS
              </a>
              {categories.map((category) => (
                <a
                  key={category}
                  href="#"
                  className="text-gray-700 font-medium px-4 py-2 rounded-lg hover:text-blue-600 hover:bg-gray-50 transition-colors uppercase text-sm tracking-wide"
                >
                  {category}
                </a>
              ))}
              <a
                href="#"
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold px-6 py-2 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 pulse-animation"
              >
                🔥 OFERTAS
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="bg-white w-80 h-full p-6 slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <Logo className="h-10 w-auto" />
              <button onClick={() => setIsMenuOpen(false)}>
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Pesquisa mobile */}
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                />
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Categorias mobile */}
            <nav className="space-y-4">
              <a
                href="#"
                className="block text-blue-600 font-semibold py-3 px-4 bg-blue-50 rounded-lg"
              >
                TODAS CATEGORIAS
              </a>
              {categories.map((category) => (
                <a
                  key={category}
                  href="#"
                  className="block text-gray-700 font-medium py-3 px-4 rounded-lg hover:bg-gray-50"
                >
                  {category}
                </a>
              ))}
              <a
                href="#"
                className="block bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 px-4 rounded-lg text-center"
              >
                🔥 OFERTAS
              </a>
            </nav>
          </div>
        </div>
      )}

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;
