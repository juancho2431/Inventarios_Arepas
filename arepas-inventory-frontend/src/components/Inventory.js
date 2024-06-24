import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import './Inventory.css';  // Asegúrate de que esta ruta sea correcta

const Inventory = () => {
  const { auth } = useContext(AuthContext);
  const isAdmin = auth.user.role === 'admin';

  return (
    <div className="inventory-container">
      <h1>Inventory</h1>
      <p>Inventory management will be here.</p>
      {isAdmin && <button>Add New Item</button>} {/* Solo mostrar botón para admin */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/purchases">Purchases</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Inventory;

