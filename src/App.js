import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './Admin/admin-dashboard';
import DriverDashboard from './Driver/driver-dashboard'
import JobList from './Driver/job-list';
import JobDetail from './Driver/job-detail';
import TripTracker from './Driver/trip-tracker'

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>

          <Route path='/admin' element={<AdminDashboard />} />
            
          <Route path="/driver">
            <Route index element={<DriverDashboard />} />
            <Route path="job-list" element={<JobList />} />
            <Route path="job-list/job-detail/:customerId" element={<JobDetail />} />

            <Route path="trip-tracker" element={<TripTracker />}/>
          </Route>

        </Routes>
      </Router>

    </div>
  );
}

export default App;
