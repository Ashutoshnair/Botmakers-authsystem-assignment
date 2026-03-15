import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const role = localStorage.getItem('role');

  const logout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className="card">
      <h2>Dashboard</h2>

      {role === 'USER' && <div className="dashboard-box">👤 User Content Card</div>}

      {role === 'ADMIN' && <div className="dashboard-box">🛠️ Admin Content Card</div>}

      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;