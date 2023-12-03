// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? (
    <Route element={children} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
