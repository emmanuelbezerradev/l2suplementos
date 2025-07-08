import { useState, useMemo } from 'react';

export const useFilters = (products, category) => {
  const [filters, setFilters] = useState({
    brand: '',
    priceRange: '',
    type: '',
    sortBy: 'relevance'
  });

  // Filtrar produtos por categoria
  const categoryProducts = useMemo(() => {
    return products.filter(product => {
      const productCategory = product.category?.toLowerCase();
      const categoryLower = category.toLowerCase();
      
      // Verificar categoria exata ou palavras-chave no nome
      if (productCategory === categoryLower) return true;
      
      // Verificar palavras-chave específicas para cada categoria
      const productName = product.name.toLowerCase();
      
      switch (categoryLower) {
        case 'proteinas':
          return productName.includes('whey') || 
                 productName.includes('protein') || 
                 productName.includes('caseína') || 
                 productName.includes('albumina');
        case 'creatina':
          return productName.includes('creatina');
        case 'pre-treino':
          return productName.includes('pré-treino') || 
                 productName.includes('pre-treino') || 
                 productName.includes('haze') ||
                 productName.includes('energy');
        case 'aminoacidos':
          return productName.includes('bcaa') || 
                 productName.includes('aminoácido') || 
                 productName.includes('glutamina');
        case 'vitaminas':
          return productName.includes('vitamina') || 
                 productName.includes('multivitamínico') ||
                 productName.includes('omega');
        case 'queimadores':
          return productName.includes('termogênico') || 
                 productName.includes('queimador') ||
                 productName.includes('fat burner') ||
                 productName.includes('l-carnitina');
        case 'massa-muscular':
          return productName.includes('hipercalórico') || 
                 productName.includes('massa') ||
                 productName.includes('gainers');
        default:
          return false;
      }
    });
  }, [products, category]);

  // Aplicar filtros
  const filteredProducts = useMemo(() => {
    let filtered = [...categoryProducts];

    // Filtro por marca
    if (filters.brand) {
      filtered = filtered.filter(product => 
        product.brand?.toLowerCase().includes(filters.brand.toLowerCase())
      );
    }

    // Filtro por faixa de preço
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(val => 
        val === '+' ? Infinity : parseInt(val)
      );
      
      filtered = filtered.filter(product => {
        const price = product.price || 0;
        if (max === undefined) {
          return price >= min;
        }
        return price >= min && price <= max;
      });
    }

    // Filtro por tipo (específico para cada categoria)
    if (filters.type) {
      filtered = filtered.filter(product => {
        const productName = product.name.toLowerCase();
        const filterType = filters.type.toLowerCase();
        
        return productName.includes(filterType);
      });
    }

    // Ordenação
    switch (filters.sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => (a.price || 0) - (b.price || 0));
        break;
      case 'price-desc':
        filtered.sort((a, b) => (b.price || 0) - (a.price || 0));
        break;
      case 'rating':
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'newest':
        filtered.sort((a, b) => b.isNew - a.isNew);
        break;
      default:
        // 'relevance' - manter ordem original ou ordenar por featured
        filtered.sort((a, b) => b.isFeatured - a.isFeatured);
    }

    return filtered;
  }, [categoryProducts, filters]);

  // Função para atualizar filtros
  const updateFilter = (filterKey, value) => {
    setFilters(prev => ({
      ...prev,
      [filterKey]: value
    }));
  };

  // Função para limpar filtros
  const clearFilters = () => {
    setFilters({
      brand: '',
      priceRange: '',
      type: '',
      sortBy: 'relevance'
    });
  };

  // Obter marcas únicas dos produtos da categoria
  const availableBrands = useMemo(() => {
    const brands = categoryProducts
      .map(product => product.brand)
      .filter(Boolean)
      .filter((brand, index, arr) => arr.indexOf(brand) === index)
      .sort();
    return brands;
  }, [categoryProducts]);

  return {
    filters,
    filteredProducts,
    updateFilter,
    clearFilters,
    availableBrands,
    totalProducts: categoryProducts.length,
    filteredCount: filteredProducts.length
  };
};
