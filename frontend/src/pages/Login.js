import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

const Login = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2 style={{ textAlign: 'center', color: 'var(--neon)' }}>Login</h2>
        <form className="auth-form">
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Unlock Vault</button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '15px', fontSize: '0.9rem' }}>
          New here? <Link to="/register" style={{ color: 'var(--neon)' }}>Create Account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;