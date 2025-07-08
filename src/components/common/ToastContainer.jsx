import React, { useState, useCallback } from 'react';
import Toast from './Toast';

let toastIdCounter = 0;

const ToastContainer = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((toast) => {
    const id = ++toastIdCounter;
    const newToast = { 
      id, 
      ...toast,
      timestamp: Date.now()
    };
    
    setToasts(prevToasts => [...prevToasts, newToast]);
    return id;
  }, []);

  const removeToast = useCallback((id) => {
    setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
  }, []);

  // Expor funções globalmente
  React.useEffect(() => {
    window.showToast = addToast;
    window.hideToast = removeToast;
    
    return () => {
      delete window.showToast;
      delete window.hideToast;
    };
  }, [addToast, removeToast]);

  return (
    <div 
      aria-live="assertive" 
      className="fixed inset-0 flex items-end justify-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start z-50"
    >
      <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            id={toast.id}
            type={toast.type}
            title={toast.title}
            message={toast.message}
            duration={toast.duration}
            onClose={removeToast}
          />
        ))}
      </div>
    </div>
  );
};

export default ToastContainer;
