import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CustomerIndex from './pages/Customer';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>

          <Route path='/customer/*' element={<CustomerIndex />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
