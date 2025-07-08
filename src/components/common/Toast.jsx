import React, { useState, useEffect } from 'react';
import { CheckCircleIcon, XMarkIcon, ExclamationTriangleIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

const Toast = ({ 
  id,
  type = 'success', 
  title, 
  message, 
  duration = 4000,
  onClose 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  const handleClose = () => {
    setIsLeaving(true);
    setTimeout(() => {
      onClose(id);
    }, 300);
  };

  useEffect(() => {
    // Animar entrada
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    // Auto fechar
    const closeTimer = setTimeout(() => {
      setIsLeaving(true);
      setTimeout(() => {
        onClose(id);
      }, 300);
    }, duration);

    return () => {
      clearTimeout(timer);
      clearTimeout(closeTimer);
    };
  }, [duration, id, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircleIcon className="h-6 w-6 text-green-400" />;
      case 'error':
        return <XMarkIcon className="h-6 w-6 text-red-400" />;
      case 'warning':
        return <ExclamationTriangleIcon className="h-6 w-6 text-yellow-400" />;
      case 'info':
        return <InformationCircleIcon className="h-6 w-6 text-blue-400" />;
      default:
        return <CheckCircleIcon className="h-6 w-6 text-green-400" />;
    }
  };

  const getStyles = () => {
    const baseStyles = "max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden transition-all duration-300 transform";
    
    if (isLeaving) {
      return `${baseStyles} translate-x-full opacity-0`;
    }
    
    if (isVisible) {
      return `${baseStyles} translate-x-0 opacity-100`;
    }
    
    return `${baseStyles} translate-x-full opacity-0`;
  };

  const getBorderColor = () => {
    switch (type) {
      case 'success':
        return 'border-l-4 border-green-400';
      case 'error':
        return 'border-l-4 border-red-400';
      case 'warning':
        return 'border-l-4 border-yellow-400';
      case 'info':
        return 'border-l-4 border-blue-400';
      default:
        return 'border-l-4 border-green-400';
    }
  };

  return (
    <div className={`${getStyles()} ${getBorderColor()}`}>
      <div className="p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            {getIcon()}
          </div>
          <div className="ml-3 w-0 flex-1 pt-0.5">
            {title && (
              <p className="text-sm font-medium text-gray-900">
                {title}
              </p>
            )}
            {message && (
              <p className={`${title ? 'mt-1' : ''} text-sm text-gray-500`}>
                {message}
              </p>
            )}
          </div>
          <div className="ml-4 flex-shrink-0 flex">
            <button
              className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={handleClose}
            >
              <span className="sr-only">Fechar</span>
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toast;
