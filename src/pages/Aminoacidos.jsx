import React from 'react';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/common/ProductCard';
import { useCart } from '../contexts/CartContext';

const Aminoacidos = () => {
  const { products, loading, error } = useProducts();
  const { addToCart } = useCart();

  // Filtrar apenas produtos de aminoácidos
  const aminoProducts = products.filter(product => 
    product.category === 'amino' || 
    product.name.toLowerCase().includes('bcaa') ||
    product.name.toLowerCase().includes('glutamina') ||
    product.name.toLowerCase().includes('amino')
  );

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header da categoria */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Aminoácidos</h1>
          <p className="text-xl text-purple-100">
            BCAA, Glutamina e outros aminoácidos essenciais
          </p>
          <div className="mt-6 flex items-center space-x-4">
            <span className="bg-purple-500 px-3 py-1 rounded-full text-sm">
              {aminoProducts.length} produtos encontrados
            </span>
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="container mx-auto px-4 py-8">
        {/* Lista de produtos */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
            <span className="ml-3 text-gray-600">Carregando produtos...</span>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-red-600 mb-4">Erro ao carregar produtos: {error}</p>
          </div>
        ) : aminoProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">Nenhum produto de aminoácidos encontrado.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {aminoProducts.map((product) => (
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

export default Aminoacidos;
