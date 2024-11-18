import './driver.css';

import Header from '../../components/layout/header';
import HeaderDetail from '../../components/layout/header-detail';
import Nav from '../../components/layout/nav';
import DriverDashboard from './driver-dashboard';
import JobList from './job-list';
import JobDetails from './job-details';
import TripTracker from './trip-tracker';
import EarningsDetails from './earnings-detail';
import DriverProfile from './driver-profile';
import { Route, Routes, useLocation } from 'react-router-dom';
import { FaHome, FaListUl, FaRegChartBar, FaUser } from 'react-icons/fa';
import tmp_avt from '../../assets/img/tmp_avt.jpg';

const pageItems = [
    {
        pageName: 'Driver Dashboard',
        icon: FaHome, 
        path: '/driver'
    },
    {
        pageName: 'Job List',
        icon: FaListUl, 
        path: '/driver/job-list'
    },
    {
        pageName: 'Earnings Details',
        icon: FaRegChartBar, 
        path: '/driver/earnings-details'
    },
    {
        pageName: 'Driver Profiles',
        icon: FaUser, 
        path: '/driver/profile'
    },
]


const DriverIndex = () => {
  const location = useLocation();

  const currentPage = pageItems.find(item => item.path === location.pathname);
  const pageName = currentPage ? currentPage.pageName : 'Unknown Page';

  return (
    <> 
      {
        location.pathname.startsWith('/driver/job-details/') ? (
            <HeaderDetail title='Job Details'/>
        ) : location.pathname.startsWith('/driver/trip-tracker/') ? (
            <HeaderDetail title='Trip Tracker'/>
        ) : (
            <Header pageName={pageName} img={tmp_avt} />
        )
      }
      <div className='container'>   
        <Routes>
          <Route index element={<DriverDashboard />} />
          <Route path='job-list' element={<JobList />} />
          <Route path='job-details/:customerId' element={<JobDetails />} />
          <Route path='trip-tracker/:customerId' element={<TripTracker />} />
          <Route path='earnings-details' element={<EarningsDetails />} />
          <Route path='profile' element={<DriverProfile />} />
        </Routes>
      </div>
      {
        (!location.pathname.startsWith('/driver/job-details/') && !location.pathname.startsWith('/driver/trip-tracker/')) && (
            <Nav items={pageItems}/>
        )
      }
    </>
  );
};

export default DriverIndex; 