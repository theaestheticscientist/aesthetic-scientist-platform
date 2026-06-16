import { useState } from 'react';
import { educationModules } from '../data/educationModules';
import '../styles/EducationHub.css';

export default function EducationHub() {
  const [selectedModule, setSelectedModule] = useState(null);

  return (
    <div className="education-hub">
      <div className="hub-header">
        <h1>Education Hub</h1>
        <p>Learn the science behind aesthetic development</p>
      </div>

      <div className="hub-container">
        {selectedModule ? (
          <div className="module-detail">
            <button 
              className="back-btn"
              onClick={() => setSelectedModule(null)}
            >
              ← Back to Modules
            </button>
            <h2>{selectedModule.title}</h2>
            <div className="module-content">
              {selectedModule.content.split('\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        ) : (
          <div className="modules-grid">
            {educationModules.map((module) => (
              <div 
                key={module.id}
                className="module-card"
                onClick={() => setSelectedModule(module)}
              >
                <div className="module-number">{module.id}</div>
                <h3>{module.title}</h3>
                <p>{module.description}</p>
                <button className="read-btn">Read More</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}