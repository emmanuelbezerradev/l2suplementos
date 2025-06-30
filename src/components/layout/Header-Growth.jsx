import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  HeartIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Logo from "../common/Logo";
import CartSidebar from "../common/CartSidebar";
import { useCart } from "../../contexts/CartContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const { getCartItemsCount } = useCart();

  const categories = [
    {
      name: "PROTEÍNAS",
      subcategories: [
        "Whey Protein",
        "Caseína",
        "Albumina",
        "Proteína Vegetal",
      ],
    },
    {
      name: "CREATINA",
      subcategories: ["Monohidratada", "Alcalina", "HCL", "Micronizada"],
    },
    {
      name: "PRÉ-TREINO",
      subcategories: ["Com Cafeína", "Sem Cafeína", "Natural", "Importado"],
    },
    {
      name: "VITAMINAS",
      subcategories: [
        "Multivitamínico",
        "Vitamina D",
        "Vitamina C",
        "Complexo B",
      ],
    },
    {
      name: "QUEIMADORES",
      subcategories: ["Termogênico", "Lipogênico", "Natural", "Importado"],
    },
    {
      name: "MASSA MUSCULAR",
      subcategories: [
        "Hipercalórico",
        "Maltodextrina",
        "Dextrose",
        "Waxy Maize",
      ],
    },
    {
      name: "AMINO",
      subcategories: ["BCAA", "Glutamina", "Arginina", "Beta Alanina"],
    },
    {
      name: "OFERTAS",
      subcategories: [
        "Até 30% OFF",
        "Até 50% OFF",
        "Liquidação",
        "Kit Promocional",
      ],
    },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar - Estilo Growth */}
      <div className="top-bar">
        <div className="container-custom flex justify-between items-center text-sm py-2">
          <div className="flex items-center space-x-6">
            <span className="hidden md:block">📞 (11) 99999-9999</span>
            <span className="hidden lg:block">
              📧 contato@l2suplementos.com
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <span className="animate-pulse">
              🚚 FRETE GRÁTIS acima de R$ 299,00
            </span>
            <span className="hidden lg:block text-yellow-300 font-semibold">
              🔥 20% OFF na primeira compra
            </span>
          </div>
        </div>
      </div>

      {/* Header Principal - Estilo Growth */}
      <div className="container-custom py-4">
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <Logo className="h-12 w-auto" />
          </div>

          {/* Barra de Pesquisa - Estilo Growth */}
          <div className="header-search relative">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Encontre o suplemento ideal para você"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Ações do usuário - Estilo Growth */}
          <div className="flex items-center space-x-4">
            {/* Login */}
            <button className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
              <UserIcon className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs text-gray-500">Cadastre-se ou</div>
                <div className="text-sm font-semibold">faça seu login</div>
              </div>
            </button>

            {/* Favoritos */}
            <button className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors">
              <HeartIcon className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>

            {/* Carrinho */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <ShoppingCartIcon className="w-6 h-6" />
              {getCartItemsCount() > 0 && (
                <span className="cart-badge">{getCartItemsCount()}</span>
              )}
            </button>

            {/* Menu Mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
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

      {/* Navigation Menu - Estilo Growth */}
      <nav className="border-t border-gray-200 bg-white">
        <div className="container-custom">
          <div className="hidden md:flex items-center justify-between py-3">
            {/* Categorias Button */}
            <div className="relative">
              <button
                className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                onClick={() =>
                  setActiveCategory(activeCategory ? null : "menu")
                }
              >
                <Bars3Icon className="w-5 h-5" />
                <span>TODAS CATEGORIAS</span>
                <ChevronDownIcon
                  className={`w-4 h-4 transition-transform ${
                    activeCategory ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Categorias */}
              {activeCategory && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-xl shadow-2xl z-50">
                  <div className="p-4 grid grid-cols-1 gap-2">
                    {categories.map((category) => (
                      <div key={category.name} className="group">
                        <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors">
                          {category.name}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Links principais */}
            <div className="flex items-center space-x-8">
              {categories.slice(0, 7).map((category) => (
                <button
                  key={category.name}
                  className="nav-link relative group"
                  onMouseEnter={() => setActiveCategory(category.name)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  {category.name}

                  {/* Submenu */}
                  {activeCategory === category.name && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-2xl z-50">
                      <div className="p-4">
                        <div className="text-sm font-semibold text-gray-800 mb-3 pb-2 border-b">
                          {category.name}
                        </div>
                        <div className="space-y-2">
                          {category.subcategories.map((sub) => (
                            <button
                              key={sub}
                              className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            >
                              {sub}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </button>
              ))}

              <button className="nav-link text-orange-600 font-bold">
                🔥 OFERTAS
              </button>
            </div>
          </div>

          {/* Menu Mobile */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200">
              <div className="py-4 space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    className="w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Header;
