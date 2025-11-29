import { createContext, useState } from 'react';
import { login } from '../services/login';
import { register } from '../services/register';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const token = localStorage.getItem('token');

    return Boolean(token);
  });

  const singout = () => {
    localStorage.clear();
    setIsAuthenticated(false);
  };

  const singin = async (username, password) => {
    const { data, role, error } = await login(username, password);

    if (error) {
      return { error };
    }

    localStorage.setItem('token', data);
    localStorage.setItem('role', role);
    setIsAuthenticated(true);

    return { error: null };
  };

  const singup= async (username, password, name, email, tel, role)=>{
    const { error } = await register(username, password, name, email, tel, role);
    if (error) {
      return { error };
    }
    return { error: null };
  };

  return (
    <AuthContext.Provider
      value={ {
        isAuthenticated,
        singin,
        singout,
        singup,
      } }
    >
      {children}
    </AuthContext.Provider>
  );
};

export {
  AuthProvider,
  AuthContext,
};
