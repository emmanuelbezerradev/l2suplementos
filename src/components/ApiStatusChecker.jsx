import React, { useState, useEffect } from 'react';
import apiService from '../services/api';
import {
  CheckCircleIcon,
  XCircleIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';

const ApiStatusChecker = () => {
  const [status, setStatus] = useState({
    loading: true,
    connected: false,
    message: 'Verificando conexão...',
    lastCheck: null,
  });

  const checkConnection = async () => {
    setStatus(prev => ({ ...prev, loading: true }));
    
    try {
      const result = await apiService.testConnection();
      setStatus({
        loading: false,
        connected: result.success,
        message: result.message,
        lastCheck: new Date().toLocaleTimeString(),
      });
    } catch (error) {
      setStatus({
        loading: false,
        connected: false,
        message: `Erro: ${error.message}`,
        lastCheck: new Date().toLocaleTimeString(),
      });
    }
  };

  useEffect(() => {
    checkConnection();
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-sm z-50">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-gray-800">Status da API</h3>
        <button
          onClick={checkConnection}
          disabled={status.loading}
          className="p-1 rounded-md hover:bg-gray-100 transition-colors"
        >
          <ArrowPathIcon 
            className={`w-4 h-4 text-gray-600 ${status.loading ? 'animate-spin' : ''}`} 
          />
        </button>
      </div>
      
      <div className="flex items-center space-x-2">
        {status.loading ? (
          <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        ) : status.connected ? (
          <CheckCircleIcon className="w-4 h-4 text-green-500" />
        ) : (
          <XCircleIcon className="w-4 h-4 text-red-500" />
        )}
        
        <div className="flex-1">
          <p className={`text-xs ${status.connected ? 'text-green-600' : 'text-red-600'}`}>
            {status.message}
          </p>
          {status.lastCheck && (
            <p className="text-xs text-gray-500">
              Última verificação: {status.lastCheck}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApiStatusChecker;
