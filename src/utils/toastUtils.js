// Funções utilitárias para mostrar toasts
export const showToast = {
  success: (title, message, duration = 4000) => {
    if (window.showToast) {
      return window.showToast({ type: 'success', title, message, duration });
    }
  },
  error: (title, message, duration = 4000) => {
    if (window.showToast) {
      return window.showToast({ type: 'error', title, message, duration });
    }
  },
  warning: (title, message, duration = 4000) => {
    if (window.showToast) {
      return window.showToast({ type: 'warning', title, message, duration });
    }
  },
  info: (title, message, duration = 4000) => {
    if (window.showToast) {
      return window.showToast({ type: 'info', title, message, duration });
    }
  }
};

export const hideToast = (id) => {
  if (window.hideToast) {
    window.hideToast(id);
  }
};
