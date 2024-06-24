import React from 'react';
import { Link } from 'react-router-dom';
import './Purchases.css';  // Asegúrate de que esta ruta sea correcta

const Purchases = () => {
  return (
    <div className="purchases-container">
      <h1>Purchases</h1>
      <p>Purchases management will be here.</p>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/inventory">Inventory</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Purchases;
