import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
// import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
// import DriverDashboard from './pages/DriverDashboard/DriverDashboard';
// import CustomerDashboard from './pages/CustomerDashboard/CustomerDashboard';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/" />} />
        <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/" />} />
        
        {/* Private Routes */}
         <Route path="/" element={false ? <></> : <Navigate to="/login" />} />
        {/*<Route path="/driver" element={isAuthenticated ? <DriverDashboard /> : <Navigate to="/login" />} />
        <Route path="/customer" element={isAuthenticated ? <CustomerDashboard /> : <Navigate to="/login" />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
