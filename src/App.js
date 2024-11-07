import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './Admin/admin-dashboard';
import DriverDashboard from './Driver/driver-dashboard'
import JobList from './Driver/job-list';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>

          <Route path='/admin' element={<AdminDashboard />} />
            
          <Route path='/driver' element={<DriverDashboard />} />
          <Route path='/driver/job-list' element={<JobList />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
