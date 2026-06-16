import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminDashboard.css';

export default function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <div className="admin-dashboard">
      <nav className="dashboard-nav">
        <h2>The Aesthetic Scientist</h2>
        <div className="nav-links">
          <button onClick={() => navigate('/admin')} className="nav-btn active">
            Dashboard
          </button>
          <button onClick={handleLogout} className="nav-btn logout-btn">
            Logout
          </button>
        </div>
      </nav>

      <div className="dashboard-content">
        <h1>Admin Dashboard</h1>
        <p>Manage your clients and build their personalized programs.</p>
        
        <div className="dashboard-sections">
          <section className="dashboard-section">
            <h3>Clients</h3>
            <p>View and manage all your clients.</p>
          </section>

          <section className="dashboard-section">
            <h3>Create Program</h3>
            <p>Build personalized programs from templates.</p>
          </section>

          <section className="dashboard-section">
            <h3>Program Templates</h3>
            <p>Manage reusable program templates for training, nutrition, skincare, and more.</p>
          </section>

          <section className="dashboard-section">
            <h3>Client Progress</h3>
            <p>Review client progress photos and fitness metrics.</p>
          </section>
        </div>
      </div>
    </div>
  );
}