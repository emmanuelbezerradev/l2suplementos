import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const ProtectedRoute = ({ children, requireAdmin = false }) => {
  const { isAuthenticated, isAdmin } = useAuth();

  if (!isAuthenticated) {
    console.log('ProtectedRoute: Usuário não autenticado, redirecionando para login');
    return <Navigate to="/login" replace />;
  }

  if (requireAdmin && !isAdmin()) {
    console.log('ProtectedRoute: Usuário não é admin, redirecionando para home');
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
