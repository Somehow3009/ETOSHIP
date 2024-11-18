import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DriverIndex from './pages/Driver/index';
import AuthIndex from './pages/Auth/index';

function App() {
  return (
    <div className='App'> 
      <Router>
        <Routes>
          
          <Route path='/*' element={<AuthIndex />} />
          <Route path='/driver/*' element={<DriverIndex />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
