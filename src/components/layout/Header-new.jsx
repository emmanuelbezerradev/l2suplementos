import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiShoppingCart, FiSearch, FiUser, FiMenu, FiX, FiHeart, FiTruck, FiStar, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { useCart } from '../../contexts/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const { cart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { name: 'Creatina', path: '/creatina' },
    { name: 'Proteínas', path: '/proteinas' },
    { name: 'Pré-Treino', path: '/pre-treino' },
    { name: 'Vitaminas', path: '/vitaminas' },
    { name: 'Queimadores', path: '/queimadores' },
    { name: 'Massa Muscular', path: '/massa-muscular' },
    { name: 'Aminoácidos', path: '/aminoacidos' }
  ];

  const topBarLinks = [
    { icon: FiTruck, text: 'Frete Grátis acima de R$ 99', color: 'text-green-400' },
    { icon: FiStar, text: 'Avaliação 4.9/5', color: 'text-yellow-400' },
    { icon: FiPhone, text: '(11) 9999-9999', color: 'text-blue-400' }
  ];

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200/50' 
          : 'bg-white/80 backdrop-blur-md'
      }`}
      style={{ 
        animation: 'slideInDown 0.6s ease-out' 
      }}
    >
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-2 px-4 overflow-hidden">
        <div className="container mx-auto">
          <div 
            className="flex items-center justify-between text-sm opacity-0"
            style={{ animation: 'fadeIn 0.8s ease-out 0.2s forwards' }}
          >
            <div className="flex items-center space-x-6">
              {topBarLinks.map((link, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200"
                >
                  <link.icon className={`w-4 h-4 ${link.color}`} />
                  <span className="hidden sm:inline">{link.text}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <div 
                className="flex items-center space-x-2 hover:text-blue-400 transition-colors hover:scale-105"
              >
                <FiMapPin className="w-4 h-4" />
                <span className="hidden md:inline">São Paulo, SP</span>
              </div>
              <div 
                className="flex items-center space-x-2 hover:text-green-400 transition-colors hover:scale-105"
              >
                <FiMail className="w-4 h-4" />
                <span className="hidden md:inline">contato@l2suplementos.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 hover:scale-105 transition-all duration-300"
          >
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">L2</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  L2 Suplementos
                </h1>
                <p className="text-xs text-gray-500 -mt-1">Força & Resultados</p>
              </div>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div 
              className="relative w-full opacity-0"
              style={{ animation: 'fadeIn 0.8s ease-out 0.3s forwards' }}
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar produtos, marcas ou categorias..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400"
                />
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                {searchTerm && (
                  <button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 hover:scale-110 transition-all duration-200"
                    onClick={() => setSearchTerm('')}
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Search Button (Mobile) */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors hover:scale-110"
              onClick={() => setShowSearch(!showSearch)}
            >
              <FiSearch className="w-6 h-6 text-gray-600" />
            </button>

            {/* Wishlist */}
            <button 
              className="relative p-2 rounded-full hover:bg-gray-100 transition-colors group hover:scale-110"
            >
              <FiHeart className="w-6 h-6 text-gray-600 group-hover:text-red-500 transition-colors" />
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            {/* User Account */}
            <button 
              className="hidden sm:flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 transition-colors hover:scale-105"
            >
              <FiUser className="w-6 h-6 text-gray-600" />
              <span className="hidden lg:inline text-gray-600">Minha Conta</span>
            </button>

            {/* Cart */}
            <button 
              className="relative p-2 rounded-full hover:bg-gray-100 transition-colors group hover:scale-110"
            >
              <FiShoppingCart className="w-6 h-6 text-gray-600 group-hover:text-blue-500 transition-colors" />
              {cartItemCount > 0 && (
                <span 
                  className="absolute -top-2 -right-2 w-5 h-5 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse"
                >
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6 text-gray-600" />
              ) : (
                <FiMenu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {showSearch && (
          <div
            className="md:hidden mt-4 opacity-0"
            style={{ animation: 'slideDown 0.3s ease-out forwards' }}
          >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm"
                />
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>
          )}
        )}
      </div>

      {/* Navigation */}
      <nav className="border-t border-gray-200/50 bg-white/90 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="hidden md:flex items-center justify-between py-4">
            {/* Categories */}
            <div className="flex items-center space-x-8">
              {categories.map((category, index) => (
                <div
                  key={category.name}
                  className="opacity-0"
                  style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards` }}
                >
                  <Link
                    to={category.path}
                    className={`relative py-2 px-4 rounded-lg transition-all duration-300 font-medium hover:bg-blue-50 hover:text-blue-600 group ${
                      location.pathname === category.path
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {category.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </div>
              ))}
            </div>

            {/* Special Offers Button */}
            <div className="hover:scale-105 transition-transform duration-300">
              <Link
                to="/ofertas"
                className="relative px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-full overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25"
              >
                <span className="relative z-10">🔥 OFERTAS</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-xl opacity-0"
          style={{ animation: 'slideDown 0.3s ease-out forwards' }}
        >
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-4">
                {categories.map((category, index) => (
                  <div
                    key={category.name}
                    className="opacity-0"
                    style={{ animation: `fadeInLeft 0.4s ease-out ${index * 0.1}s forwards` }}
                  >
                    <Link
                      to={category.path}
                      className={`block py-3 px-4 rounded-xl transition-all duration-300 font-medium ${
                        location.pathname === category.path
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  </div>
                ))}
                
                <div
                  className="pt-4 border-t border-gray-200 opacity-0"
                  style={{ animation: `fadeInLeft 0.4s ease-out ${categories.length * 0.1}s forwards` }}
                >
                  <Link
                    to="/ofertas"
                    className="block py-3 px-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-xl text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    🔥 OFERTAS ESPECIAIS
                  </Link>
                </div>

                <div className="pt-4 border-t border-gray-200 space-y-2">
                  <Link
                    to="/conta"
                    className="flex items-center space-x-3 py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FiUser className="w-5 h-5" />
                    <span>Minha Conta</span>
                  </Link>
                  <Link
                    to="/favoritos"
                    className="flex items-center space-x-3 py-3 px-4 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FiHeart className="w-5 h-5" />
                    <span>Favoritos</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      )}
    </header>
  );
};

export default Header;
