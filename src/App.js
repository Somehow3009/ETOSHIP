import './App.css';
import Header from './header'
import Welcome from './Welcome'

function App() {
  return (
    <div className="App">
      <Header pageName='Admin Dashboard'/>
      <Welcome />
    </div>
  );
}

export default App;
