import { useState, useEffect } from 'react';
import apiService from '../services/api';

export const useProducts = (filters = {}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, [filters]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await apiService.getProducts(filters);
      setProducts(response.products || []);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      setError(error.message);
      // Fallback para produtos estáticos em caso de erro
      setProducts(getStaticProducts());
    } finally {
      setLoading(false);
    }
  };

  const getStaticProducts = () => {
    return [
      {
        id: 1,
        name: "Whey Protein Concentrado 900g",
        price: 89.90,
        originalPrice: 129.90,
        image: "/creatina.webp",
        rating: 4.8,
        reviews: 245,
        brand: "Integralmédica",
        category: "Proteínas",
        isNew: true,
        isBestSeller: false,
        description: "Proteína de alta qualidade para ganho de massa muscular",
        stock: 15,
        weight: "900g",
        flavor: "Chocolate"
      },
      {
        id: 2,
        name: "Creatina Monohidratada 300g",
        price: 45.90,
        originalPrice: 65.90,
        image: "/creatina.webp",
        rating: 4.9,
        reviews: 189,
        brand: "Growth",
        category: "Creatina",
        isNew: false,
        isBestSeller: true,
        description: "Creatina pura para aumento de força e resistência",
        stock: 8,
        weight: "300g",
        flavor: "Sem sabor"
      },
      {
        id: 3,
        name: "Pré-Treino Vaso-X 300g",
        price: 79.90,
        originalPrice: 99.90,
        image: "/black-skull.webp",
        rating: 4.7,
        reviews: 156,
        brand: "Black Skull",
        category: "Pré-Treino",
        isNew: true,
        isBestSeller: true,
        description: "Pré-treino com fórmula avançada para máxima performance",
        stock: 12,
        weight: "300g",
        flavor: "Frutas Vermelhas"
      },
      {
        id: 4,
        name: "Multivitamínico Premium 60 caps",
        price: 35.90,
        originalPrice: 49.90,
        image: "/probiotica.jpg",
        rating: 4.6,
        reviews: 98,
        brand: "Probiótica",
        category: "Vitaminas",
        isNew: false,
        isBestSeller: false,
        description: "Complexo vitamínico completo para saúde e bem-estar",
        stock: 20,
        weight: "60 cápsulas",
        flavor: "Sem sabor"
      }
    ];
  };

  const refetch = () => {
    fetchProducts();
  };

  return { products, loading, error, refetch };
};

export const useProduct = (id) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  }, [id]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await apiService.getProductById(id);
      setProduct(response.product || null);
    } catch (error) {
      console.error('Erro ao buscar produto:', error);
      setError(error.message);
      // Fallback para produto estático
      const staticProducts = getStaticProducts();
      const staticProduct = staticProducts.find(p => p.id === parseInt(id));
      setProduct(staticProduct || null);
    } finally {
      setLoading(false);
    }
  };

  const getStaticProducts = () => {
    return [
      {
        id: 1,
        name: "Whey Protein Concentrado 900g",
        price: 89.90,
        originalPrice: 129.90,
        image: "/creatina.webp",
        rating: 4.8,
        reviews: 245,
        brand: "Integralmédica",
        category: "Proteínas",
        isNew: true,
        isBestSeller: false,
        description: "Proteína de alta qualidade para ganho de massa muscular",
        stock: 15,
        weight: "900g",
        flavor: "Chocolate"
      },
      {
        id: 2,
        name: "Creatina Monohidratada 300g",
        price: 45.90,
        originalPrice: 65.90,
        image: "/creatina.webp",
        rating: 4.9,
        reviews: 189,
        brand: "Growth",
        category: "Creatina",
        isNew: false,
        isBestSeller: true,
        description: "Creatina pura para aumento de força e resistência",
        stock: 8,
        weight: "300g",
        flavor: "Sem sabor"
      },
      {
        id: 3,
        name: "Pré-Treino Vaso-X 300g",
        price: 79.90,
        originalPrice: 99.90,
        image: "/black-skull.webp",
        rating: 4.7,
        reviews: 156,
        brand: "Black Skull",
        category: "Pré-Treino",
        isNew: true,
        isBestSeller: true,
        description: "Pré-treino com fórmula avançada para máxima performance",
        stock: 12,
        weight: "300g",
        flavor: "Frutas Vermelhas"
      },
      {
        id: 4,
        name: "Multivitamínico Premium 60 caps",
        price: 35.90,
        originalPrice: 49.90,
        image: "/probiotica.jpg",
        rating: 4.6,
        reviews: 98,
        brand: "Probiótica",
        category: "Vitaminas",
        isNew: false,
        isBestSeller: false,
        description: "Complexo vitamínico completo para saúde e bem-estar",
        stock: 20,
        weight: "60 cápsulas",
        flavor: "Sem sabor"
      }
    ];
  };

  const refetch = () => {
    fetchProduct();
  };

  return { product, loading, error, refetch };
};
