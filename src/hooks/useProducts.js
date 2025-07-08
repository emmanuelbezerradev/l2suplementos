import { useState, useEffect, useCallback } from 'react';
import sampleProducts from '../data/sampleProducts';

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [refreshTrigger, setRefreshTrigger] = useState(0);

    const loadProducts = useCallback(() => {
        // Carregar produtos de exemplo e produtos criados pelo admin
        const adminProducts = JSON.parse(localStorage.getItem('adminProducts') || '[]');
        const savedProducts = JSON.parse(localStorage.getItem('products') || '[]');
        
        // Começar com produtos de exemplo
        const allProducts = [...sampleProducts];
        
        // Primeiro, aplicar produtos salvos (substituindo ou adicionando)
        savedProducts.forEach(savedProduct => {
            // Validar e normalizar produto salvo
            const normalizedProduct = {
                ...savedProduct,
                price: typeof savedProduct.price === 'string' ? parseFloat(savedProduct.price) : savedProduct.price,
                originalPrice: savedProduct.originalPrice ? 
                    (typeof savedProduct.originalPrice === 'string' ? parseFloat(savedProduct.originalPrice) : savedProduct.originalPrice) 
                    : null,
                images: savedProduct.images || [savedProduct.image].filter(Boolean) || [],
                isNew: Boolean(savedProduct.isNew),
                isFeatured: Boolean(savedProduct.isFeatured)
            };
            
            const existingIndex = allProducts.findIndex(p => p.id === savedProduct.id);
            if (existingIndex >= 0) {
                // Substituir com versão salva
                allProducts[existingIndex] = normalizedProduct;
            } else {
                // Adicionar novo produto salvo
                allProducts.push(normalizedProduct);
            }
        });
        
        // Depois, aplicar produtos do admin (têm prioridade máxima)
        adminProducts.forEach(adminProduct => {
            // Validar e normalizar produto admin
            const normalizedProduct = {
                ...adminProduct,
                price: typeof adminProduct.price === 'string' ? parseFloat(adminProduct.price) : adminProduct.price,
                originalPrice: adminProduct.originalPrice ? 
                    (typeof adminProduct.originalPrice === 'string' ? parseFloat(adminProduct.originalPrice) : adminProduct.originalPrice) 
                    : null,
                images: adminProduct.images || [adminProduct.image].filter(Boolean) || [],
                isNew: Boolean(adminProduct.isNew),
                isFeatured: Boolean(adminProduct.isFeatured)
            };
            
            const existingIndex = allProducts.findIndex(p => p.id === adminProduct.id);
            if (existingIndex >= 0) {
                // Substituir produto existente com versão editada pelo admin
                allProducts[existingIndex] = normalizedProduct;
            } else {
                // Adicionar novo produto criado pelo admin
                allProducts.push(normalizedProduct);
            }
        });
        
        setProducts(allProducts);
        setLoading(false);
        setError(null);
    }, []);

    const refreshProducts = useCallback(() => {
        setRefreshTrigger(prev => prev + 1);
    }, []);

    useEffect(() => {
        loadProducts();
    }, [loadProducts, refreshTrigger]);

    return { products, loading, error, refreshProducts };
};

export const useProduct = (id) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) return;

        // Carregar todos os produtos com a mesma prioridade do hook principal
        const adminProducts = JSON.parse(localStorage.getItem('adminProducts') || '[]');
        const savedProducts = JSON.parse(localStorage.getItem('products') || '[]');
        
        const allProducts = [...sampleProducts];
        
        // Aplicar produtos salvos primeiro
        savedProducts.forEach(savedProduct => {
            const normalizedProduct = {
                ...savedProduct,
                price: typeof savedProduct.price === 'string' ? parseFloat(savedProduct.price) : savedProduct.price,
                originalPrice: savedProduct.originalPrice ? 
                    (typeof savedProduct.originalPrice === 'string' ? parseFloat(savedProduct.originalPrice) : savedProduct.originalPrice) 
                    : null,
                images: savedProduct.images || [savedProduct.image].filter(Boolean) || [],
                isNew: Boolean(savedProduct.isNew),
                isFeatured: Boolean(savedProduct.isFeatured)
            };
            
            const existingIndex = allProducts.findIndex(p => p.id === savedProduct.id);
            if (existingIndex >= 0) {
                allProducts[existingIndex] = normalizedProduct;
            } else {
                allProducts.push(normalizedProduct);
            }
        });
        
        // Aplicar produtos do admin por último (prioridade máxima)
        adminProducts.forEach(adminProduct => {
            const normalizedProduct = {
                ...adminProduct,
                price: typeof adminProduct.price === 'string' ? parseFloat(adminProduct.price) : adminProduct.price,
                originalPrice: adminProduct.originalPrice ? 
                    (typeof adminProduct.originalPrice === 'string' ? parseFloat(adminProduct.originalPrice) : adminProduct.originalPrice) 
                    : null,
                images: adminProduct.images || [adminProduct.image].filter(Boolean) || [],
                isNew: Boolean(adminProduct.isNew),
                isFeatured: Boolean(adminProduct.isFeatured)
            };
            
            const existingIndex = allProducts.findIndex(p => p.id === adminProduct.id);
            if (existingIndex >= 0) {
                allProducts[existingIndex] = normalizedProduct;
            } else {
                allProducts.push(normalizedProduct);
            }
        });

        // Buscar produto
        const foundProduct = allProducts.find(p => p.id === parseInt(id));
        
        if (foundProduct) {
            setProduct(foundProduct);
        } else {
            setError('Produto não encontrado');
        }
        
        setLoading(false);
    }, [id]);

    return { product, loading, error };
};

export default useProducts;