import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  HeartIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  TruckIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import Logo from "../common;";
import CartSidebar from "../common/CartSidebar";
import { useCart } from "../../contexts/CartContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const { getCartItemsCount } = useCart();

  const categories = [
    { name: "Proteínas", icon: "💪", count: 120 },
    { name: "Creatina", icon: "⚡", count: 45 },
    { name: "Pré-Treino", icon: "🔥", count: 38 },
    { name: "Vitaminas", icon: "🌟", count: 67 },
    { name: "Queimadores", icon: "🔥", count: 29 },
    { name: "Massa Muscular", icon: "💯", count: 52 },
    { name: "Aminoácidos", icon: "🧬", count: 34 },
  ];

  return (
    <>
      <header className="bg-white shadow-xl sticky top-0 z-50 border-b border-gray-100">
        {/* Barra promocional superior */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 overflow-hidden">
          <div className="container-custom">
            <div className="flex justify-between items-center text-sm font-medium">
              <div className="hidden md:flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <TruckIcon className="w-4 h-4" />
                  <span>Frete GRÁTIS acima de R$ 199</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheckIcon className="w-4 h-4" />
                  <span>Produto 100% Original</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 mx-auto md:mx-0">
                <SparklesIcon className="w-4 h-4 animate-pulse" />
                <span className="font-bold">20% OFF na primeira compra!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Header principal */}
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <Logo className="h-12 w-auto" />
              <div className="hidden md:block">
                <h1 className="text-2xl font-bold text-gradient">L2 Suplementos</h1>
                <p className="text-xs text-gray-500 font-medium">Sua parceira fitness</p>
              </div>
            </div>

            {/* Barra de pesquisa */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Busque por proteína, creatina, vitaminas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input-field pl-12 pr-4 py-3 text-sm w-full rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200"
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-xl transition-colors duration-200">
                    <MagnifyingGlassIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Ações do usuário */}
            <div className="flex items-center space-x-4">
              {/* Favoritos */}
              <button className="hidden md:flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors duration-200 p-2">
                <HeartIcon className="h-6 w-6" />
                <span className="text-sm font-medium">Favoritos</span>
              </button>

              {/* Conta */}
              <button className="hidden md:flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 p-2">
                <UserIcon className="h-6 w-6" />
                <span className="text-sm font-medium">Conta</span>
              </button>

              {/* Carrinho */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-2xl transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <ShoppingCartIcon className="h-6 w-6" />
                {getCartItemsCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center animate-pulse">
                    {getCartItemsCount()}
                  </span>
                )}
              </button>

              {/* Menu mobile */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Navegação de categorias */}
        <div className="hidden md:block bg-gray-50 border-t border-gray-200">
          <div className="container-custom">
            <nav className="flex items-center justify-center space-x-8 py-4">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-white group"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                    {category.icon}
                  </span>
                  <span>{category.name}</span>
                  <span className="text-xs text-gray-400">({category.count})</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="container-custom py-4">
              {/* Pesquisa mobile */}
              <div className="mb-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Buscar produtos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="input-field pl-10 pr-4 py-3 text-sm w-full rounded-xl"
                  />
                </div>
              </div>

              {/* Links mobile */}
              <div className="space-y-2">
                <button className="flex items-center space-x-3 w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                  <UserIcon className="h-5 w-5" />
                  <span>Minha Conta</span>
                </button>
                <button className="flex items-center space-x-3 w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                  <HeartIcon className="h-5 w-5" />
                  <span>Favoritos</span>
                </button>
              </div>

              {/* Categorias mobile */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Categorias</h3>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      className="flex items-center space-x-2 p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                    >
                      <span className="text-lg">{category.icon}</span>
                      <span className="text-sm">{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Sidebar do carrinho */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;
            <Logo size="md" />
          </div>

          {/* Barra de pesquisa */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar suplementos, proteínas, creatina..."
                className="w-full pl-4 pr-12 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary-500">
                <MagnifyingGlassIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Ações do usuário */}
          <div className="flex items-center space-x-6">
            {/* Conta */}
            <button className="flex flex-col items-center text-gray-700 hover:text-primary-500 transition-colors">
              <UserIcon className="w-6 h-6" />
              <span className="text-xs mt-1">Conta</span>
            </button>

            {/* Favoritos */}
            <button className="flex flex-col items-center text-gray-700 hover:text-primary-500 transition-colors relative">
              <HeartIcon className="w-6 h-6" />
              <span className="text-xs mt-1">Favoritos</span>
              <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </button>

            {/* Carrinho */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex flex-col items-center text-gray-700 hover:text-primary-500 transition-colors relative"
            >
              <ShoppingCartIcon className="w-6 h-6" />
              <span className="text-xs mt-1">Carrinho</span>
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {getCartItemsCount()}
                </span>
              )}
            </button>

            {/* Menu mobile */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu de categorias */}
      <div className="bg-primary-500 text-white">
        <div className="container-custom">
          <nav className="flex items-center space-x-8 py-3 overflow-x-auto">
            <button className="whitespace-nowrap hover:text-primary-200 transition-colors font-medium">
              TODAS CATEGORIAS
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className="whitespace-nowrap hover:text-primary-200 transition-colors"
              >
                {category.toUpperCase()}
              </button>
            ))}
            <button className="whitespace-nowrap hover:text-primary-200 transition-colors text-yellow-300 font-medium">
              🔥 OFERTAS
            </button>
          </nav>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container-custom py-4">
            <div className="flex flex-col space-y-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className="text-left text-gray-700 hover:text-primary-500 py-2 border-b border-gray-100"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CartSidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Header;
