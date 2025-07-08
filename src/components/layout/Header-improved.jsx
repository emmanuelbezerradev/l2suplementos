import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  CogIcon,
} from "@heroicons/react/24/outline";
import Logo from "../common/Logo";
import CartSidebar from "../common/CartSidebar";
import { useCart } from "../../contexts/CartContext";
import { useAuth } from "../../hooks/useAuth";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getCartItemsCount } = useCart();
  const { user, logout, isAuthenticated, isAdmin } = useAuth();

  const categories = [
    { name: "Proteínas", path: "/proteinas" },
    { name: "Creatina", path: "/creatina" },
    { name: "Pré-Treino", path: "/pre-treino" },
    { name: "Vitaminas", path: "/vitaminas" },
    { name: "Queimadores", path: "/queimadores" },
    { name: "Massa Muscular", path: "/massa-muscular" },
    { name: "Aminoácidos", path: "/aminoacidos" },
  ];

  return (
    <>
      <header>
        {/* Barra superior promocional */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-2 text-sm">
          <div className="container-custom">
            <div className="flex justify-between items-center">
              <div className="hidden md:flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <PhoneIcon className="w-4 h-4 text-green-400" />
                  <span className="text-gray-200">(85) 99850-0344</span>
                </div>
                <div className="flex items-center space-x-2">
                  <EnvelopeIcon className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-200">l2suplementos@gmail.com</span>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <TruckIcon className="w-4 h-4 text-green-400" />
                  <span className="sm:inline hidden text-gray-200">
                    Frete grátis acima de R$ 199
                  </span>
                  <span className="sm:hidden text-gray-200">Frete grátis R$ 199+</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TagIcon className="w-4 h-4 text-orange-400" />
                  <span className="sm:inline hidden text-gray-200">
                    20% OFF em compra acima de R$ 500
                  </span>
                  <span className="sm:hidden text-gray-200">20% OFF R$ 500+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Header principal - Design Premium */}
        <div className="bg-white shadow-xl sticky top-0 z-30 border-b-2 border-gray-100">
          <div className="container-custom">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <div className="flex items-center space-x-4">
                <button
                  className="lg:hidden p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <Bars3Icon className="w-6 h-6 text-gray-700" />
                </button>
                <div className="logo-container">
                  <Logo />
                </div>
              </div>

              {/* Barra de pesquisa premium */}
              <div className="hidden md:flex search-container relative flex-1 max-w-2xl mx-8">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Buscar suplementos premium..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-300 bg-gray-50/50 focus:bg-white font-semibold text-gray-800 placeholder-gray-500 shadow-lg focus:shadow-xl focus:shadow-blue-500/20"
                  />
                  <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500" />

                  {/* Sugestões de busca premium */}
                  {searchQuery && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-100 rounded-2xl shadow-2xl z-40 max-h-64 overflow-y-auto">
                      <div className="p-4">
                        <div className="text-xs text-gray-500 uppercase tracking-wide mb-3 font-bold">
                          Sugestões Premium
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
                            className="block w-full text-left px-4 py-3 text-sm hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-xl transition-all duration-200 font-medium hover:text-blue-600"
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

              {/* Ações do usuário premium */}
              <div className="user-actions flex items-center space-x-3">
                {/* Pesquisa mobile */}
                <button className="md:hidden p-3 rounded-xl bg-gray-100 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200">
                  <MagnifyingGlassIcon className="w-6 h-6" />
                </button>

                {/* Conta com dropdown premium */}
                <div className="hidden sm:flex relative group">
                  <button className="p-3 rounded-xl bg-gray-100 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 flex items-center space-x-2">
                    <UserIcon className="w-6 h-6" />
                    <span className="hidden lg:inline font-semibold">
                      {isAuthenticated ? user?.name || 'Conta' : 'Conta'}
                    </span>
                  </button>
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border-2 border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-40">
                    <div className="py-3">
                      {!isAuthenticated ? (
                        <>
                          <Link
                            to="/login"
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 rounded-xl mx-2 transition-all duration-200 font-medium"
                          >
                            Fazer Login
                          </Link>
                          <Link
                            to="/cadastro"
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 rounded-xl mx-2 transition-all duration-200 font-medium"
                          >
                            Criar Conta
                          </Link>
                        </>
                      ) : (
                        <>
                          {isAdmin() && (
                            <>
                              <Link
                                to="/admin"
                                className="flex items-center space-x-2 px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 hover:text-purple-600 rounded-xl mx-2 transition-all duration-200 font-medium"
                              >
                                <CogIcon className="w-4 h-4" />
                                <span>Painel Admin</span>
                              </Link>
                              <hr className="my-2 mx-4" />
                            </>
                          )}
                          <Link
                            to="/minha-conta"
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 rounded-xl mx-2 transition-all duration-200 font-medium"
                          >
                            Minha Conta
                          </Link>
                          <Link
                            to="/pedidos"
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 rounded-xl mx-2 transition-all duration-200 font-medium"
                          >
                            Meus Pedidos
                          </Link>
                          <Link
                            to="/favoritos"
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 rounded-xl mx-2 transition-all duration-200 font-medium"
                          >
                            Favoritos
                          </Link>
                          <hr className="my-2 mx-4" />
                          <button
                            onClick={logout}
                            className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 hover:text-red-600 rounded-xl mx-2 transition-all duration-200 font-medium"
                          >
                            Sair
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Favoritos premium */}
                <button className="relative p-3 rounded-xl bg-gray-100 hover:bg-red-50 hover:text-red-600 transition-all duration-200">
                  <HeartIcon className="w-6 h-6" />
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg">
                    3
                  </span>
                  <span className="hidden lg:inline ml-2 font-semibold">
                    Favoritos
                  </span>
                </button>

                {/* Carrinho premium */}
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="relative p-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-blue-500/30 transform hover:scale-105 flex items-center space-x-2"
                >
                  <ShoppingCartIcon className="w-6 h-6" />
                  <span className="hidden lg:inline font-bold">Carrinho</span>
                  {getCartItemsCount() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg animate-bounce">
                      {getCartItemsCount()}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navegação de categorias - Design Premium */}
        <div className="bg-white border-t border-gray-100 shadow-lg sticky top-0 z-20">
          <div className="container-custom">
            <nav className="hidden lg:flex items-center justify-between py-4">
              <div className="flex items-center space-x-2">
                {/* Botão Todas Categorias Premium - efeito footer */}
                <Link
                  to="/"
                  className="group relative flex items-center space-x-2 text-gray-900 hover:text-blue-600 font-bold text-sm transition-all duration-300 px-6 py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transform hover:scale-105"
                >
                  <span className="relative pb-1">
                    TODAS CATEGORIAS
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>

                {/* Links de Categorias Premium - efeito footer */}
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    to={category.path}
                    className="group relative text-gray-800 hover:text-blue-600 font-semibold text-sm transition-all duration-300 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transform hover:scale-105"
                  >
                    <span className="relative pb-1">
                      {category.name.toUpperCase()}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                {/* Botão Ofertas - Simplificado */}
                <a
                  href="#"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold text-sm px-4 py-2 rounded-lg shadow-lg hover:from-red-600 hover:to-red-700 transition-colors duration-300"
                >
                  <span>🔥</span>
                  <span>OFERTAS</span>
                </a>

                {/* Info Premium */}
                <div className="hidden xl:flex items-center space-x-2 text-gray-700 text-sm font-semibold bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-2 rounded-xl border border-green-200">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Entrega em 24h para CE</span>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Menu mobile premium */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop premium */}
        <div
          className={`absolute inset-0 bg-black/70 backdrop-blur-lg transition-all duration-500 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Sidebar premium */}
        <div
          className={`absolute left-0 top-0 h-full w-96 max-w-[90vw] bg-white shadow-2xl transform transition-all duration-500 ease-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header premium */}
          <div className="flex justify-between items-center p-8 border-b-2 border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-3 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-red-500/30"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <Logo className="h-10 w-auto" />
          </div>

          {/* Content premium */}
          <div className="p-8 overflow-y-auto h-full pb-24">
            {/* Search premium */}
            <div className="mb-8 relative">
              <input
                type="text"
                placeholder="Buscar produtos premium..."
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 bg-gray-50 font-semibold text-gray-800 placeholder-gray-500 shadow-lg focus:shadow-xl transition-all duration-300"
              />
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500" />
            </div>

            {/* Navigation premium */}
            <nav className="space-y-3">
              <h3 className="text-sm font-black uppercase tracking-widest text-gray-800 mb-6 px-2 flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></span>
                <span>CATEGORIAS PREMIUM</span>
                <span>💪</span>
              </h3>
              {categories.map((category, index) => (
                <Link
                  key={category.name}
                  to={category.path}
                  className="group block px-6 py-4 text-gray-800 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-2xl transition-all duration-300 font-bold text-lg border-2 border-transparent hover:border-blue-200/50 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: "fadeInUp 0.5s ease-out forwards",
                  }}
                >
                  <span className="relative pb-1 block">
                    {category.name.toUpperCase()}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              ))}

              {/* Offers button premium */}
              <div className="pt-6">
                <a
                  href="#"
                  className="flex items-center justify-center space-x-3 px-8 py-5 bg-gradient-to-r from-red-500 via-red-600 to-pink-600 text-white font-black text-xl rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-red-400 hover:border-red-300"
                >
                  <span className="text-2xl animate-bounce">🔥</span>
                  <span className="tracking-widest">OFERTAS ESPECIAIS</span>
                  <span className="text-2xl animate-bounce">🚀</span>
                </a>
              </div>

              {/* User links premium */}
              <div className="mt-8 pt-6 border-t-2 border-gray-100 space-y-3">
                <h4 className="text-xs font-black uppercase tracking-widest text-gray-600 mb-4 px-2">
                  {isAuthenticated ? `Olá, ${user?.name}` : 'Minha Conta'}
                </h4>
                
                {!isAuthenticated ? (
                  <>
                    <Link
                      to="/login"
                      className="flex items-center space-x-3 px-6 py-4 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-2xl transition-all duration-300 font-semibold border-2 border-transparent hover:border-blue-200/50"
                    >
                      <span className="text-xl">👤</span>
                      <span>Fazer Login</span>
                    </Link>
                    <Link
                      to="/cadastro"
                      className="flex items-center space-x-3 px-6 py-4 text-gray-700 hover:text-green-600 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 rounded-2xl transition-all duration-300 font-semibold border-2 border-transparent hover:border-green-200/50"
                    >
                      <span className="text-xl">✨</span>
                      <span>Criar Conta</span>
                    </Link>
                  </>
                ) : (
                  <>
                    {isAdmin() && (
                      <Link
                        to="/admin"
                        className="flex items-center space-x-3 px-6 py-4 text-gray-700 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 rounded-2xl transition-all duration-300 font-semibold border-2 border-transparent hover:border-purple-200/50"
                      >
                        <span className="text-xl">⚙️</span>
                        <span>Painel Admin</span>
                      </Link>
                    )}
                    <Link
                      to="/minha-conta"
                      className="flex items-center space-x-3 px-6 py-4 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-2xl transition-all duration-300 font-semibold border-2 border-transparent hover:border-blue-200/50"
                    >
                      <span className="text-xl">👤</span>
                      <span>Minha Conta</span>
                    </Link>
                    <Link
                      to="/pedidos"
                      className="flex items-center space-x-3 px-6 py-4 text-gray-700 hover:text-green-600 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 rounded-2xl transition-all duration-300 font-semibold border-2 border-transparent hover:border-green-200/50"
                    >
                      <span className="text-xl">📦</span>
                      <span>Meus Pedidos</span>
                    </Link>
                  </>
                )}
                
                <Link
                  to="/favoritos"
                  className="flex items-center space-x-3 px-6 py-4 text-gray-700 hover:text-red-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 rounded-2xl transition-all duration-300 font-semibold border-2 border-transparent hover:border-red-200/50"
                >
                  <span className="text-xl">❤️</span>
                  <span>Favoritos</span>
                </Link>
                
                {isAuthenticated && (
                  <button
                    onClick={logout}
                    className="flex items-center space-x-3 px-6 py-4 text-gray-700 hover:text-red-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 rounded-2xl transition-all duration-300 font-semibold border-2 border-transparent hover:border-red-200/50 w-full text-left"
                  >
                    <span className="text-xl">🚪</span>
                    <span>Sair</span>
                  </button>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* CartSidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;
