// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const fakeCredentials = {
  username: 'Admin',
  password: '12345',
};

const Login = ({ onLogin, isAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === fakeCredentials.username && password === fakeCredentials.password) {
      onLogin(true);
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/profile');
    } else {
      setError("Ім'я користувача або пароль введені не вірно");
    }
  };

  if (isAuthenticated) {
    // Якщо користувач вже авторизований, перенаправте його на /profile
    navigate('/profile');
    return null;
  }

  return (
    <div>
      <h2>Сторінка введення логіна і пароля</h2>
      <div>
        <input type="text" placeholder="Ім'я користувача" onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Пароль" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Увійти</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
