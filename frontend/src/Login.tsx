import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async () => {
    const response = await fetch('http://localhost:8080/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    const token = await response.text();

    if (token) {
      localStorage.setItem('role', token);
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="card">
      <h2>Login</h2>

      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button onClick={handleSubmit}>Login</button>

      <p className="link" onClick={() => navigate('/register')}>
        New user? Register
      </p>
    </div>
  );
}

export default Login;