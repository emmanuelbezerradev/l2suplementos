import React, { useState, useRef } from "react";
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

const categories = [
  "Proteínas",
  "Creatina",
  "Pré-Treino",
  "Vitaminas",
  "Queimadores",
  "Massa Muscular",
  "Aminoácidos",
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const { getCartItemsCount } = useCart();
  const dropdownRef = useRef();

  // Fecha dropdown ao clicar fora
  React.useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    }
    if (isDropdownOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isDropdownOpen]);

  return (
    <>
      <header className="relative z-40">
        {/* Barra superior glassmorphism */}
        <div className="backdrop-blur-md bg-white/60 border-b border-primary-100/20 text-xs text-primary-800 font-medium tracking-wide py-1.5 select-none">
          <div className="container-custom flex justify-between items-center">
            <div className="hidden md:flex items-center gap-6">
              <span className="flex items-center gap-1.5 text-primary-500/80">
                <PhoneIcon className="w-4 h-4" aria-hidden="true" />
                <span className="hover:text-primary-900 transition-colors">
                  (85) 99985-00344
                </span>
              </span>
              <span className="flex items-center gap-1.5 text-primary-500/80">
                <EnvelopeIcon className="w-4 h-4" aria-hidden="true" />
                <span className="hover:text-primary-900 transition-colors">
                  emmanuelbezerra1992@gmail.com
                </span>
              </span>
            </div>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 text-primary-500/80">
                <TruckIcon className="w-4 h-4" aria-hidden="true" />
                <span className="hidden sm:inline">
                  Frete grátis acima de R$ 199
                </span>
                <span className="sm:hidden">Frete grátis R$ 199+</span>
              </span>
              <span className="flex items-center gap-1.5 text-primary-500/80">
                <TagIcon className="w-4 h-4" aria-hidden="true" />
                <span className="hidden sm:inline">
                  20% OFF na primeira compra
                </span>
                <span className="sm:hidden">20% OFF</span>
              </span>
            </div>
          </div>
        </div>

        {/* Header principal glassmorphism */}
        <div className="sticky top-0 w-full z-40 bg-white/80 backdrop-blur-xl shadow-xl shadow-primary-100/10 border-b border-primary-100/10">
          <div className="container-custom flex items-center justify-between py-3 md:py-4">
            {/* Menu mobile */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-primary-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
              aria-label="Abrir menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Bars3Icon className="w-7 h-7 text-primary-700" />
            </button>
            {/* Logo centralizado no desktop */}
            <div className="flex-1 flex items-center justify-center lg:justify-start">
              <Logo />
            </div>
            {/* Barra de pesquisa premium */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8 relative group">
              <input
                type="text"
                placeholder="Buscar suplementos, proteínas, creatina..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-2.5 rounded-full border border-primary-100 bg-white/80 text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-all placeholder-primary-400 shadow-inner group-hover:shadow-lg"
                aria-label="Buscar produtos"
              />
              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 text-primary-400 hover:text-primary-600 transition-colors focus:outline-none"
                aria-label="Buscar"
              >
                <MagnifyingGlassIcon className="w-5 h-5" />
              </button>
              {/* Sugestões de busca */}
              {searchQuery && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-primary-100 rounded-xl shadow-2xl z-50 max-h-64 overflow-y-auto animate-fade-in">
                  <div className="p-2">
                    <div className="text-xs text-primary-400 uppercase tracking-wide mb-2">
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
                        className="block w-full text-left px-3 py-2 text-sm rounded hover:bg-primary-50 focus:bg-primary-100 transition-colors"
                        onClick={() => setSearchQuery(suggestion)}
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {/* Ações do usuário premium */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Pesquisa mobile */}
              <button
                className="md:hidden p-2 rounded-md hover:bg-primary-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
                aria-label="Buscar"
              >
                <MagnifyingGlassIcon className="w-6 h-6 text-primary-700" />
              </button>
              {/* Conta com dropdown glass e seta */}
              <div className="hidden sm:block relative" ref={dropdownRef}>
                <button
                  className="flex items-center gap-1 px-3 py-2 rounded-full text-primary-700 hover:bg-primary-50 font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
                  aria-haspopup="true"
                  aria-expanded={isDropdownOpen}
                  onClick={() => setIsDropdownOpen((v) => !v)}
                >
                  <UserIcon className="w-6 h-6" />
                  <span className="hidden lg:inline">Conta</span>
                  <svg
                    className={`w-4 h-4 ml-1 text-primary-400 transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M6 8l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div
                  className={`absolute right-0 mt-2 w-56 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-primary-100/30 transition-all duration-200 z-50 ${
                    isDropdownOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  <div className="py-2">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-primary-700 hover:bg-primary-50 rounded transition-colors"
                    >
                      Minha Conta
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-primary-700 hover:bg-primary-50 rounded transition-colors"
                    >
                      Meus Pedidos
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-primary-700 hover:bg-primary-50 rounded transition-colors"
                    >
                      Favoritos
                    </a>
                    <hr className="my-1 border-primary-100/40" />
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-primary-700 hover:bg-primary-50 rounded transition-colors"
                    >
                      Sair
                    </a>
                  </div>
                </div>
              </div>
              {/* Favoritos com badge animado */}
              <button
                className="relative p-2 rounded-full hover:bg-primary-50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 group"
                aria-label="Favoritos"
              >
                <HeartIcon className="w-6 h-6 text-primary-700" />
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce shadow-md border-2 border-white">
                  3
                </span>
                <span className="hidden lg:inline ml-1 text-primary-700 font-medium">
                  Favoritos
                </span>
              </button>
              {/* Carrinho com badge animado */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold shadow hover:from-primary-500 hover:to-primary-600 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
                aria-label="Abrir carrinho"
              >
                <ShoppingCartIcon className="w-6 h-6" />
                <span className="hidden lg:inline">Carrinho</span>
                {getCartItemsCount() > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse shadow-md border-2 border-white">
                    {getCartItemsCount()}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Navegação de categorias com tabs animadas */}
        <div className="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-700 shadow-sm relative overflow-x-auto">
          <div className="container-custom">
            <nav className="hidden lg:flex items-center justify-between py-2.5 relative">
              <div className="flex items-center gap-1.5 relative">
                {/* Indicador animado da categoria ativa */}
                <div className="absolute left-0 top-full h-1 w-full pointer-events-none">
                  <div
                    className="transition-all duration-300 bg-white rounded-full shadow"
                    style={{
                      width: `120px`,
                      transform: `translateX(${activeCategory * 124}px)`,
                    }}
                  />
                </div>
                <a
                  href="#"
                  className={`category-link px-4 py-2 rounded-full font-semibold tracking-wide shadow-sm border border-white/10 transition-all duration-200 ${
                    activeCategory === 0
                      ? "bg-white/90 text-primary-700"
                      : "bg-white/10 text-white/90 hover:bg-white/20 hover:text-white"
                  }`}
                  onClick={() => setActiveCategory(0)}
                >
                  TODAS CATEGORIAS
                </a>
                {categories.map((category, idx) => (
                  <a
                    key={category}
                    href="#"
                    className={`category-link px-4 py-2 rounded-full font-medium tracking-wide transition-all duration-150 border border-white/10 ${
                      activeCategory === idx + 1
                        ? "bg-white/90 text-primary-700 shadow"
                        : "bg-white/10 text-white/90 hover:bg-white/20 hover:text-white"
                    }`}
                    onClick={() => setActiveCategory(idx + 1)}
                  >
                    {category.toUpperCase()}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="offers-btn bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-bold shadow hover:from-orange-400 hover:to-red-400 hover:shadow-lg transform hover:scale-105 transition-all flex items-center gap-2 relative"
                >
                  <span>🔥</span>
                  <span>OFERTAS</span>
                  <span className="bg-yellow-400 text-red-600 text-xs px-2 py-1 rounded-full font-bold ml-1 animate-pulse absolute -top-3 -right-6 shadow-lg">
                    NOVO
                  </span>
                </a>
                <div className="hidden xl:flex items-center gap-2 text-white/90 text-sm">
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

      {/* Menu mobile glassmorphism */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-50"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="fixed left-0 top-0 h-full w-80 bg-white/90 backdrop-blur-xl shadow-2xl transform transition-transform duration-300 animate-slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4">
              <div className="flex justify-between items-center mb-6">
                <Logo />
                <button
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Fechar menu"
                >
                  <XMarkIcon className="w-6 h-6 text-primary-700" />
                </button>
              </div>
              {/* Pesquisa mobile */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  className="w-full px-4 py-2 border border-primary-100 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-400"
                />
              </div>
              {/* Menu de categorias */}
              <div className="space-y-2">
                <h3 className="font-bold text-primary-700 mb-3">Categorias</h3>
                {["Todas Categorias", ...categories].map((category, idx) => (
                  <a
                    key={category}
                    href="#"
                    className={`block px-4 py-3 rounded-full font-medium transition-colors ${
                      activeCategory === idx
                        ? "bg-primary-600 text-white shadow"
                        : "text-primary-700 hover:bg-primary-50"
                    }`}
                    onClick={() => setActiveCategory(idx)}
                  >
                    {category}
                  </a>
                ))}
                <a
                  href="#"
                  className="block px-4 py-3 text-orange-600 font-bold hover:bg-orange-50 rounded-full transition-colors"
                >
                  🔥 Ofertas Especiais
                </a>
              </div>
              {/* Links do usuário */}
              <div className="mt-6 pt-6 border-t border-primary-100 space-y-2">
                <a
                  href="#"
                  className="block px-4 py-3 text-primary-700 hover:bg-primary-50 rounded-full transition-colors"
                >
                  👤 Minha Conta
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 text-primary-700 hover:bg-primary-50 rounded-full transition-colors"
                >
                  ❤️ Favoritos
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 text-primary-700 hover:bg-primary-50 rounded-full transition-colors"
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
