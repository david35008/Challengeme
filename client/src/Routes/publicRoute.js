import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { Logged } from '../context/LoggedInContext';

export default function PublicRoute({ component: Component, path }) {
  const LoggedContext = useContext(Logged);

  return (
    <Route
      path={path}
      element={
        !LoggedContext.logged ? <Component /> : <Navigate to="/" replace />
      }
    />
  );
}
