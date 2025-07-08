import React from 'react';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/common/ProductCard';
import { useCart } from '../contexts/CartContext';

const Creatina = () => {
  const { products, loading, error } = useProducts();
  const { addToCart } = useCart();

  // Filtrar apenas produtos de creatina
  const creatinaProducts = products.filter(product => 
    product.category === 'creatina' || 
    product.name.toLowerCase().includes('creatina')
  );

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header da categoria */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Creatina</h1>
          <p className="text-xl text-green-100">
            Aumente sua força, resistência e massa muscular
          </p>
          <div className="mt-6 flex items-center space-x-4">
            <span className="bg-green-500 px-3 py-1 rounded-full text-sm">
              {creatinaProducts.length} produtos encontrados
            </span>
          </div>
        </div>
      </div>

      {/* Benefícios da Creatina */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4">Por que usar Creatina?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 font-bold">💪</span>
              </div>
              <h4 className="font-semibold mb-2">Mais Força</h4>
              <p className="text-gray-600 text-sm">Aumento da força e potência muscular</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 font-bold">⚡</span>
              </div>
              <h4 className="font-semibold mb-2">Mais Energia</h4>
              <p className="text-gray-600 text-sm">Melhora da performance nos treinos</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 font-bold">🏋️</span>
              </div>
              <h4 className="font-semibold mb-2">Massa Muscular</h4>
              <p className="text-gray-600 text-sm">Acelera o ganho de massa magra</p>
            </div>
          </div>
        </div>

        {/* Filtros */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4">Filtros</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                <option value="">Todos os tipos</option>
                <option value="monohidratada">Monohidratada</option>
                <option value="micronizada">Micronizada</option>
                <option value="alcalina">Alcalina</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Marca
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                <option value="">Todas as marcas</option>
                <option value="black-skull">Black Skull</option>
                <option value="growth">Growth</option>
                <option value="max-titanium">Max Titanium</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preço
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                <option value="">Todos os preços</option>
                <option value="0-30">Até R$ 30</option>
                <option value="30-60">R$ 30 - R$ 60</option>
                <option value="60+">Acima de R$ 60</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ordenar por
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                <option value="relevance">Mais relevantes</option>
                <option value="price-asc">Menor preço</option>
                <option value="price-desc">Maior preço</option>
                <option value="rating">Melhor avaliação</option>
              </select>
            </div>
          </div>
        </div>

        {/* Lista de produtos */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
            <span className="ml-3 text-gray-600">Carregando produtos...</span>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-red-600 mb-4">Erro ao carregar produtos: {error}</p>
          </div>
        ) : creatinaProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">Nenhum produto de creatina encontrado.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {creatinaProducts.map((product) => (
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

export default Creatina;
