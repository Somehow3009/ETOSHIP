import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthIndex from './pages/Auth/index';
import AdminIndex from './pages/Admin/index';
import DriverIndex from './pages/Driver/index';
import CustomerIndex from './pages/Customer/index';

function App() {
  return (
    <div className='App'> 
      <Router>
        <Routes>
          
          <Route path='/*' element={<AuthIndex />} />
          <Route path='/admin/*' element={<AdminIndex />} />
          <Route path='/driver/*' element={<DriverIndex />} />
          <Route path='/customer/*' element={<CustomerIndex />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
