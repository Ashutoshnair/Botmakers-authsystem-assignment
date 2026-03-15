import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'USER'
  });

  const handleSubmit = async () => {
    const response = await fetch('http://localhost:8080/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    if (response.ok) {
      alert('Registered successfully');
      navigate('/login');
    } else {
      alert('Registration failed');
    }
  };

  return (
    <div className="card">
      <h2>Register</h2>

      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <select onChange={(e) => setForm({ ...form, role: e.target.value })}>
        <option value="USER">USER</option>
        <option value="ADMIN">ADMIN</option>
      </select>

      <button onClick={handleSubmit}>Register</button>

      <p className="link" onClick={() => navigate('/login')}>
        Already have account? Login
      </p>
    </div>
  );
}

export default Register;