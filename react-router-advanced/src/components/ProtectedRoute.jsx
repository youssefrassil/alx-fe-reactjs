// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ element, isAuthenticated }) {
  return isAuthenticated ? element : <Navigate to="/" />;
}

export default ProtectedRoute;
