import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminIndex from './pages/Admin/index';

function App() {
  return (
    <div className="App"> 
      <Router>
        <Routes>
          <Route path="/admin/*" element={<AdminIndex />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
