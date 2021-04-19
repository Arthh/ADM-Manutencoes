import React from 'react';

import { ThemeProvider } from 'styled-components';

import { BrowserRouter, Router } from 'react-router-dom';

import history from './history';

import Routes from './routes';

import light from './styles/themes/light';

import GlobalStyles from './styles/GlobalStyles';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={light}>
        <GlobalStyles />

        <AuthProvider>
          <Router history={history}>
          <Routes />
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
