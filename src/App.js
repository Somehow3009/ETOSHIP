import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './Admin/admin-dashboard';
import DriverDashboard from './Driver/driver-dashboard'
import JobList from './Driver/job-list';
import JobDetail from './Driver/job-detail';
import TripTracker from './Driver/trip-tracker'
import EarningsDetails from './Driver/earnings-detail';
import DriverProfile from './Driver/driver-profile'

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>

          <Route path="/admin">
            <Route index element={<AdminDashboard />} />
          </Route>

          <Route path="/driver">
            <Route index element={<DriverDashboard />} />
            <Route path="job-list" element={<JobList />} />
            <Route path="job-detail/:customerId" element={<JobDetail />} />
            <Route path="trip-tracker/:customerId" element={<TripTracker />}/>
            <Route path="chart" element={<EarningsDetails />}/>
            <Route path='profile' element={<DriverProfile />} />
          </Route>

        </Routes>
      </Router>

    </div>
  );
}

export default App;
