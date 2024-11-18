import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthIndex from './pages/Auth/index';
import AdminIndex from './pages/Admin/index';
import DriverIndex from './pages/Driver/index';

function App() {
  return (
    <div className='App'> 
      <Router>
        <Routes>
          
          <Route path='/*' element={<AuthIndex />} />
          <Route path='/admin/*' element={<AdminIndex />} />
          <Route path='/driver/*' element={<DriverIndex />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
