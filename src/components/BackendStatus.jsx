import React, { useState, useEffect } from 'react';
import apiService from '../services/api';

const BackendStatus = () => {
  const [status, setStatus] = useState('checking');
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkBackendStatus = async () => {
      try {
        // Teste de health check
        const healthResponse = await apiService.healthCheck();
        
        // Buscar informações dos produtos
        const productsResponse = await apiService.getProducts();
        
        setStatus('connected');
        setInfo({
          health: healthResponse,
          products: productsResponse.products || productsResponse || [],
          timestamp: new Date().toLocaleString()
        });
      } catch (error) {
        setStatus('error');
        setError(error.message);
      }
    };

    checkBackendStatus();
  }, []);

  if (status === 'checking') {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-center">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-yellow-600 mr-3"></div>
          <p className="text-yellow-800 text-sm">Verificando conexão com backend...</p>
        </div>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <h3 className="text-red-800 font-semibold mb-2">❌ Erro de conexão</h3>
        <p className="text-red-700 text-sm">{error}</p>
        <p className="text-red-600 text-xs mt-2">
          Verifique se o backend está rodando em http://localhost:5001
        </p>
      </div>
    );
  }

  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
      <h3 className="text-green-800 font-semibold mb-2">✅ Backend conectado!</h3>
      <div className="text-green-700 text-sm space-y-1">
        <p>• API funcionando: {info.health?.message || 'OK'}</p>
        <p>• Produtos carregados: {info.products?.length || 0}</p>
        <p>• Última verificação: {info.timestamp}</p>
      </div>
      
      {info.products && info.products.length > 0 && (
        <div className="mt-3 pt-3 border-t border-green-200">
          <p className="text-green-800 font-medium text-xs mb-1">Produtos disponíveis:</p>
          <ul className="text-green-700 text-xs space-y-1">
            {info.products.map((product) => (
              <li key={product.id}>
                • {product.name} - R$ {product.price?.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BackendStatus;
