import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const RoleBasedRoute = ({ allowedRoles }) => {
  const { auth } = useContext(AuthContext);

  if (!auth.token) {
    return <Navigate to="/login" />;
  }

  const { role } = auth.user;

  return allowedRoles.includes(role) ? <Outlet /> : <Navigate to="/" />;
};

export default RoleBasedRoute;
