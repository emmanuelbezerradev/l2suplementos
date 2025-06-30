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
        {/* Barra superior promocional estilo Growth */}
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

        {/* Header principal estilo Growth */}
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

              {/* Barra de pesquisa estilo Growth */}
              <div className="hidden md:flex search-container">
                <input
                  type="text"
                  placeholder="Buscar suplementos, proteínas, creatina..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
                <MagnifyingGlassIcon className="search-icon" />
              </div>

              {/* Ações do usuário */}
              <div className="user-actions">
                {/* Pesquisa mobile */}
                <button className="md:hidden action-btn">
                  <MagnifyingGlassIcon />
                </button>

                {/* Conta */}
                <button className="hidden sm:flex action-btn">
                  <UserIcon />
                  <span className="hidden lg:inline">Conta</span>
                </button>

                {/* Favoritos */}
                <button className="action-btn">
                  <HeartIcon />
                  <span className="badge red">3</span>
                </button>

                {/* Carrinho */}
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="action-btn"
                >
                  <ShoppingCartIcon />
                  {getCartItemsCount() > 0 && (
                    <span className="badge">{getCartItemsCount()}</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Menu de categorias estilo Growth */}
        <div className="header-nav">
          <div className="container-custom">
            <nav className="hidden lg:flex category-nav">
              <a href="#" className="category-link active">
                TODAS CATEGORIAS
              </a>
              {categories.map((category) => (
                <a key={category} href="#" className="category-link">
                  {category.toUpperCase()}
                </a>
              ))}
              <a href="#" className="offers-btn">
                🔥 OFERTAS
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="mobile-menu" onClick={() => setIsMenuOpen(false)}>
          <div
            className="mobile-menu-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="flex justify-between items-center"
              style={{ marginBottom: "32px" }}
            >
              <Logo />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="action-btn"
              >
                <XMarkIcon />
              </button>
            </div>

            {/* Pesquisa mobile */}
            <div style={{ marginBottom: "24px" }}>
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  className="search-input"
                />
                <MagnifyingGlassIcon className="search-icon" />
              </div>
            </div>

            {/* Categorias mobile */}
            <nav
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <a href="#" className="category-link active">
                TODAS CATEGORIAS
              </a>
              {categories.map((category) => (
                <a key={category} href="#" className="category-link">
                  {category}
                </a>
              ))}
              <a
                href="#"
                className="offers-btn"
                style={{ textAlign: "center" }}
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
