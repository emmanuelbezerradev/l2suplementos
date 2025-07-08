import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { 
  UsersIcon, 
  ShoppingBagIcon, 
  CubeIcon, 
  ChartBarIcon,
  CogIcon,
  ClipboardDocumentListIcon
} from '@heroicons/react/24/outline';

const AdminDashboard = () => {
  const { user } = useAuth();

  // Dados simulados do dashboard
  const stats = [
    { name: 'Total de Produtos', value: '156', change: '+12%', icon: CubeIcon },
    { name: 'Usuários Cadastrados', value: '89', change: '+23%', icon: UsersIcon },
    { name: 'Pedidos Hoje', value: '12', change: '+8%', icon: ShoppingBagIcon },
    { name: 'Vendas do Mês', value: 'R$ 24.890', change: '+15%', icon: ChartBarIcon },
  ];

  const quickActions = [
    { name: 'Gerenciar Produtos', icon: CubeIcon, href: '/admin/produtos', color: 'bg-blue-500' },
    { name: 'Usuários', icon: UsersIcon, href: '/admin/usuarios', color: 'bg-green-500' },
    { name: 'Pedidos', icon: ClipboardDocumentListIcon, href: '/admin/pedidos', color: 'bg-yellow-500' },
    { name: 'Configurações', icon: CogIcon, href: '/admin/configuracoes', color: 'bg-purple-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Painel Administrativo</h1>
              <p className="text-gray-600">Bem-vindo, {user?.name}!</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Ver Site
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <stat.icon className="h-8 w-8 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {stat.name}
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {stat.value}
                      </div>
                      <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        {stat.change}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow mb-8">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Ações Rápidas</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickActions.map((action) => (
                <Link
                  key={action.name}
                  to={action.href}
                  className="flex flex-col items-center p-6 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors group"
                >
                  <div className={`${action.color} p-3 rounded-full mb-3 group-hover:scale-110 transition-transform`}>
                    <action.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-900 text-center">
                    {action.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Orders */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Pedidos Recentes</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {[1, 2, 3, 4].map((order) => (
                  <div key={order} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Pedido #{order}234
                      </p>
                      <p className="text-sm text-gray-500">João Silva</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">R$ 159,90</p>
                      <p className="text-sm text-green-600">Confirmado</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link
                  to="/admin/pedidos"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Ver todos os pedidos →
                </Link>
              </div>
            </div>
          </div>

          {/* Top Products */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Produtos Mais Vendidos</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {[
                  { name: 'Whey Protein', sales: 45 },
                  { name: 'Creatina', sales: 32 },
                  { name: 'BCAA', sales: 28 },
                  { name: 'Pré-treino', sales: 24 }
                ].map((product, index) => (
                  <div key={product.name} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-500 w-6">
                        {index + 1}.
                      </span>
                      <span className="text-sm font-medium text-gray-900 ml-2">
                        {product.name}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">{product.sales} vendas</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link
                  to="/admin/relatorios"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Ver relatório completo →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
