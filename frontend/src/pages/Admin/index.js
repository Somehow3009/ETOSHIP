import './admin.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { FaHome, FaListUl, FaRegChartBar, FaUser } from 'react-icons/fa';
import Header from '../../components/layout/header'
import HeaderDetail from '../../components/layout/header-detail'
import Nav from '../../components/layout/nav';
import AdminDashboard from './admin-dashboard'
import DriverList from './driver-list';
import DriverProfile from './driver-profile';
import OrderManagement from './order-management';
import OrderDetail from './order-detail';
import FinanceReport from './finance-report';
import RevenueComparison from './revenue-comparison';

const pageItems = [
    {
        pageName: 'Admin Dashboard',
        icon: FaHome, 
        path: '/admin'
    },
    {
        pageName: 'Driver List',
        icon: FaUser, 
        path: '/admin/driverlist'
    },
    {
      pageName: 'Order Management',
      icon: FaListUl,
      path: '/admin/ordermanagement'
    },
    {
      pageName: 'Finance Report',
      icon: FaRegChartBar, 
      path: '/admin/financereport'
    },
]

const AdminIndex = () => {
  const location = useLocation();

  const currentPage = pageItems.find(item => item.path === location.pathname);
  const pageName = currentPage ? currentPage.pageName : 'Unknown Page';

  return (
    <> 
       {
        location.pathname.startsWith('/admin/driverprofile') ? (
            <HeaderDetail title='Driver Profile' link='/admin/driverlist' color='red'/>
        ) : location.pathname.startsWith('/admin/orderdetail') ? (
            <HeaderDetail title='Order Details' link='/admin/ordermanagement' color='red'/>
        ) : location.pathname.startsWith('/admin/revenuecomparison') ? (
          <HeaderDetail title='Revenue Comparison' link='/admin/financereport' color='red'/>
        ) : (
            <Header pageName={pageName} color='red'/>
        )
      }
      <div className='container'>   
        <Routes>
            <Route index element={<AdminDashboard />} />
            <Route path="driverlist" element={<DriverList />} />
            <Route path="driverprofile" element={<DriverProfile />} />
            <Route path="ordermanagement" element={<OrderManagement />} />
            <Route path="orderdetail" element={<OrderDetail />} />
            <Route path="financereport" element={<FinanceReport />} />
            <Route path="revenuecomparison" element={<RevenueComparison />} />
        </Routes>
      </div>
      {
        (!location.pathname.startsWith('/admin/driverprofile') && !location.pathname.startsWith('/admin/orderdetail')) && !location.pathname.startsWith('/admin/revenuecomparison') && (
            <Nav items={pageItems}/>
        )
      }
    </>
  );
};

export default AdminIndex;