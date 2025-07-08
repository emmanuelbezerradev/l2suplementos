import React from 'react';

const CategoryFilters = ({ 
  filters, 
  updateFilter, 
  clearFilters, 
  availableBrands, 
  categoryTypes = [], 
  categoryName 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Filtros</h3>
        <button
          onClick={clearFilters}
          className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
        >
          Limpar filtros
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Filtro por marca */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Marca
          </label>
          <select 
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={filters.brand}
            onChange={(e) => updateFilter('brand', e.target.value)}
          >
            <option value="">Todas as marcas</option>
            {availableBrands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>

        {/* Filtro por preço */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Faixa de Preço
          </label>
          <select 
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={filters.priceRange}
            onChange={(e) => updateFilter('priceRange', e.target.value)}
          >
            <option value="">Todos os preços</option>
            <option value="0-50">Até R$ 50</option>
            <option value="50-100">R$ 50 - R$ 100</option>
            <option value="100-150">R$ 100 - R$ 150</option>
            <option value="150-200">R$ 150 - R$ 200</option>
            <option value="200-+">Acima de R$ 200</option>
          </select>
        </div>

        {/* Filtro por tipo (específico da categoria) */}
        {categoryTypes.length > 0 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipo de {categoryName}
            </label>
            <select 
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={filters.type}
              onChange={(e) => updateFilter('type', e.target.value)}
            >
              <option value="">Todos os tipos</option>
              {categoryTypes.map(type => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Ordenar por */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ordenar por
          </label>
          <select 
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={filters.sortBy}
            onChange={(e) => updateFilter('sortBy', e.target.value)}
          >
            <option value="relevance">Mais relevantes</option>
            <option value="price-asc">Menor preço</option>
            <option value="price-desc">Maior preço</option>
            <option value="rating">Melhor avaliação</option>
            <option value="newest">Mais recentes</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilters;
