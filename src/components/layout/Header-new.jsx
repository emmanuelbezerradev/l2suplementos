import React, { useState, useRef, useCallback, useEffect } from "react";
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
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Logo from "../common/Logo";
import CartSidebar from "../common/CartSidebar";
import { useCart } from "../../contexts/CartContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const { getCartItemsCount } = useCart();
  const megaMenuTimeoutRef = useRef(null);

  // Controle mais robusto do mega menu
  const handleMegaMenuEnter = useCallback(() => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
      megaMenuTimeoutRef.current = null;
    }
    setIsMegaMenuOpen(true);
  }, []);

  const handleMegaMenuLeave = useCallback(() => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 150); // 150ms de tolerância
  }, []);

  // Cleanup do timeout quando o componente é desmontado
  useEffect(() => {
    return () => {
      if (megaMenuTimeoutRef.current) {
        clearTimeout(megaMenuTimeoutRef.current);
      }
    };
  }, []);

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
      {/* Barra superior promocional */}
      <div className="bg-gray-800 text-white text-xs py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="hidden md:flex items-center space-x-6">
            <span className="flex items-center space-x-1">
              <PhoneIcon className="w-3 h-3" />
              <span>(11) 99999-9999</span>
            </span>
            <span className="flex items-center space-x-1">
              <EnvelopeIcon className="w-3 h-3" />
              <span>contato@l2suplementos.com</span>
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1">
              <TruckIcon className="w-3 h-3 text-green-400" />
              <span>Frete grátis acima de R$ 199</span>
            </span>
            <span className="flex items-center space-x-1">
              <TagIcon className="w-3 h-3 text-yellow-400" />
              <span>20% OFF primeira compra</span>
            </span>
          </div>
        </div>
      </div>

      {/* Header principal - Design Ultra Clean */}
      <header className="bg-white/98 backdrop-blur-xl shadow-lg sticky top-0 z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo className="h-10 w-auto" />
            </div>

            {/* Navegação principal - Ultra Modern */}
            <nav className="hidden lg:flex items-center space-x-2">
              {/* Todas Categorias */}
              <div className="relative group">
                <div
                  className="relative"
                  onMouseEnter={handleMegaMenuEnter}
                  onMouseLeave={handleMegaMenuLeave}
                >
                  <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 px-4 py-2 rounded-lg hover:bg-gray-50">
                    <span>Todas Categorias</span>
                    <ChevronDownIcon className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-200" />
                  </button>

                  {/* Mega Menu Minimalista */}
                  {isMegaMenuOpen && (
                    <div
                      className="absolute top-full left-0 mt-1 z-50 w-72 bg-white shadow-xl border border-gray-100 rounded-xl p-3"
                      onMouseEnter={handleMegaMenuEnter}
                      onMouseLeave={handleMegaMenuLeave}
                    >
                      <div className="space-y-1">
                        {categories.map((category) => (
                          <a
                            key={category}
                            href="#"
                            className="group flex items-center justify-between px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50/70 rounded-lg transition-all duration-150"
                          >
                            <span className="font-medium">{category}</span>
                            <ChevronDownIcon className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transform -rotate-90 transition-all duration-150" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Links principais */}
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-gray-50">
                Proteínas
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-gray-50">
                Creatina
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-gray-50">
                Pré-Treino
              </a>
              
              {/* Botão Ofertas - Design ÉPICO */}
              <div className="relative ml-3">
                <a
                  href="#"
                  className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold px-6 py-2.5 rounded-lg shadow-lg hover:shadow-red-500/25 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  {/* Brilho animado */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  
                  {/* Background hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Conteúdo */}
                  <span className="relative z-10 text-lg">🔥</span>
                  <span className="relative z-10">Ofertas</span>
                  
                  {/* Indicador pulsante */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                </a>
              </div>
            </nav>
              <div className="relative group">
                {/* Botão com área de hover expandida */}
                <div
                  className="relative"
                  onMouseEnter={handleMegaMenuEnter}
                  onMouseLeave={handleMegaMenuLeave}
                >
                  <button className="relative flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 group py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-cyan-50/50 border border-transparent hover:border-blue-200/30">
                    {/* Background animado */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    
                    {/* Conteúdo */}
                    <div className="relative flex items-center space-x-2">
                      <span className="relative">
                        Todas Categorias
                        {/* Sublinhado neon 3D premium */}
                        <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 group-hover:w-full transition-all duration-700 ease-out shadow-lg shadow-blue-500/60 rounded-full transform scale-y-50 group-hover:scale-y-100"></span>
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 group-hover:w-full transition-all duration-700 delay-100 ease-out rounded-full"></span>
                      </span>
                      
                      {/* Ícone premium */}
                      <div className="relative">
                        <ChevronDownIcon className="w-4 h-4 transform group-hover:rotate-180 transition-all duration-500 ease-out" />
                        <div className="absolute inset-0 bg-blue-400 rounded-full opacity-0 group-hover:opacity-20 blur-sm transition-all duration-300"></div>
                      </div>
                    </div>

                    {/* Efeito de brilho */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out rounded-xl"></div>
                  </button>

                  {/* Mega Menu Premium - Funcional e Bonito */}
                  {isMegaMenuOpen && (
                    <div
                      className="absolute top-full left-0 mt-2 z-[60]"
                      onMouseEnter={handleMegaMenuEnter}
                      onMouseLeave={handleMegaMenuLeave}
                    >
                      {/* Container com glassmorphism */}
                      <div className="relative">
                        {/* Sombra externa glowing */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-lg scale-105"></div>
                        
                        {/* Menu principal */}
                        <div className="relative w-96 bg-white/95 backdrop-blur-xl shadow-2xl border border-gray-200/50 rounded-2xl p-6 transform transition-all duration-300 ease-out hover:shadow-blue-500/20">
                          {/* Background decorativo */}
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/30 rounded-2xl opacity-50"></div>
                          
                          {/* Header premium */}
                          <div className="relative mb-4 pb-3 border-b border-gray-200/50">
                            <div className="flex items-center justify-between">
                              <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider">
                                ✨ Todas as Categorias
                              </h3>
                              <div className="flex space-x-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse delay-100"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse delay-200"></div>
                              </div>
                            </div>
                          </div>

                          {/* Categorias com efeitos premium */}
                          <div className="relative space-y-1">
                            {categories.map((category, index) => (
                              <a
                                key={category}
                                href="#"
                                className="group relative block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md overflow-hidden border border-transparent hover:border-blue-200/50"
                                style={{
                                  animationDelay: `${index * 0.05}s`,
                                  animation: 'fadeInUp 0.3s ease-out forwards'
                                }}
                              >
                                {/* Efeito shimmer */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>

                                {/* Conteúdo */}
                                <div className="relative flex items-center justify-between z-10">
                                  <span className="relative font-medium flex items-center space-x-3">
                                    <span className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 transform scale-0 group-hover:scale-100 transition-all duration-200 shadow-lg shadow-blue-400/50"></span>
                                    <span className="relative">
                                      {category}
                                      {/* Sublinhado neon 3D premium */}
                                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 group-hover:w-full transition-all duration-500 ease-out shadow-lg shadow-blue-500/50 group-hover:shadow-blue-400/70 rounded-full"></span>
                                    </span>
                                  </span>

                                  {/* Indicador direita */}
                                  <ChevronDownIcon className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transform -rotate-90 group-hover:rotate-0 transition-all duration-300" />
                                </div>

                                {/* Bordas animadas */}
                                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 delay-100"></div>
                                </div>
                              </a>
                            ))}
                          </div>

                          {/* Footer premium */}
                          <div className="relative mt-4 pt-3 border-t border-gray-200/30">
                            <div className="text-center">
                              <div className="inline-flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full border border-blue-200/30 hover:border-blue-300/50 transition-all duration-200">
                                <span className="text-lg animate-pulse">💪</span>
                                <span className="text-xs font-medium text-gray-600">
                                  Encontre o suplemento ideal para você
                                </span>
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <a
                href="#"
                className="relative text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 group py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-cyan-50/50 border border-transparent hover:border-blue-200/30"
              >
                <span className="relative">
                  Proteínas
                  {/* Sublinhado neon 3D premium */}
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 group-hover:w-full transition-all duration-700 ease-out shadow-lg shadow-blue-500/60 rounded-full transform scale-y-50 group-hover:scale-y-100"></span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 group-hover:w-full transition-all duration-700 delay-100 ease-out rounded-full"></span>
                </span>
                {/* Efeito de brilho */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out rounded-xl"></div>
              </a>
              <a
                href="#"
                className="relative text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 group py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-cyan-50/50 border border-transparent hover:border-blue-200/30"
              >
                <span className="relative">
                  Creatina
                  {/* Sublinhado neon 3D premium */}
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 group-hover:w-full transition-all duration-700 ease-out shadow-lg shadow-blue-500/60 rounded-full transform scale-y-50 group-hover:scale-y-100"></span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 group-hover:w-full transition-all duration-700 delay-100 ease-out rounded-full"></span>
                </span>
                {/* Efeito de brilho */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out rounded-xl"></div>
              </a>
              <a
                href="#"
                className="relative text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 group py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-cyan-50/50 border border-transparent hover:border-blue-200/30"
              >
                <span className="relative">
                  Pré-Treino
                  {/* Sublinhado neon 3D premium */}
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 group-hover:w-full transition-all duration-700 ease-out shadow-lg shadow-blue-500/60 rounded-full transform scale-y-50 group-hover:scale-y-100"></span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 group-hover:w-full transition-all duration-700 delay-100 ease-out rounded-full"></span>
                </span>
                {/* Efeito de brilho */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out rounded-xl"></div>
              </a>
              <a
                href="#"
                className="group relative bg-red-500 text-white px-4 py-2 rounded-full font-medium hover:bg-red-600 transition-all duration-300 transform hover:scale-105 overflow-hidden border border-transparent"
              >
                {/* Efeito de borda neon animada - versão compacta para desktop */}
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-orange-400 group-hover:w-full transition-all duration-500 ease-out shadow-md shadow-yellow-400/40"></span>
                  <span className="absolute top-0 right-0 h-0 w-0.5 bg-gradient-to-b from-transparent via-yellow-400 to-orange-400 group-hover:h-full transition-all duration-500 delay-100 ease-out shadow-md shadow-yellow-400/40"></span>
                  <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-l from-transparent via-yellow-400 to-orange-400 group-hover:w-full transition-all duration-500 delay-200 ease-out shadow-md shadow-yellow-400/40"></span>
                  <span className="absolute bottom-0 left-0 h-0 w-0.5 bg-gradient-to-t from-transparent via-yellow-400 to-orange-400 group-hover:h-full transition-all duration-500 delay-300 ease-out shadow-md shadow-yellow-400/40"></span>
                </span>

                <span className="relative z-10">🔥 Ofertas</span>
              </a>
            </nav>

            {/* Busca e ações - Design Clean */}
            <div className="flex items-center space-x-3">
              {/* Busca moderna */}
              <div className="hidden md:flex relative">
                <input
                  type="text"
                  placeholder="Buscar suplementos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-72 pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50/50 focus:bg-white"
                />
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>

              {/* Ações do usuário - Clean */}
              <button className="hidden sm:flex p-2.5 text-gray-600 hover:text-blue-600 transition-colors duration-200 rounded-lg hover:bg-gray-50">
                <UserIcon className="w-5 h-5" />
              </button>

              <button className="relative p-2.5 text-gray-600 hover:text-red-600 transition-colors duration-200 rounded-lg hover:bg-gray-50">
                <HeartIcon className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold">
                  3
                </span>
              </button>

              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 text-gray-600 hover:text-blue-600 transition-colors duration-200 rounded-lg hover:bg-gray-50"
              >
                <ShoppingCartIcon className="w-5 h-5" />
                {getCartItemsCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold">
                    {getCartItemsCount()}
                  </span>
                )}
              </button>

              {/* Menu mobile */}
              <button
                className="lg:hidden p-2.5 text-gray-600 hover:text-gray-800 transition-colors duration-200 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Bars3Icon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menu mobile - Slide from right with premium animations */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop with blur */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-xl shadow-2xl transform transition-all duration-500 ease-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with gradient */}
          <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200/50">
            <div className="flex justify-between items-center p-6">
              <Logo className="h-10 w-auto drop-shadow-lg" />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2.5 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 group"
              >
                <XMarkIcon className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors duration-200" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto h-full">
            {/* Search with premium styling */}
            <div className="relative mb-8 group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl blur-lg group-focus-within:from-blue-500/20 group-focus-within:to-indigo-500/20 transition-all duration-300"></div>
              <input
                type="text"
                placeholder="Buscar produtos..."
                className="relative w-full pl-12 pr-4 py-4 border-2 border-gray-200/60 rounded-2xl focus:border-blue-500 focus:outline-none transition-all duration-300 bg-gray-50/50 focus:bg-white text-gray-700 placeholder-gray-400 backdrop-blur-sm"
              />
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-300" />
            </div>

            {/* Navigation with premium effects */}
            <nav className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4 px-2">
                Categorias
              </h3>
              {categories.map((category, index) => (
                <a
                  key={category}
                  href="#"
                  className="group relative flex items-center justify-between px-4 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md active:scale-[0.98] touch-manipulation overflow-hidden border border-transparent hover:border-blue-200"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: isMenuOpen
                      ? "slideInFromRight 0.6s ease-out forwards"
                      : "none",
                  }}
                >
                  {/* Efeito de borda neon animada */}
                  <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-cyan-400 group-hover:w-full transition-all duration-700 ease-out shadow-lg shadow-blue-400/50"></span>
                    <span className="absolute top-0 right-0 h-0 w-0.5 bg-gradient-to-b from-transparent via-blue-400 to-cyan-400 group-hover:h-full transition-all duration-700 delay-200 ease-out shadow-lg shadow-blue-400/50"></span>
                    <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-l from-transparent via-blue-400 to-cyan-400 group-hover:w-full transition-all duration-700 delay-400 ease-out shadow-lg shadow-blue-400/50"></span>
                    <span className="absolute bottom-0 left-0 h-0 w-0.5 bg-gradient-to-t from-transparent via-blue-400 to-cyan-400 group-hover:h-full transition-all duration-700 delay-600 ease-out shadow-lg shadow-blue-400/50"></span>
                  </span>

                  <span className="font-medium relative z-10">
                    {category}
                    {/* Efeito de sublinhado neon 3D */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 group-hover:w-full transition-all duration-500 ease-out shadow-lg shadow-blue-500/50 group-hover:shadow-blue-400/70 rounded-full"></span>
                  </span>
                  <span className="relative z-10 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300 shadow-lg shadow-blue-400/50"></span>
                </a>
              ))}

              {/* Offers button with special styling */}
              <div className="pt-4">
                <a
                  href="#"
                  className="group relative flex items-center justify-center px-6 py-4 bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 overflow-hidden touch-manipulation border border-transparent"
                >
                  {/* Efeito de borda neon animada para ofertas */}
                  <span className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-orange-400 group-hover:w-full transition-all duration-700 ease-out shadow-lg shadow-yellow-400/50"></span>
                    <span className="absolute top-0 right-0 h-0 w-0.5 bg-gradient-to-b from-transparent via-yellow-400 to-orange-400 group-hover:h-full transition-all duration-700 delay-200 ease-out shadow-lg shadow-yellow-400/50"></span>
                    <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-l from-transparent via-yellow-400 to-orange-400 group-hover:w-full transition-all duration-700 delay-400 ease-out shadow-lg shadow-yellow-400/50"></span>
                    <span className="absolute bottom-0 left-0 h-0 w-0.5 bg-gradient-to-t from-transparent via-yellow-400 to-orange-400 group-hover:h-full transition-all duration-700 delay-600 ease-out shadow-lg shadow-yellow-400/50"></span>
                  </span>

                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400/50 to-pink-500/50 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                  {/* Content */}
                  <span className="relative z-10 flex items-center space-x-2">
                    <span className="text-lg animate-bounce">🔥</span>
                    <span>Ofertas Especiais</span>
                  </span>

                  {/* Sparkle effects */}
                  <div className="absolute top-1 right-2 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-ping z-10"></div>
                  <div className="absolute bottom-1 left-3 w-1 h-1 bg-white rounded-full animate-pulse z-10"></div>
                </a>
              </div>
            </nav>

            {/* Footer info */}
            <div className="mt-8 pt-6 border-t border-gray-200/50">
              <div className="text-center text-sm text-gray-500 space-y-2">
                <p className="font-medium">💪 Transforme seu corpo</p>
                <p>Suplementos de qualidade premium</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;
