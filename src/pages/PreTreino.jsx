import React from 'react';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/common/ProductCard';
import { useCart } from '../contexts/CartContext';

const PreTreino = () => {
  const { products, loading, error } = useProducts();
  const { addToCart } = useCart();

  // Filtrar apenas produtos de pré-treino
  const preTreinoProducts = products.filter(product => 
    product.category === 'pre-treino' || 
    product.name.toLowerCase().includes('pré-treino') ||
    product.name.toLowerCase().includes('pre treino') ||
    product.name.toLowerCase().includes('haze')
  );

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header da categoria */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Pré-Treino</h1>
          <p className="text-xl text-red-100">
            Energia, foco e intensidade máxima para seus treinos
          </p>
          <div className="mt-6 flex items-center space-x-4">
            <span className="bg-red-500 px-3 py-1 rounded-full text-sm">
              {preTreinoProducts.length} produtos encontrados
            </span>
          </div>
        </div>
      </div>

      {/* Benefícios do Pré-Treino */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4">Benefícios do Pré-Treino</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-red-600 font-bold">⚡</span>
              </div>
              <h4 className="font-semibold mb-2">Mais Energia</h4>
              <p className="text-gray-600 text-sm">Disposição para treinos intensos</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-red-600 font-bold">🎯</span>
              </div>
              <h4 className="font-semibold mb-2">Foco Mental</h4>
              <p className="text-gray-600 text-sm">Concentração máxima no treino</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-red-600 font-bold">💪</span>
              </div>
              <h4 className="font-semibold mb-2">Força</h4>
              <p className="text-gray-600 text-sm">Aumento da força e resistência</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-red-600 font-bold">🔥</span>
              </div>
              <h4 className="font-semibold mb-2">Pump</h4>
              <p className="text-gray-600 text-sm">Vasodilatação e congestão muscular</p>
            </div>
          </div>
        </div>

        {/* Alerta de uso responsável */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <span className="text-orange-400">⚠️</span>
            </div>
            <div className="ml-3">
              <h4 className="text-sm font-medium text-orange-800">Uso Responsável</h4>
              <p className="text-sm text-orange-700 mt-1">
                Pré-treinos contêm estimulantes. Use conforme orientação e evite no período noturno.
                Não exceda a dose recomendada.
              </p>
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
                <option value="com-creatina">Com Creatina</option>
                <option value="sem-creatina">Sem Creatina</option>
                <option value="termogenico">Termogênico</option>
                <option value="pump">Pump/Vasodilatador</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Intensidade
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                <option value="">Todas intensidades</option>
                <option value="leve">Leve (iniciantes)</option>
                <option value="moderada">Moderada</option>
                <option value="intensa">Intensa (avançados)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preço
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                <option value="">Todos os preços</option>
                <option value="0-50">Até R$ 50</option>
                <option value="50-100">R$ 50 - R$ 100</option>
                <option value="100+">Acima de R$ 100</option>
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
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
            <span className="ml-3 text-gray-600">Carregando produtos...</span>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-red-600 mb-4">Erro ao carregar produtos: {error}</p>
          </div>
        ) : preTreinoProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">Nenhum produto de pré-treino encontrado.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {preTreinoProducts.map((product) => (
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

export default PreTreino;
