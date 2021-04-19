/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-shadow */
import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';
import history from '../history';

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
    const token = localStorage.getItem('#@adm@#');

    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token };
    }

    return {} as TokenState;
  });

  const signIn = async ({ email, password }: UserData) => {
 
    try{
    const response = await api.post('/sessions', {
      email,
      password,
    });
    const { token } = response.data;
    const resp = response.data;
    setName(resp.myUser.email);
    setToken(token);

    localStorage.setItem('#@adm@#', token);
    api.defaults.headers.authorization = `Bearer ${token}`;
    }catch(err){
      return alert('Usuário não existe');
    }

  

  };

  const userLogged = useCallback(() => {
    const token = localStorage.getItem('#@adm@#');

    if (token) {
      return true;
    }
    return false;
  }, []);

  const signOut = () => {
    localStorage.removeItem('#@adm@#');
    setToken({} as TokenState);
    history.push('');
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
