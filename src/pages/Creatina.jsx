import React, { useState } from "react";
import { 
  AdjustmentsHorizontalIcon, 
  Squares2X2Icon, 
  ListBulletIcon,
  MagnifyingGlassIcon,
  StarIcon,
  ShoppingCartIcon,
  HeartIcon,
  FireIcon
} from "@heroicons/react/24/outline";
import { StarIcon as StarSolidIcon } from "@heroicons/react/24/solid";

const Creatina = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("relevance");
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);

  const brands = [
    "Growth", "Integral Médica", "Max Titanium", "Probiótica", "Optimum Nutrition",
    "Universal", "BSN", "Muscletech", "Atlhetica", "Black Skull"
  ];

  const creatineTypes = [
    "Creatina Monohidratada", "Creatina Micronizada", "Creatina Alcalina", 
    "Creatina HCl", "Creatina + Dextrose", "Creatina Premium"
  ];

  const products = [
    {
      id: 1,
      name: "Creatina Monohidratada - Growth",
      brand: "Growth",
      type: "Creatina Monohidratada",
      price: 49.90,
      originalPrice: 69.90,
      discount: 29,
      rating: 4.9,
      reviews: 2847,
      image: "/src/assets/creatina-growth.jpg",
      size: "300g",
      bestSeller: true,
      freeShipping: true,
      purity: "99.9%"
    },
    {
      id: 2,
      name: "Creatina Creapure - Integral",
      brand: "Integral Médica",
      type: "Creatina Premium",
      price: 89.90,
      originalPrice: 119.90,
      discount: 25,
      rating: 4.8,
      reviews: 1234,
      image: "/src/assets/creatina-integral.jpg",
      size: "300g",
      bestSeller: false,
      freeShipping: true,
      purity: "99.9%"
    },
    {
      id: 3,
      name: "Creatina Alcalina - Max Titanium",
      brand: "Max Titanium",
      type: "Creatina Alcalina",
      price: 79.90,
      originalPrice: 99.90,
      discount: 20,
      rating: 4.7,
      reviews: 892,
      image: "/src/assets/creatina-max.jpg",
      size: "120 cápsulas",
      bestSeller: false,
      freeShipping: false,
      purity: "99.5%"
    },
    {
      id: 4,
      name: "Creatina + Dextrose - Probiótica",
      brand: "Probiótica",
      type: "Creatina + Dextrose",
      price: 59.90,
      originalPrice: 79.90,
      discount: 25,
      rating: 4.6,
      reviews: 567,
      image: "/src/assets/creatina-probiotica.jpg",
      size: "300g",
      bestSeller: false,
      freeShipping: true,
      purity: "99.8%"
    },
    {
      id: 5,
      name: "Creatina Micronizada - Optimum",
      brand: "Optimum Nutrition",
      type: "Creatina Micronizada",
      price: 159.90,
      originalPrice: 189.90,
      discount: 16,
      rating: 4.9,
      reviews: 1893,
      image: "/src/assets/creatina-optimum.jpg",
      size: "300g",
      bestSeller: true,
      freeShipping: true,
      purity: "99.9%"
    },
    {
      id: 6,
      name: "Creatina HCl - Black Skull",
      brand: "Black Skull",
      type: "Creatina HCl",
      price: 89.90,
      originalPrice: 109.90,
      discount: 18,
      rating: 4.7,
      reviews: 456,
      image: "/src/assets/creatina-black.jpg",
      size: "90 cápsulas",
      bestSeller: false,
      freeShipping: true,
      purity: "99.7%"
    }
  ];

  const handleBrandFilter = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const handleTypeFilter = (type) => {
    setSelectedTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const filteredProducts = products.filter(product => {
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(product.type);
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return brandMatch && typeMatch && priceMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "discount":
        return b.discount - a.discount;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header da Categoria */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <FireIcon className="w-12 h-12 text-orange-200 mr-4" />
              <h1 className="text-4xl lg:text-5xl font-bold">
                Creatina
              </h1>
            </div>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Maximize sua força e explosão muscular com as melhores creatinas do mercado. 
              Monohidratada, micronizada, alcalina e muito mais.
            </p>
            <div className="mt-6 flex justify-center items-center space-x-4 text-orange-100">
              <span>{products.length} produtos encontrados</span>
              <span>•</span>
              <span>Pureza até 99.9%</span>
              <span>•</span>
              <span>Frete grátis acima de R$ 199</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="flex gap-8">
          {/* Sidebar de Filtros */}
          <div className="w-80 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <div className="flex items-center space-x-2 mb-6">
                <AdjustmentsHorizontalIcon className="w-5 h-5 text-red-600" />
                <h2 className="text-lg font-bold text-gray-800">Filtros</h2>
              </div>

              {/* Busca */}
              <div className="mb-6">
                <div className="relative">
                  <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Buscar creatinas..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Faixa de Preço */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Faixa de Preço</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <input
                      type="range"
                      min="0"
                      max="300"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>R$ {priceRange[0]}</span>
                    <span>R$ {priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Marcas */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Marcas</h3>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {brands.map(brand => (
                    <label key={brand} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => handleBrandFilter(brand)}
                        className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                      />
                      <span className="text-gray-700">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Tipos */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Tipos</h3>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {creatineTypes.map(type => (
                    <label key={type} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedTypes.includes(type)}
                        onChange={() => handleTypeFilter(type)}
                        className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                      />
                      <span className="text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Limpar Filtros */}
              <button
                onClick={() => {
                  setSelectedBrands([]);
                  setSelectedTypes([]);
                  setPriceRange([0, 300]);
                }}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
              >
                Limpar Filtros
              </button>
            </div>
          </div>

          {/* Área Principal */}
          <div className="flex-1">
            {/* Barra de Controles */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600">
                    {sortedProducts.length} produtos encontrados
                  </span>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Ordenar por:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      <option value="relevance">Relevância</option>
                      <option value="price-low">Menor Preço</option>
                      <option value="price-high">Maior Preço</option>
                      <option value="rating">Melhor Avaliação</option>
                      <option value="discount">Maior Desconto</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === "grid" 
                        ? "bg-red-600 text-white" 
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    <Squares2X2Icon className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === "list" 
                        ? "bg-red-600 text-white" 
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    <ListBulletIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Grid de Produtos */}
            <div className={`grid gap-6 ${
              viewMode === "grid" 
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
                : "grid-cols-1"
            }`}>
              {sortedProducts.map(product => (
                <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/400x300/DC2626/FFFFFF?text=${encodeURIComponent(product.name)}`;
                      }}
                    />
                    {product.bestSeller && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        Mais Vendido
                      </div>
                    )}
                    {product.discount > 0 && (
                      <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        -{product.discount}%
                      </div>
                    )}
                    <button className="absolute top-4 right-4 mt-10 bg-white/80 hover:bg-white text-gray-600 hover:text-red-500 p-2 rounded-full transition-colors">
                      <HeartIcon className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-red-600">{product.brand}</span>
                      <span className="text-sm text-gray-500">{product.size}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <StarSolidIcon
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating) 
                                ? "text-yellow-400" 
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">
                        {product.rating} ({product.reviews} avaliações)
                      </span>
                    </div>

                    <div className="flex items-center mb-4">
                      <span className="text-sm text-gray-500 mr-2">Pureza:</span>
                      <span className="text-sm font-semibold text-green-600">{product.purity}</span>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through mr-2">
                            R$ {product.originalPrice.toFixed(2)}
                          </span>
                        )}
                        <span className="text-2xl font-bold text-red-600">
                          R$ {product.price.toFixed(2)}
                        </span>
                      </div>
                      {product.freeShipping && (
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          Frete Grátis
                        </span>
                      )}
                    </div>

                    <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2">
                      <ShoppingCartIcon className="w-5 h-5" />
                      <span>Adicionar ao Carrinho</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Paginação */}
            <div className="mt-12 flex justify-center">
              <nav className="flex space-x-2">
                <button className="px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Anterior
                </button>
                <button className="px-3 py-2 bg-red-600 text-white rounded-lg">1</button>
                <button className="px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">2</button>
                <button className="px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">3</button>
                <button className="px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Próximo
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creatina;
