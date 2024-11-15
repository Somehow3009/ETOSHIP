import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DriverIndex from './pages/Driver/index';

import AdminDashboard from './pages/Admin/admin-dashboard';
import DriverList from './pages/Admin/driver-list';
import DriverProfile from './pages/Admin/driver-profile';
import VehicleList from './pages/Admin/vehicle-list';
import OrderManagement from './pages/Admin/order-management';
import OrderDetail from './pages/Admin/order-detail';
import FinanceReport from './pages/Admin/finance-report';
import RevenueComparison from './pages/Admin/revenue-comparison';

function App() {
  return (
    <div className="App"> 
      <Router>
        <Routes>
          <Route path="/driver/*" element={<DriverIndex />} />

          <Route path="/admin">
            <Route index element={<AdminDashboard />} />
            <Route path="driverlist" element={<DriverList />} />
            <Route path="driverprofile" element={<DriverProfile />} />
            <Route path="vehiclelist" element={<VehicleList />} />
            <Route path="ordermanagement" element={<OrderManagement />} />
            <Route path="orderdetail" element={<OrderDetail />} />
            <Route path="financereport" element={<FinanceReport />} />
            <Route path="revenuecomparison" element={<RevenueComparison />} />
          </Route>


        </Routes>
      </Router>
    </div>
  );
}

export default App;
