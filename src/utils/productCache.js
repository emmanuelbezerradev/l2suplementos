// Cache simples para evitar múltiplas requisições
let cachedProducts = null;
let isLoading = false;
let cacheTime = null;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutos

export const productCache = {
  get: () => {
    // Se o cache ainda é válido (dentro de 5 minutos)
    if (cachedProducts && cacheTime && (Date.now() - cacheTime) < CACHE_DURATION) {
      return cachedProducts;
    }
    return null;
  },
  
  set: (products) => {
    cachedProducts = products;
    cacheTime = Date.now();
  },
  
  isLoading: () => isLoading,
  
  setLoading: (loading) => {
    isLoading = loading;
  },
  
  clear: () => {
    cachedProducts = null;
    cacheTime = null;
    isLoading = false;
  }
};
