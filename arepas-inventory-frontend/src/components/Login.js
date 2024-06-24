import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import './Login.css';  // Asegúrate de que esta ruta sea correcta

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Estado para manejar el error
  const { login } = useContext(AuthContext); // Eliminamos 'auth'
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const success = await login(username, password);

    if (success) {
      navigate('/');
    } else {
      setError('Invalid username or password'); // Actualizar el estado del error
    }
  };

  return (
    <form className="login-form" onSubmit={onSubmit}>
      <div>
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {error && <p className="error">{error}</p>} {/* Mostrar mensaje de error */}
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
