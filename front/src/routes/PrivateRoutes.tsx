/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAuth } from '../hooks/AuthContext';

interface RoutesPropsData extends RouteProps {}

const PrivateRoutes: React.FC<RoutesPropsData> = ({...rest}) => {
  const { userLogged } = useAuth();

  return userLogged() ? <Route {...rest} /> : <Redirect to="/" />;
};

export default PrivateRoutes;
