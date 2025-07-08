import React, { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import SessionManager from '../../utils/sessionManager';

const AuthDebugger = () => {
  const { user, isAuthenticated } = useAuth();
  const [sessionData, setSessionData] = useState(null);
  const [showDebugger, setShowDebugger] = useState(false);

  useEffect(() => {
    const updateSessionData = () => {
      const session = SessionManager.loadSession();
      setSessionData(session);
    };

    updateSessionData();
    const interval = setInterval(updateSessionData, 2000);

    return () => clearInterval(interval);
  }, []);

  // Só mostrar em desenvolvimento - usando import.meta.env para Vite
  if (import.meta.env.PROD) {
    return null;
  }

  if (!showDebugger) {
    return (
      <button
        onClick={() => setShowDebugger(true)}
        className="fixed bottom-4 left-4 bg-gray-800 text-white px-3 py-1 rounded text-xs z-50 opacity-50 hover:opacity-100"
      >
        Debug Auth
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 bg-black text-white p-4 rounded-lg text-xs max-w-md z-50 opacity-90">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold">Auth Debugger</h3>
        <button
          onClick={() => setShowDebugger(false)}
          className="text-red-400 hover:text-red-300"
        >
          ✕
        </button>
      </div>
      
      <div className="space-y-2">
        <div>
          <strong>Context User:</strong> {user ? JSON.stringify(user, null, 2) : 'null'}
        </div>
        <div>
          <strong>Is Authenticated:</strong> {isAuthenticated ? 'true' : 'false'}
        </div>
        <div>
          <strong>Session Data:</strong> {sessionData ? JSON.stringify(sessionData, null, 2) : 'null'}
        </div>
        <div>
          <strong>LocalStorage l2_user:</strong> {localStorage.getItem('l2_user') || 'null'}
        </div>
        <div>
          <strong>LocalStorage backup:</strong> {localStorage.getItem('l2_user_backup') || 'null'}
        </div>
      </div>
    </div>
  );
};

export default AuthDebugger;
