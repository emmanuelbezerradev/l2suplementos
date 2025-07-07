import axios from 'axios';

// Configuração base do axios
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

// Criar instância do axios
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: parseInt(import.meta.env.VITE_API_TIMEOUT) || 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para adicionar token automaticamente
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para tratar respostas e erros
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // Se token expirou, redirecionar para login
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    
    // Extrair mensagem de erro
    const errorMessage = error.response?.data?.message || error.message || 'Erro interno do servidor';
    
    console.error('API Error:', {
      status: error.response?.status,
      message: errorMessage,
      url: error.config?.url,
    });
    
    return Promise.reject(new Error(errorMessage));
  }
);

class ApiService {
  // ========== AUTENTICAÇÃO ==========
  async login(email, password) {
    return axiosInstance.post('/auth/login', { email, password });
  }

  async register(userData) {
    return axiosInstance.post('/auth/register', userData);
  }

  async logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  async refreshToken() {
    return axiosInstance.post('/auth/refresh');
  }

  // ========== PRODUTOS ==========
  async getProducts(filters = {}) {
    const params = new URLSearchParams();
    
    if (filters.category) params.append('category', filters.category);
    if (filters.brand) params.append('brand', filters.brand);
    if (filters.minPrice) params.append('minPrice', filters.minPrice);
    if (filters.maxPrice) params.append('maxPrice', filters.maxPrice);
    if (filters.search) params.append('search', filters.search);
    if (filters.page) params.append('page', filters.page);
    if (filters.limit) params.append('limit', filters.limit);
    
    const queryString = params.toString();
    const endpoint = `/products${queryString ? `?${queryString}` : ''}`;
    
    return axiosInstance.get(endpoint);
  }

  async getProductById(id) {
    return axiosInstance.get(`/products/${id}`);
  }

  async createProduct(productData) {
    return axiosInstance.post('/products', productData);
  }

  async updateProduct(id, productData) {
    return axiosInstance.put(`/products/${id}`, productData);
  }

  async deleteProduct(id) {
    return axiosInstance.delete(`/products/${id}`);
  }

  // ========== UPLOAD DE IMAGENS ==========
  async uploadImage(formData) {
    return axiosInstance.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  async uploadMultipleImages(files) {
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`images`, file);
    });

    return axiosInstance.post('/upload/multiple', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  // ========== CATEGORIAS ==========
  async getCategories() {
    return axiosInstance.get('/categories');
  }

  async createCategory(categoryData) {
    return axiosInstance.post('/categories', categoryData);
  }

  async updateCategory(id, categoryData) {
    return axiosInstance.put(`/categories/${id}`, categoryData);
  }

  async deleteCategory(id) {
    return axiosInstance.delete(`/categories/${id}`);
  }

  // ========== USUÁRIOS (ADMIN) ==========
  async getUsers(page = 1, limit = 10) {
    return axiosInstance.get(`/users?page=${page}&limit=${limit}`);
  }

  async getUserById(id) {
    return axiosInstance.get(`/users/${id}`);
  }

  async updateUser(id, userData) {
    return axiosInstance.put(`/users/${id}`, userData);
  }

  async deleteUser(id) {
    return axiosInstance.delete(`/users/${id}`);
  }

  async changeUserRole(id, role) {
    return axiosInstance.put(`/users/${id}/role`, { role });
  }

  // ========== PEDIDOS ==========
  async getOrders(page = 1, limit = 10) {
    return axiosInstance.get(`/orders?page=${page}&limit=${limit}`);
  }

  async getOrderById(id) {
    return axiosInstance.get(`/orders/${id}`);
  }

  async createOrder(orderData) {
    return axiosInstance.post('/orders', orderData);
  }

  async updateOrderStatus(id, status) {
    return axiosInstance.put(`/orders/${id}/status`, { status });
  }

  async getUserOrders(userId) {
    return axiosInstance.get(`/orders/user/${userId}`);
  }

  // ========== CARRINHO ==========
  async addToCart(productId, quantity = 1) {
    return axiosInstance.post('/cart/add', { productId, quantity });
  }

  async removeFromCart(productId) {
    return axiosInstance.delete(`/cart/remove/${productId}`);
  }

  async updateCartItem(productId, quantity) {
    return axiosInstance.put('/cart/update', { productId, quantity });
  }

  async getCart() {
    return axiosInstance.get('/cart');
  }

  async clearCart() {
    return axiosInstance.delete('/cart/clear');
  }

  // ========== FAVORITOS ==========
  async getFavorites() {
    return axiosInstance.get('/favorites');
  }

  async addToFavorites(productId) {
    return axiosInstance.post('/favorites/add', { productId });
  }

  async removeFromFavorites(productId) {
    return axiosInstance.delete(`/favorites/remove/${productId}`);
  }

  // ========== ESTATÍSTICAS (ADMIN) ==========
  async getStats() {
    return axiosInstance.get('/admin/stats');
  }

  async getSalesReport(startDate, endDate) {
    return axiosInstance.get(`/admin/sales-report?start=${startDate}&end=${endDate}`);
  }

  // ========== MÉTODOS AUXILIARES ==========
  async healthCheck() {
    return axiosInstance.get('/health');
  }

  async testConnection() {
    try {
      await this.healthCheck();
      return { success: true, message: 'Conexão com API estabelecida' };
    } catch (error) {
      return { success: false, message: `Erro de conexão: ${error.message}` };
    }
  }
}

// Instância única da API
const apiService = new ApiService();

// Exportar também a instância do axios para uso direto se necessário
export { axiosInstance };
export default apiService;
