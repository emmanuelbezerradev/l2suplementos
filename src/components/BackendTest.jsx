import React, { useState } from 'react';

const BackendTest = () => {
    const [testResults, setTestResults] = useState({});
    const [testing, setTesting] = useState(false);

    const runTests = async () => {
        setTesting(true);
        const results = {};

        // Teste 1: Verificar se o backend está rodando
        try {
            console.log('🔍 Testando conexão com backend...');
            const response = await fetch('http://localhost:5001/api/health');
            
            if (response.ok) {
                const data = await response.json();
                results.health = { status: '✅ Conectado', data };
            } else {
                results.health = { status: `❌ Erro ${response.status}`, data: null };
            }
        } catch (error) {
            results.health = { status: '❌ Falhou', error: error.message };
        }

        // Teste 2: Buscar produtos
        try {
            console.log('📦 Testando busca de produtos...');
            const response = await fetch('http://localhost:5001/api/products');
            
            if (response.ok) {
                const data = await response.json();
                results.products = { 
                    status: '✅ Funcionando', 
                    count: Array.isArray(data) ? data.length : 'Não é array',
                    data: Array.isArray(data) ? data.slice(0, 2) : data 
                };
            } else {
                results.products = { status: `❌ Erro ${response.status}`, data: null };
            }
        } catch (error) {
            results.products = { status: '❌ Falhou', error: error.message };
        }

        // Teste 3: Verificar CORS
        try {
            console.log('🌐 Testando CORS...');
            const response = await fetch('http://localhost:5001/api/health', {
                method: 'OPTIONS'
            });
            results.cors = { status: response.ok ? '✅ CORS OK' : '❌ CORS Problema' };
        } catch (error) {
            results.cors = { status: '❌ CORS Falhou', error: error.message };
        }

        setTestResults(results);
        setTesting(false);
    };

    return (
        <div className="fixed top-4 right-4 bg-white shadow-lg rounded-lg p-4 max-w-md z-50 border-2 border-blue-500">
            <h3 className="text-lg font-bold mb-3 text-blue-600">🔧 Teste Backend</h3>
            
            <button
                onClick={runTests}
                disabled={testing}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded mb-3 hover:bg-blue-700 disabled:opacity-50"
            >
                {testing ? '⏳ Testando...' : '🚀 Testar Conexão'}
            </button>

            {Object.keys(testResults).length > 0 && (
                <div className="space-y-3">
                    {/* Health Check */}
                    <div className="p-2 bg-gray-50 rounded">
                        <h4 className="font-semibold">1. Status do Backend:</h4>
                        <p className="text-sm">{testResults.health?.status}</p>
                        {testResults.health?.data && (
                            <pre className="text-xs bg-gray-100 p-1 rounded mt-1">
                                {JSON.stringify(testResults.health.data, null, 2)}
                            </pre>
                        )}
                        {testResults.health?.error && (
                            <p className="text-xs text-red-600">{testResults.health.error}</p>
                        )}
                    </div>

                    {/* Products Test */}
                    <div className="p-2 bg-gray-50 rounded">
                        <h4 className="font-semibold">2. API de Produtos:</h4>
                        <p className="text-sm">{testResults.products?.status}</p>
                        {testResults.products?.count && (
                            <p className="text-xs">Produtos encontrados: {testResults.products.count}</p>
                        )}
                        {testResults.products?.data && (
                            <pre className="text-xs bg-gray-100 p-1 rounded mt-1 max-h-20 overflow-y-auto">
                                {JSON.stringify(testResults.products.data, null, 2)}
                            </pre>
                        )}
                        {testResults.products?.error && (
                            <p className="text-xs text-red-600">{testResults.products.error}</p>
                        )}
                    </div>

                    {/* CORS Test */}
                    <div className="p-2 bg-gray-50 rounded">
                        <h4 className="font-semibold">3. CORS:</h4>
                        <p className="text-sm">{testResults.cors?.status}</p>
                        {testResults.cors?.error && (
                            <p className="text-xs text-red-600">{testResults.cors.error}</p>
                        )}
                    </div>
                </div>
            )}

            <div className="mt-3 text-xs text-gray-500">
                Backend esperado: http://localhost:5001
            </div>
        </div>
    );
};

export default BackendTest;
