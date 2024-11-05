import './App.css';
import Header from './layout/header'
import AdminDashboard from './AdminDashboard/admin-dashboard';
import Navigate from './layout/navigate'

function App() {
  return (
    <div className="App">
      <Header pageName='Admin Dashboard'/>
      <AdminDashboard/>
      <Navigate />
    </div>
  );
}

export default App;
