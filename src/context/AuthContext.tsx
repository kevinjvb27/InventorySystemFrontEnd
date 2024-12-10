import React, { createContext, useContext, useState, ReactNode } from 'react';
import { loginUser } from '../services/authService';
import { setToken } from '../utils/tokenManager';

interface AuthContextType {
  user: string | null;
  login: (credentials: { username: string; password: string }) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuthContext must be used within an AuthProvider');
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<string | null>(null);
  
    const login = async (credentials: { username: string; password: string }) => {
      try {
        const token = await loginUser(credentials);
        if (token) {
          setToken(token); 
          setUser(credentials.username);
          return true;
        }
        return false;
      } catch (error) {
        console.error('Error al intentar iniciar sesión', error);
        return false;
      }
    };
  
    return (
      <AuthContext.Provider value={{ user, login }}>
        {children}
      </AuthContext.Provider>
    );
  };