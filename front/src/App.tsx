import React from 'react';

import { ThemeProvider } from 'styled-components';

import { BrowserRouter } from 'react-router-dom';

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
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
