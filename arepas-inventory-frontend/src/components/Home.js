import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import './Home.css';  // Agrega una hoja de estilos si es necesario

const Home = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="home-container">
      <h1>Welcome to the Arepas Inventory System</h1>
      <nav>
        <ul>
          <li>
            <Link to="/inventory">Inventory</Link>
          </li>
          <li>
            <Link to="/purchases">Purchases</Link>
          </li>
        </ul>
      </nav>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;

