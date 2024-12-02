import './driver.css';

import HeaderDetail from '../../components/layout/header-detail';
import NotiBell from '../../components/NotiBell';
import BottomNav from '../../components/layout/BottomNav';
import DriverDashboard from './Dashboard';
import OrderList from './OrderList';
import OrderDetails from './OrderDetails';
import EarningsDetails from './earnings-detail';
import DriverProfile from './driver-profile';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AiFillHome, AiOutlineHome  } from "react-icons/ai";
import { PiListBulletsLight, PiListBulletsFill  } from "react-icons/pi";
import { BsBarChart, BsBarChartFill  } from "react-icons/bs";
import { FaRegUser, FaUser } from "react-icons/fa";

const pageItems = [
    {
        pageName: 'Home',
        icon: AiOutlineHome,
        iconActive: AiFillHome,
        path: '/driver'
    },
    {
        pageName: 'Order List',
        icon: PiListBulletsLight, 
        iconActive: PiListBulletsFill,
        path: '/driver/order-list'
    },
    {
        pageName: 'Statistics',
        icon: BsBarChart,
        iconActive: BsBarChartFill,
        path: '/driver/statistics'
    },
    {
        pageName: 'Profiles',
        icon: FaRegUser,
        iconActive: FaUser, 
        path: '/driver/profile'
    },
]


const DriverIndex = () => {
  const location = useLocation();

  const currentPage = pageItems.find(item => item.path === location.pathname);
  const pageName = currentPage ? currentPage.pageName : 'Unknown Page';

  return (
      <div className='container'>  
        {
          location.pathname.startsWith('/driver/order-details/') ? (
              <HeaderDetail title='Order Details' link='/driver/order-list' />
          ) : location.pathname.startsWith('/driver/trip-tracker/') ? (
              <HeaderDetail title='Trip Tracker' link='/driver/order-list' />
          ) : (
            <div className='noti-container'>
                <NotiBell />
            </div>
          )
        }
        <Routes>
          <Route index element={<DriverDashboard />} />
          <Route path='order-list' element={<OrderList />} />
          <Route path='order-details/:orderId' element={<OrderDetails />} />
          <Route path='earnings-details' element={<EarningsDetails />} />
          <Route path='profile' element={<DriverProfile />} />
        </Routes>
        {
          (!location.pathname.startsWith('/driver/job-details/') && !location.pathname.startsWith('/driver/trip-tracker/')) && (
            <BottomNav items={pageItems}/>
          )
        }
      </div>
  );
};

export default DriverIndex; 