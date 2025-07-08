import React from 'react';
import { XMarkIcon, ShoppingBagIcon, CreditCardIcon, TruckIcon } from '@heroicons/react/24/outline';
import sampleOrders from '../../data/sampleOrders';

const UserOrdersModal = ({ user, isOpen, onClose }) => {
  if (!isOpen || !user) return null;

  // Filtrar pedidos do usuário
  const userOrders = sampleOrders.filter(order => order.userId === user.id);

  const getStatusColor = (status) => {
    switch (status) {
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'processing':
        return 'Processando';
      case 'shipped':
        return 'Enviado';
      case 'delivered':
        return 'Entregue';
      case 'cancelled':
        return 'Cancelado';
      default:
        return 'Desconhecido';
    }
  };

  const getPaymentText = (payment) => {
    switch (payment.method) {
      case 'credit_card':
        return `Cartão de Crédito ${payment.card}`;
      case 'debit_card':
        return `Cartão de Débito ${payment.card}`;
      case 'pix':
        return `PIX ${payment.pixKey}`;
      case 'boleto':
        return `Boleto ${payment.boleto}`;
      default:
        return 'Não informado';
    }
  };

  const totalPurchases = userOrders.reduce((sum, order) => sum + order.total, 0);

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-10 mx-auto p-5 border w-full max-w-4xl shadow-lg rounded-md bg-white">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900">
              Histórico de Compras - {user.name}
            </h3>
            <p className="text-sm text-gray-600">
              {userOrders.length} pedido(s) • Total: R$ {totalPurchases.toFixed(2)}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="max-h-96 overflow-y-auto">
          {userOrders.length === 0 ? (
            <div className="text-center py-8">
              <ShoppingBagIcon className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">Nenhuma compra</h3>
              <p className="mt-1 text-sm text-gray-500">
                Este usuário ainda não realizou nenhuma compra.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {userOrders.map((order) => (
                <div key={order.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <h4 className="text-sm font-medium text-gray-900">
                        Pedido #{order.id}
                      </h4>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                        {getStatusText(order.status)}
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">
                        R$ {order.total.toFixed(2)}
                      </p>
                      <p className="text-xs text-gray-500">
                        {new Date(order.date).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                  </div>

                  {/* Itens do pedido */}
                  <div className="space-y-2 mb-3">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex items-center space-x-3 text-sm">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-10 w-10 object-cover rounded"
                        />
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{item.name}</p>
                          <p className="text-gray-500">{item.brand}</p>
                        </div>
                        <div className="text-right">
                          <p>Qtd: {item.quantity}</p>
                          <p className="font-medium">R$ {(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Informações de entrega e pagamento */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-gray-100">
                    <div className="flex items-start space-x-2">
                      <TruckIcon className="h-4 w-4 text-gray-400 mt-0.5" />
                      <div className="text-xs text-gray-600">
                        <p className="font-medium">Endereço de entrega:</p>
                        <p>{order.address.street}</p>
                        <p>{order.address.city}, {order.address.state} - {order.address.zipCode}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CreditCardIcon className="h-4 w-4 text-gray-400 mt-0.5" />
                      <div className="text-xs text-gray-600">
                        <p className="font-medium">Pagamento:</p>
                        <p>{getPaymentText(order.payment)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex justify-end pt-4 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserOrdersModal;
