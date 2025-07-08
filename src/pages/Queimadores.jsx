import React from 'react';
import { useProducts } from '../hooks/useProducts';
import { useFilters } from '../hooks/useFilters';
import ProductCard from '../components/common/ProductCard';
import CategoryFilters from '../components/common/CategoryFilters';
import { useCart } from '../contexts/CartContext';

const Queimadores = () => {
  const { products, loading, error } = useProducts();
  const { addToCart } = useCart();

  // Usar o hook de filtros para gerenciar produtos queimadores
  const {
    filters,
    filteredProducts,
    updateFilter,
    clearFilters,
    availableBrands,
    totalProducts,
    filteredCount
  } = useFilters(products, 'queimadores');

  // Tipos específicos de queimadores
  const burnerTypes = [
    { value: 'termogênico', label: 'Termogênico' },
    { value: 'l-carnitina', label: 'L-Carnitina' },
    { value: 'fat burner', label: 'Fat Burner' },
    { value: 'cla', label: 'CLA' },
    { value: 'chá verde', label: 'Chá Verde' }
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header da categoria */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Queimadores de Gordura</h1>
          <p className="text-xl text-red-100">
            Termogênicos, L-Carnitina, CLA e suplementos para acelerar o metabolismo
          </p>
          <div className="mt-6 flex items-center space-x-4">
            <span className="bg-red-500 px-3 py-1 rounded-full text-sm">
              {filteredCount} de {totalProducts} produtos
            </span>
            {filters.brand && (
              <span className="bg-red-400 px-3 py-1 rounded-full text-sm">
                Marca: {filters.brand}
              </span>
            )}
            {filters.priceRange && (
              <span className="bg-red-400 px-3 py-1 rounded-full text-sm">
                Preço: R$ {filters.priceRange.replace('-', ' - R$ ').replace('+', '+')}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="container mx-auto px-4 py-8">
        <CategoryFilters
          filters={filters}
          updateFilter={updateFilter}
          clearFilters={clearFilters}
          availableBrands={availableBrands}
          categoryTypes={burnerTypes}
          categoryName="Queimador"
        />

        {/* Lista de produtos */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
            <span className="ml-3 text-gray-600">Carregando produtos...</span>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-red-600 mb-4">Erro ao carregar produtos: {error}</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">
              {totalProducts === 0 
                ? "Nenhum queimador de gordura encontrado."
                : "Nenhum produto encontrado com os filtros aplicados."
              }
            </p>
            {totalProducts > 0 && (
              <button 
                onClick={clearFilters}
                className="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Limpar filtros
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={() => handleAddToCart(product)}
                onQuickView={() => console.log('Quick view:', product)}
                onToggleFavorite={() => console.log('Toggle favorite:', product.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Queimadores;
