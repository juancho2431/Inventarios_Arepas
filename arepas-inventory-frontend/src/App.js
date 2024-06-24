import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Inventory from './components/Inventory';
import Purchases from './components/Purchases';
import Login from './components/Login';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import RoleBasedRoute from './components/RoleBasedRoute';
import { AuthProvider } from './context/AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute />}>
              <Route index element={<Home />} />
              <Route path="inventory" element={<RoleBasedRoute allowedRoles={['admin', 'tienda']} />}>
                <Route path="" element={<Inventory />} />
              </Route>
              <Route path="purchases" element={<RoleBasedRoute allowedRoles={['admin']} />}>
                <Route path="" element={<Purchases />} />
              </Route>
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
