import React, { useState, useEffect } from 'react';
import api from '../services/api';

const ApiTest = () => {
    const [status, setStatus] = useState('Verificando...');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const testConnection = async () => {
        try {
            setLoading(true);
            setStatus('Testando conexão...');
            
            // Testar status da API
            const statusResponse = await api.checkStatus();
            console.log('Status da API:', statusResponse);
            
            // Testar busca de produtos
            const productsResponse = await api.products.getAll();
            console.log('Produtos do backend:', productsResponse);
            
            setProducts(productsResponse);
            setStatus('✅ Conectado com sucesso!');
        } catch (error) {
            console.error('Erro na conexão:', error);
            setStatus(`❌ Erro: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        testConnection();
    }, []);

    return (
        <div className="p-4 bg-gray-100 rounded-lg m-4">
            <h3 className="text-lg font-bold mb-2">Teste de Conexão Backend</h3>
            <p className="mb-2">{status}</p>
            
            <button 
                onClick={testConnection}
                disabled={loading}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
            >
                {loading ? 'Testando...' : 'Testar Novamente'}
            </button>

            {products.length > 0 && (
                <div className="mt-4">
                    <h4 className="font-semibold">Produtos encontrados: {products.length}</h4>
                    <div className="max-h-40 overflow-y-auto">
                        {products.slice(0, 3).map((product) => (
                            <div key={product.id} className="text-sm p-2 border-b">
                                {product.name} - R$ {product.price}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ApiTest;
