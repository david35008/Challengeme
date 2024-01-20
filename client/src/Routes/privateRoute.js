import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Logged } from '../context/LoggedInContext';

function PrivateRoute({ component: Component }) {
  const LoggedContext = useContext(Logged);

  return LoggedContext.logged ? <Component /> : <Navigate to="/login" replace />;
}

export default PrivateRoute;
