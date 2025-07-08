import React, { useState, useEffect } from 'react';
import { AuthContext } from './AuthContextDefinition';
import SessionManager from '../utils/sessionManager';

// Usuários pré-definidos (em produção, isso viria do backend)
const PREDEFINED_USERS = [
  {
    id: 1,
    email: 'admin',
    password: 'luna1992_',
    name: 'Administrador L2',
    role: 'admin'
  },
  {
    id: 2,
    email: 'user@teste.com',
    password: '123456',
    name: 'Usuário Teste',
    role: 'user'
  }
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Verificar se há usuário logado no localStorage ao inicializar
  useEffect(() => {
    const savedUser = SessionManager.loadSession();
    console.log('AuthContext: Verificando usuário salvo:', savedUser);
    if (savedUser) {
      console.log('AuthContext: Usuário carregado:', savedUser);
      setUser(savedUser);
    }
  }, []);

  // Monitorar mudanças na sessão
  useEffect(() => {
    const cleanup = SessionManager.watchSession((currentUser) => {
      if (currentUser && !user) {
        console.log('AuthContext: Sessão restaurada:', currentUser);
        setUser(currentUser);
      } else if (!currentUser && user) {
        console.log('AuthContext: Sessão perdida, fazendo logout');
        setUser(null);
      }
    });

    return cleanup;
  }, [user]);

  const login = async (email, password) => {
    setLoading(true);
    try {
      // Verificar se é um usuário válido
      const foundUser = PREDEFINED_USERS.find(
        u => u.email === email && u.password === password
      );

      if (foundUser) {
        const userWithoutPassword = {
          id: foundUser.id,
          email: foundUser.email,
          name: foundUser.name,
          role: foundUser.role
        };
        
        setUser(userWithoutPassword);
        SessionManager.saveSession(userWithoutPassword);
        console.log('AuthContext: Usuário logado com sucesso:', userWithoutPassword);
        
        return { success: true, user: userWithoutPassword };
      } else {
        return { success: false, error: 'Credenciais inválidas' };
      }
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    console.log('AuthContext: Fazendo logout');
    setUser(null);
    SessionManager.clearSession();
  };

  const isAdmin = () => {
    return user?.role === 'admin';
  };

  const value = {
    user,
    login,
    logout,
    loading,
    isAuthenticated: !!user,
    isAdmin
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
