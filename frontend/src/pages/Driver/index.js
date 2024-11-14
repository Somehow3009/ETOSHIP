import './driver.css';

import { Route, Routes } from 'react-router-dom';
import Header from '../../components/layout/header';
import Nav from '../../components/layout/nav';
import DriverDashboard from './driver-dashboard';
import JobList from './job-list';
import JobDetail from './job-detail';
import TripTracker from './trip-tracker';
import EarningsDetails from './earnings-detail';
import DriverProfile from './driver-profile';

const DriverIndex = () => {
  return (
    <div>
      <Header pageName='Driver Module' img='https://picsum.photos/100/100?random=2' />
      <div className='container'>
        <Routes>
          <Route index element={<DriverDashboard />} />
          <Route path='job-list' element={<JobList />} />
          <Route path='job-detail/:customerId' element={<JobDetail />} />
          <Route path='trip-tracker/:customerId' element={<TripTracker />} />
          <Route path='chart' element={<EarningsDetails />} />
          <Route path='profile' element={<DriverProfile />} />
        </Routes>
      </div>
      <Nav/>
    </div>
  );
};

export default DriverIndex; 