import Header from "../../components/layout/header"
import CustomerDasboard from "./CustomerDashboard/customer-dashboard"
import BookingInterface from "./Booking/booking"
import PaymentOptions from "./Payment/payment-option";
import TripTracking from "./Trip/trip-tracking";
import CustomerProfile from "./Profile/customer-profile";
import { Route, Routes, useLocation } from 'react-router-dom';
import { FaHome,FaBell  } from 'react-icons/fa';
import Nav from "../../components/layout/nav"
import { FaClockRotateLeft } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";




const pageItms = [
    {
        pageName: 'Customer Dashboard',
        path: '/customer'
    },
    {
        pageName: 'Booking Interface',
        path: '/customer/booking'
    },
    {
        pageName: 'Payment Options',
        path: '/customer/payment'
    },
    {
        pageName: 'Trip Tracking',
        path: '/customer/trip-tracking'
    },
    {
        pageName: 'Customer Profile',
        path: '/customer/profile'
    },
]

const pageNavItems = [
    {
        pageName: 'Customer Dashboard',
        icon: FaHome, 
        path: '/customer'
    },
    {
        pageName: 'Recent Trip',
        icon: FaClockRotateLeft, 
        path: '/customer/recent-trip'
    },
    {
        pageName: 'Notifications',
        icon: FaBell, 
        path: '/customer/notifications'
    },
    {
        pageName: 'Setting',
        icon: IoIosSettings, 
        path: '/customer/setting'
    },
]


const CustomerIndex = () => {
    const location = useLocation();

    const currentPage = pageItms.find(item => item.path === location.pathname);
    const pageName = currentPage ? currentPage.pageName : 'Unknown Page';
    return (
        <>
        <Header pageName={pageName}/>
        <div className="container">
            <Routes>
                <Route index element = {<CustomerDasboard />} />
                <Route path='booking' element={<BookingInterface />} />
                <Route path='payment' element={<PaymentOptions />} />
                <Route path='trip-tracking' element={<TripTracking />} />
                <Route path='profile' element={<CustomerProfile />} />
            </Routes>
        </div>
        <Nav items = {pageNavItems}/>
        </>

        
    )
}

export default CustomerIndex;