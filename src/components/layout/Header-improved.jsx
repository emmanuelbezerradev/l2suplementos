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
      <header>
        {/* Barra superior promocional */}
        <div className="header-top">
          <div className="container-custom">
            <div className="flex justify-between items-center">
              <div className="hidden md:flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <PhoneIcon className="w-4 h-4" style={{ color: "#4CAF50" }} />
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-2">
                  <EnvelopeIcon
                    className="w-4 h-4"
                    style={{ color: "#2196F3" }}
                  />
                  <span>contato@l2suplementos.com</span>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <TruckIcon className="w-4 h-4" style={{ color: "#4CAF50" }} />
                  <span className="sm:inline hidden">
                    Frete grátis acima de R$ 199
                  </span>
                  <span className="sm:hidden">Frete grátis R$ 199+</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TagIcon className="w-4 h-4" style={{ color: "#FF9800" }} />
                  <span className="sm:inline hidden">
                    20% OFF na primeira compra
                  </span>
                  <span className="sm:hidden">20% OFF</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Header principal */}
        <div className="header-main">
          <div className="container-custom">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center space-x-4">
                <button
                  className="lg:hidden menu-toggle"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <Bars3Icon />
                </button>
                <div className="logo-container">
                  <Logo />
                </div>
              </div>

              {/* Barra de pesquisa */}
              <div className="hidden md:flex search-container relative flex-1 max-w-2xl mx-8">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Buscar suplementos, proteínas, creatina..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary-600 transition-colors">
                    <MagnifyingGlassIcon className="w-5 h-5" />
                  </button>

                  {/* Sugestões de busca */}
                  {searchQuery && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
                      <div className="p-2">
                        <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                          Sugestões
                        </div>
                        {[
                          "Whey Protein",
                          "Creatina",
                          "BCAA",
                          "Pré-treino",
                          "Glutamina",
                        ].map((suggestion, index) => (
                          <button
                            key={index}
                            className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded"
                            onClick={() => setSearchQuery(suggestion)}
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Ações do usuário */}
              <div className="user-actions flex items-center space-x-4">
                {/* Pesquisa mobile */}
                <button className="md:hidden action-btn">
                  <MagnifyingGlassIcon className="w-6 h-6" />
                </button>

                {/* Conta com dropdown */}
                <div className="hidden sm:flex relative group">
                  <button className="action-btn flex items-center space-x-1">
                    <UserIcon className="w-6 h-6" />
                    <span className="hidden lg:inline">Conta</span>
                  </button>
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Minha Conta
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Meus Pedidos
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Favoritos
                      </a>
                      <hr className="my-1" />
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Sair
                      </a>
                    </div>
                  </div>
                </div>

                {/* Favoritos */}
                <button className="action-btn relative">
                  <HeartIcon className="w-6 h-6" />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    3
                  </span>
                  <span className="hidden lg:inline ml-1">Favoritos</span>
                </button>

                {/* Carrinho */}
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="action-btn relative bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <ShoppingCartIcon className="w-6 h-6" />
                    <span className="hidden lg:inline">Carrinho</span>
                    {getCartItemsCount() > 0 && (
                      <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {getCartItemsCount()}
                      </span>
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navegação de categorias */}
        <div className="header-nav bg-gradient-to-r from-primary-600 to-primary-700">
          <div className="container-custom">
            <nav className="hidden lg:flex items-center justify-between py-3">
              <div className="flex items-center space-x-1">
                <a
                  href="#"
                  className="category-link active bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg font-medium"
                >
                  TODAS CATEGORIAS
                </a>
                {categories.map((category) => (
                  <a
                    key={category}
                    href="#"
                    className="category-link text-white hover:bg-white hover:bg-opacity-20 transition-all duration-200 px-3 py-2 rounded font-medium"
                  >
                    {category.toUpperCase()}
                  </a>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="offers-btn bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
                >
                  <span>🔥</span>
                  <span>OFERTAS</span>
                  <span className="bg-yellow-400 text-red-600 text-xs px-2 py-1 rounded-full font-bold">
                    NOVO
                  </span>
                </a>

                <div className="hidden xl:flex items-center space-x-2 text-white text-sm">
                  <svg
                    className="w-4 h-4 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Entrega em 24h para SP</span>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="fixed left-0 top-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4">
              <div className="flex justify-between items-center mb-6">
                <Logo />
                <button onClick={() => setIsMenuOpen(false)}>
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              {/* Pesquisa mobile */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              {/* Menu de categorias */}
              <div className="space-y-2">
                <h3 className="font-bold text-gray-800 mb-3">Categorias</h3>
                {categories.map((category) => (
                  <a
                    key={category}
                    href="#"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg"
                  >
                    {category}
                  </a>
                ))}
                <a
                  href="#"
                  className="block px-4 py-3 text-orange-600 font-bold hover:bg-orange-50 rounded-lg"
                >
                  🔥 Ofertas Especiais
                </a>
              </div>

              {/* Links do usuário */}
              <div className="mt-6 pt-6 border-t border-gray-200 space-y-2">
                <a
                  href="#"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  👤 Minha Conta
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  ❤️ Favoritos
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  📋 Meus Pedidos
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CartSidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;
