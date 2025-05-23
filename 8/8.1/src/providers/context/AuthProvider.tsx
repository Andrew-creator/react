import { createContext, useState, useEffect, ReactNode } from 'react';

export type User = {
  id: number;
  name: string;
  role: 'admin' | 'user';
};

type AuthContextType = {
  isAuthenticated: boolean;
  loading: boolean;
  login: (token: string, user?: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('testAuthToken');
    if (token) {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const login = (token: string, user?: User) => {
    localStorage.setItem('testAuthToken', token);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    }
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('testAuthToken');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
