import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import {
  HomeIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  ChartBarIcon,
  CogIcon,
  ArrowLeftOnRectangleIcon,
  PlusIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';

const AdminDashboard = () => {
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!isAdmin()) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Acesso Negado</h1>
          <p className="text-gray-400 mb-6">Você não tem permissão para acessar esta área.</p>
          <Link
            to="/"
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Voltar ao Site
          </Link>
        </div>
      </div>
    );
  }

  const menuItems = [
    { id: 'overview', label: 'Visão Geral', icon: HomeIcon },
    { id: 'products', label: 'Produtos', icon: ShoppingBagIcon },
    { id: 'users', label: 'Usuários', icon: UserGroupIcon },
    { id: 'analytics', label: 'Relatórios', icon: ChartBarIcon },
    { id: 'settings', label: 'Configurações', icon: CogIcon },
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 border-r border-gray-700">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">L2</span>
            </div>
            <div>
              <h1 className="text-white font-bold text-lg">Admin Panel</h1>
              <p className="text-gray-400 text-sm">L2 Suplementos</p>
            </div>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === item.id
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* User Info */}
        <div className="absolute bottom-0 w-64 p-6 border-t border-gray-700">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">
                {user?.name?.charAt(0) || 'A'}
              </span>
            </div>
            <div>
              <p className="text-white text-sm font-medium">{user?.name}</p>
              <p className="text-gray-400 text-xs">{user?.email}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-2 px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors"
          >
            <ArrowLeftOnRectangleIcon className="w-4 h-4" />
            <span>Sair</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">
              {menuItems.find(item => item.id === activeTab)?.label}
            </h2>
            <Link
              to="/"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <HomeIcon className="w-5 h-5" />
              <span>Ver Site</span>
            </Link>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {activeTab === 'overview' && <OverviewTab />}
          {activeTab === 'products' && <ProductsTab />}
          {activeTab === 'users' && <UsersTab />}
          {activeTab === 'analytics' && <AnalyticsTab />}
          {activeTab === 'settings' && <SettingsTab />}
        </main>
      </div>
    </div>
  );
};

// Componente da aba Overview
const OverviewTab = () => {
  const stats = [
    { label: 'Total de Produtos', value: '0', color: 'bg-blue-500' },
    { label: 'Usuários Ativos', value: '0', color: 'bg-green-500' },
    { label: 'Pedidos Hoje', value: '0', color: 'bg-purple-500' },
    { label: 'Vendas do Mês', value: 'R$ 0', color: 'bg-orange-500' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <div className="flex items-center">
              <div className={`w-3 h-3 rounded-full ${stat.color} mr-3`}></div>
              <div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
                <p className="text-white text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h3 className="text-white text-lg font-semibold mb-4">Ações Rápidas</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-lg transition-colors flex items-center space-x-2">
            <PlusIcon className="w-5 h-5" />
            <span>Novo Produto</span>
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg transition-colors flex items-center space-x-2">
            <EyeIcon className="w-5 h-5" />
            <span>Ver Pedidos</span>
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-lg transition-colors flex items-center space-x-2">
            <ChartBarIcon className="w-5 h-5" />
            <span>Relatórios</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Componente da aba Products
const ProductsTab = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-white text-lg font-semibold">Gerenciar Produtos</h3>
        <Link
          to="/admin/products/new"
          className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
        >
          <PlusIcon className="w-5 h-5" />
          <span>Novo Produto</span>
        </Link>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <p className="text-gray-400 text-center py-8">
          Nenhum produto cadastrado ainda. Clique em "Novo Produto" para começar.
        </p>
      </div>
    </div>
  );
};

// Componente da aba Users
const UsersTab = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
      <h3 className="text-white text-lg font-semibold mb-4">Usuários Registrados</h3>
      <p className="text-gray-400 text-center py-8">
        Nenhum usuário registrado ainda.
      </p>
    </div>
  );
};

// Componente da aba Analytics
const AnalyticsTab = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
      <h3 className="text-white text-lg font-semibold mb-4">Relatórios e Análises</h3>
      <p className="text-gray-400 text-center py-8">
        Funcionalidade em desenvolvimento.
      </p>
    </div>
  );
};

// Componente da aba Settings
const SettingsTab = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
      <h3 className="text-white text-lg font-semibold mb-4">Configurações do Sistema</h3>
      <p className="text-gray-400 text-center py-8">
        Funcionalidade em desenvolvimento.
      </p>
    </div>
  );
};

export default AdminDashboard;
