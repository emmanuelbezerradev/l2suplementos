import React from "react";
import {
  XMarkIcon,
  MinusIcon,
  PlusIcon,
  TrashIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { useCart } from "../../contexts/CartContext";

const CartSidebar = ({ isOpen, onClose }) => {
  const { items, removeFromCart, updateQuantity, getCartTotal, clearCart } =
    useCart();

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const formatPrice = (price) => {
    return `R$ ${price.toFixed(2).replace(".", ",")}`;
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-[60]"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-32 h-[calc(100vh-8rem)] w-96 max-w-[90vw] bg-white shadow-2xl z-[70] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold flex items-center">
            <ShoppingBagIcon className="w-6 h-6 mr-2" />
            Carrinho ({items.length})
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Conteúdo do carrinho */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBagIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg mb-4">
                Seu carrinho está vazio
              </p>
              <button onClick={onClose} className="btn-primary">
                Continuar Comprando
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg"
                >
                  <img
                    src={item.image || "/api/placeholder/80/80"}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />

                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm line-clamp-2">
                      {item.name}
                    </h3>
                    <p className="text-primary-600 font-semibold">
                      {formatPrice(item.price)}
                    </p>
                  </div>

                  <div className="flex flex-col items-center space-y-2">
                    {/* Controles de quantidade */}
                    <div className="flex items-center border rounded">
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                        className="p-1 hover:bg-gray-100 transition-colors"
                      >
                        <MinusIcon className="w-4 h-4" />
                      </button>
                      <span className="px-3 py-1 min-w-[2rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                        className="p-1 hover:bg-gray-100 transition-colors"
                      >
                        <PlusIcon className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Botão remover */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                      title="Remover item"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}

              {/* Botão limpar carrinho */}
              {items.length > 0 && (
                <button
                  onClick={clearCart}
                  className="w-full text-red-500 hover:text-red-700 text-sm py-2 transition-colors"
                >
                  Limpar Carrinho
                </button>
              )}
            </div>
          )}
        </div>

        {/* Footer com total e checkout */}
        {items.length > 0 && (
          <div className="border-t p-6 space-y-4">
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Total:</span>
              <span className="text-primary-600">
                {formatPrice(getCartTotal())}
              </span>
            </div>

            <div className="space-y-2">
              <button className="w-full btn-primary">Finalizar Compra</button>
              <button onClick={onClose} className="w-full btn-outline">
                Continuar Comprando
              </button>
            </div>

            <div className="text-center text-sm text-gray-500">
              <p>Frete grátis acima de R$ 199</p>
              <p>Parcelamento em até 12x sem juros</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
