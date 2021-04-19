import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from '../pages/Login';

const AppRoutes: React.FC = () => (
  <Switch>
    <Route path="/"  exact component={Login} />
    <Route path="*"  component={() => <Redirect to="/" /> } />
  </Switch>
);

export default AppRoutes;
