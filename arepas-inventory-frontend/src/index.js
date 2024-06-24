import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot de react-dom/client
import './index.css';  // Si tienes estilos globales
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
