/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-shadow */
import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface AuthContextState {
  name: string;
  token: TokenState;
  signIn({ email, password }: UserData): Promise<void>;
  userLogged(): boolean;
  signOut(): void;
}

interface UserData {
  email: string;
  password: string;
}

interface TokenState {
  token: string;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

const AuthProvider: React.FC = ({ children }) => {
  const [name, setName] = useState<string>('');
  const [token, setToken] = useState<TokenState>(() => {
    const token = localStorage.getItem('#@ledsetk@#');

    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token };
    }

    return {} as TokenState;
  });

  const signIn = async ({ email, password }: UserData) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    const { token } = response.data;
    const resp = response.data;

    setName(resp.user.name);
    setToken(token);

    localStorage.setItem('#@ledsetk@#', token);
    api.defaults.headers.authorization = `Bearer ${token}`;
  };

  const userLogged = useCallback(() => {
    const token = localStorage.getItem('#@ledsetk@#');

    if (token) {
      return true;
    }
    return false;
  }, []);

  const signOut = () => {
    localStorage.removeItem('#@ledsetk@#');
    setToken({} as TokenState);
  };

  return (
    <AuthContext.Provider value={{ name, token, signIn, userLogged, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextState {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
