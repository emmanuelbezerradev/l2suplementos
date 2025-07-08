import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { showToast } from '../../utils/toastUtils';
import { 
  MagnifyingGlassIcon,
  EyeIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const OrderManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Dados simulados de pedidos
  const [orders] = useState([
    {
      id: 1,
      orderNumber: 'L2-2024-001',
      customer: {
        name: 'João Silva',
        email: 'joao@email.com'
      },
      items: [
        { name: 'Whey Protein', quantity: 1, price: 89.90 },
        { name: 'Creatina', quantity: 1, price: 45.90 }
      ],
      total: 135.80,
      status: 'pending',
      createdAt: '2024-01-20T10:30:00',
      updatedAt: '2024-01-20T10:30:00'
    },
    {
      id: 2,
      orderNumber: 'L2-2024-002',
      customer: {
        name: 'Maria Santos',
        email: 'maria@email.com'
      },
      items: [
        { name: 'BCAA', quantity: 1, price: 65.90 }
      ],
      total: 65.90,
      status: 'confirmed',
      createdAt: '2024-01-19T15:45:00',
      updatedAt: '2024-01-20T09:15:00'
    },
    {
      id: 3,
      orderNumber: 'L2-2024-003',
      customer: {
        name: 'Pedro Costa',
        email: 'pedro@email.com'
      },
      items: [
        { name: 'Pré-treino', quantity: 1, price: 79.90 },
        { name: 'Glutamina', quantity: 1, price: 55.90 }
      ],
      total: 135.80,
      status: 'shipped',
      createdAt: '2024-01-18T14:20:00',
      updatedAt: '2024-01-19T11:30:00'
    },
    {
      id: 4,
      orderNumber: 'L2-2024-004',
      customer: {
        name: 'Ana Oliveira',
        email: 'ana@email.com'
      },
      items: [
        { name: 'Multivitamínico', quantity: 1, price: 39.90 }
      ],
      total: 39.90,
      status: 'delivered',
      createdAt: '2024-01-17T09:15:00',
      updatedAt: '2024-01-18T16:45:00'
    },
    {
      id: 5,
      orderNumber: 'L2-2024-005',
      customer: {
        name: 'Carlos Lima',
        email: 'carlos@email.com'
      },
      items: [
        { name: 'Termogênico', quantity: 1, price: 69.90 }
      ],
      total: 69.90,
      status: 'cancelled',
      createdAt: '2024-01-16T11:30:00',
      updatedAt: '2024-01-16T14:20:00'
    }
  ]);

  const statusOptions = [
    { value: 'pending', label: 'Pendente', color: 'bg-yellow-100 text-yellow-800' },
    { value: 'confirmed', label: 'Confirmado', color: 'bg-blue-100 text-blue-800' },
    { value: 'shipped', label: 'Enviado', color: 'bg-purple-100 text-purple-800' },
    { value: 'delivered', label: 'Entregue', color: 'bg-green-100 text-green-800' },
    { value: 'cancelled', label: 'Cancelado', color: 'bg-red-100 text-red-800' }
  ];

  // Filtrar pedidos
  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customer.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = !selectedStatus || order.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusLabel = (status) => {
    const statusOption = statusOptions.find(s => s.value === status);
    return statusOption ? statusOption.label : status;
  };

  const getStatusColor = (status) => {
    const statusOption = statusOptions.find(s => s.value === status);
    return statusOption ? statusOption.color : 'bg-gray-100 text-gray-800';
  };

  const updateOrderStatus = (orderId, newStatus) => {
    try {
      console.log('Atualizar status do pedido:', orderId, 'para:', newStatus);
      showToast.success('Status Atualizado!', `Status do pedido atualizado para: ${getStatusLabel(newStatus)}`);
    } catch (error) {
      showToast.error('Erro!', 'Não foi possível atualizar o status do pedido.');
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('pt-BR');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Gerenciar Pedidos</h1>
              <p className="text-gray-600">Visualize e gerencie todos os pedidos</p>
            </div>
            <Link
              to="/admin"
              className="text-gray-600 hover:text-gray-800"
            >
              ← Voltar ao Dashboard
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Search */}
              <div className="relative">
                <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar pedidos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Status Filter */}
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Todos os status</option>
                {statusOptions.map(status => (
                  <option key={status.value} value={status.value}>
                    {status.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <ClockIcon className="h-8 w-8 text-yellow-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Pendentes</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {orders.filter(o => o.status === 'pending').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <CheckCircleIcon className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Confirmados</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {orders.filter(o => o.status === 'confirmed').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <CheckCircleIcon className="h-8 w-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Entregues</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {orders.filter(o => o.status === 'delivered').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <XCircleIcon className="h-8 w-8 text-red-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Cancelados</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {orders.filter(o => o.status === 'cancelled').length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">
              Pedidos ({filteredOrders.length})
            </h2>
          </div>

          {filteredOrders.length === 0 ? (
            <div className="p-6 text-center">
              <p className="text-gray-500">Nenhum pedido encontrado</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Pedido
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Cliente
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Data
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {order.orderNumber}
                          </div>
                          <div className="text-sm text-gray-500">
                            {order.items.length} {order.items.length === 1 ? 'item' : 'itens'}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {order.customer.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {order.customer.email}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          R$ {order.total.toFixed(2)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                          {getStatusLabel(order.status)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(order.createdAt)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end space-x-2">
                          <button
                            onClick={() => setSelectedOrder(order)}
                            className="text-blue-600 hover:text-blue-900"
                            title="Ver detalhes"
                          >
                            <EyeIcon className="h-5 w-5" />
                          </button>
                          {order.status !== 'delivered' && order.status !== 'cancelled' && (
                            <select
                              onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                              defaultValue=""
                              className="text-xs border border-gray-300 rounded px-2 py-1"
                            >
                              <option value="" disabled>Alterar status</option>
                              {statusOptions
                                .filter(s => s.value !== order.status)
                                .map(status => (
                                  <option key={status.value} value={status.value}>
                                    {status.label}
                                  </option>
                                ))
                              }
                            </select>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-10 mx-auto p-5 border w-11/12 max-w-2xl shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Detalhes do Pedido {selectedOrder.orderNumber}
                </h3>
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">Cliente:</h4>
                  <p className="text-gray-600">{selectedOrder.customer.name}</p>
                  <p className="text-gray-600">{selectedOrder.customer.email}</p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900">Itens:</h4>
                  <div className="bg-gray-50 rounded p-3">
                    {selectedOrder.items.map((item, index) => (
                      <div key={index} className="flex justify-between py-1">
                        <span>{item.name} (x{item.quantity})</span>
                        <span>R$ {item.price.toFixed(2)}</span>
                      </div>
                    ))}
                    <div className="border-t pt-2 mt-2 font-medium">
                      <div className="flex justify-between">
                        <span>Total:</span>
                        <span>R$ {selectedOrder.total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900">Status:</h4>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(selectedOrder.status)}`}>
                    {getStatusLabel(selectedOrder.status)}
                  </span>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900">Datas:</h4>
                  <p className="text-gray-600">Criado: {formatDate(selectedOrder.createdAt)}</p>
                  <p className="text-gray-600">Atualizado: {formatDate(selectedOrder.updatedAt)}</p>
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderManagement;
