import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import NavBar from './navbar/navbar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
