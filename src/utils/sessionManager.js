// Utilitário para gerenciar sessão de forma mais robusta
export class SessionManager {
  static SESSION_KEY = 'l2_user';
  static BACKUP_KEY = 'l2_user_backup';

  // Salvar sessão com backup
  static saveSession(user) {
    try {
      const userData = JSON.stringify(user);
      localStorage.setItem(this.SESSION_KEY, userData);
      localStorage.setItem(this.BACKUP_KEY, userData);
    } catch (error) {
      console.error('SessionManager: Erro ao salvar sessão:', error);
    }
  }

  // Carregar sessão com fallback para backup
  static loadSession() {
    try {
      let userData = localStorage.getItem(this.SESSION_KEY);
      
      if (!userData) {
        console.log('SessionManager: Sessão principal não encontrada, tentando backup...');
        userData = localStorage.getItem(this.BACKUP_KEY);
      }

      if (userData) {
        const user = JSON.parse(userData);
        
        // Se carregou do backup, restaurar a sessão principal
        if (!localStorage.getItem(this.SESSION_KEY)) {
          localStorage.setItem(this.SESSION_KEY, userData);
        }
        
        return user;
      }

      return null;
    } catch (error) {
      console.error('SessionManager: Erro ao carregar sessão:', error);
      this.clearSession();
      return null;
    }
  }

  // Limpar sessão
  static clearSession() {
    localStorage.removeItem(this.SESSION_KEY);
    localStorage.removeItem(this.BACKUP_KEY);
  }

  // Verificar se sessão está válida
  static isSessionValid() {
    const user = this.loadSession();
    return user && user.id && user.role;
  }

  // Monitorar mudanças no localStorage
  static watchSession(callback) {
    const checkSession = () => {
      const currentUser = this.loadSession();
      callback(currentUser);
    };

    // Verificar periodicamente
    const interval = setInterval(checkSession, 1000);

    // Escutar mudanças do localStorage
    window.addEventListener('storage', checkSession);

    // Retornar função de limpeza
    return () => {
      clearInterval(interval);
      window.removeEventListener('storage', checkSession);
    };
  }
}

export default SessionManager;
