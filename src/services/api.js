const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

// Função para fazer requisições HTTP
const apiRequest = async (endpoint, options = {}) => {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const config = {
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        },
        ...options
    };

    try {
        const response = await fetch(url, config);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('API Request failed:', error);
        throw error;
    }
};

// API Status
export const checkApiStatus = async () => {
    try {
        return await apiRequest('/health');
    } catch (error) {
        console.error('Status check failed:', error);
        throw new Error('Falha ao conectar com o servidor');
    }
};

// Products API
export const productApi = {
    // Buscar todos os produtos
    getAll: async (filters = {}) => {
        const queryParams = new URLSearchParams();
        
        if (filters.category && filters.category !== 'all') {
            queryParams.append('category', filters.category);
        }
        if (filters.search) {
            queryParams.append('search', filters.search);
        }
        if (filters.limit) {
            queryParams.append('limit', filters.limit);
        }
        
        const endpoint = `/products${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
        return await apiRequest(endpoint);
    },

    // Buscar produto por ID
    getById: async (id) => {
        return await apiRequest(`/products/${id}`);
    },

    // Produtos em destaque
    getFeatured: async () => {
        return await apiRequest('/products/featured');
    },

    // Produtos novos
    getNew: async () => {
        return await apiRequest('/products/new');
    },

    // Produtos em promoção
    getSale: async () => {
        return await apiRequest('/products/sale');
    },

    // Buscar por categoria
    getByCategory: async (category) => {
        return await apiRequest(`/products?category=${category}`);
    },

    // Criar produto (Admin)
    create: async (productData) => {
        return await apiRequest('/products', {
            method: 'POST',
            body: JSON.stringify(productData)
        });
    },

    // Atualizar produto (Admin)
    update: async (id, productData) => {
        return await apiRequest(`/products/${id}`, {
            method: 'PUT',
            body: JSON.stringify(productData)
        });
    },

    // Deletar produto (Admin)
    delete: async (id) => {
        return await apiRequest(`/products/${id}`, {
            method: 'DELETE'
        });
    }
};

// Categories API
export const categoryApi = {
    // Buscar todas as categorias
    getAll: async () => {
        return await apiRequest('/categories');
    }
};

// Search API
export const searchApi = {
    // Buscar produtos
    products: async (query, filters = {}) => {
        const queryParams = new URLSearchParams({
            search: query,
            ...filters
        });
        
        return await apiRequest(`/products?${queryParams.toString()}`);
    }
};

// Export padrão para compatibilidade
const api = {
    checkStatus: checkApiStatus,
    products: productApi,
    categories: categoryApi,
    search: searchApi
};

export default api;