import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../styles/ClientDashboard.css';

export default function ClientDashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <div className="client-dashboard">
      <nav className="dashboard-nav">
        <h2>The Aesthetic Scientist</h2>
        <div className="nav-links">
          <button onClick={() => navigate('/client')} className="nav-btn active">
            Dashboard
          </button>
          <button onClick={() => navigate('/education')} className="nav-btn">
            Education Hub
          </button>
          <button onClick={handleLogout} className="nav-btn logout-btn">
            Logout
          </button>
        </div>
      </nav>

      <div className="dashboard-content">
        <h1>Client Dashboard</h1>
        <p>Welcome to your personalized aesthetic platform.</p>
        
        <div className="dashboard-sections">
          <section className="dashboard-section">
            <h3>Your Profile</h3>
            <p>Your aesthetic assessment and personal data will appear here.</p>
          </section>

          <section className="dashboard-section">
            <h3>Your Programs</h3>
            <p>Personalized training, nutrition, and lifestyle protocols will be displayed here.</p>
          </section>

          <section className="dashboard-section">
            <h3>Education Hub</h3>
            <p>Learn the science behind aesthetic development.</p>
            <button 
              onClick={() => navigate('/education')}
              className="cta-btn"
            >
              Browse Modules
            </button>
          </section>

          <section className="dashboard-section">
            <h3>Progress Tracking</h3>
            <p>Track your progress with photos and fitness metrics.</p>
          </section>
        </div>
      </div>
    </div>
  );
}