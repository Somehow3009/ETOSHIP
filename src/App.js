import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './Admin/admin-dashboard';
import DriverDashboard from './Driver/driver-dashboard'
import JobList from './Driver/job-list';
import CustomerDashboard from './Customer/customer-dashboard';
import BookingInterface from './Booking/booking';
import PaymentOptions from './Payment/payment-option';
import TripTracking from './Trip/trip-tracking';
import CustomerProfile from './Profile/customer-profile';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>

          <Route path='/admin' element={<AdminDashboard />} />
          <Route path='/customer' element={<CustomerDashboard />} />
          <Route path='/booking-interface' element={<BookingInterface />} />
          <Route path='/driver' element={<DriverDashboard />} />
          <Route path='/driver/job-list' element={<JobList />} />
          <Route path='/payment-options' element={<PaymentOptions />} />
          <Route path='/trip-tracking' element={<TripTracking />} />
          <Route path='/customer-profile' element={<CustomerProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
