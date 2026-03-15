import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;