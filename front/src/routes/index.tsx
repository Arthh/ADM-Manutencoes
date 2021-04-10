import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { useAuth } from '../hooks/AuthContext';

// import App from './app.routes';
import Auth from './auth.routes';

const Routes: React.FC = () => {
  const { userLogged } = useAuth();
  const logged = userLogged();

  // return <BrowserRouter>{logged ? <Auth /> : <App />}</BrowserRouter>;
  return (
    <BrowserRouter>
      <Auth />
    </BrowserRouter>
  );
};

export default Routes;
