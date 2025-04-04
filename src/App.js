import React, { useState, useEffect } from 'react';

const App = () => {
  const [progress, setProgress] = useState(0);
  const [deploymentStatus, setDeploymentStatus] = useState('Initializing');
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (isAnimating) {
      if (progress < 100) {
        const timer = setTimeout(() => {
          setProgress(prev => {
            const newProgress = prev + 1;
            if (newProgress === 25) setDeploymentStatus('Building...');
            if (newProgress === 50) setDeploymentStatus('Testing...');
            if (newProgress === 75) setDeploymentStatus('Deploying...');
            if (newProgress === 100) {
              setDeploymentStatus('Successfully Deployed!');
              setIsAnimating(false);
            }
            return newProgress;
          });
        }, 30);
        return () => clearTimeout(timer);
      }
    }
  }, [progress, isAnimating]);

  const resetAnimation = () => {
    setProgress(0);
    setDeploymentStatus('Initializing');
    setIsAnimating(true);
  };

  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <div style={styles.logoBox}>
          <svg viewBox="0 0 226 312" style={styles.logo}>
            <path d="M0,0 L226,0 L226,312 L0,312 L0,0 Z" fill="#D33833"/>
            <path d="M113,36 C96,36 76,40 76,40 L76,48 C76,48 91,52 113,52 C135,52 150,48 150,48 L150,40 C150,40 130,36 113,36 M105,65 L121,65 L121,125 L105,125 L105,65 Z" fill="white"/>
            <path d="M105,130 L105,170 C85,176 70,195 70,216 C70,242 90,264 113,264 C136,264 156,242 156,216 C156,195 141,176 121,170 L121,130 L105,130 Z" fill="white"/>
            <path d="M104,200 C104,194 108,190 113,190 C118,190 122,194 122,200 C122,205 118,209 113,209 C108,209 104,205 104,200" fill="#D33833"/>
          </svg>
        </div>
        <h1 style={styles.heading}>Jenkins CI/CD</h1>
      </div>

      <div style={styles.progressCard}>
        <div style={styles.progressHeader}>
          <span style={styles.progressLabel}>Deployment Progress</span>
          <span style={styles.progressPercentage}>{progress}%</span>
        </div>
        
        <div style={styles.progressBarContainer}>
          <div 
            style={{
              ...styles.progressBar,
              width: `${progress}%`
            }}
          ></div>
        </div>
        
        <div style={styles.statusContainer}>
          <span style={styles.statusText}>{deploymentStatus}</span>
          <div style={styles.stepIndicators}>
            {[1, 2, 3, 4].map(step => (
              <div 
                key={step} 
                style={{
                  ...styles.stepDot,
                  backgroundColor: progress >= step * 25 ? '#4ade80' : '#4b5563'
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      
      <div style={styles.consoleCard}>
        <div style={styles.consoleHeader}>
          <span style={styles.consoleCommand}>$ ./deploy.sh</span>
          <span style={styles.consolePulse}></span>
        </div>
        <div style={styles.consoleOutput}>
          <p> Checking environment...</p>
          <p> Pulling latest changes...</p>
          <p> Running tests...</p>
          <p style={styles.successText}> All tests passed!</p>
          <p> Building Docker image...</p>
          <p style={styles.blinkingText}> {progress < 100 ? '...' : 'Deployment complete!'}</p>
        </div>
      </div>

      <div style={styles.deployedByContainer}>
        <p style={styles.deployedByText}>Deployed by</p>
        <div style={styles.userBadge}>
          <div style={styles.userInitials}>
            SV
          </div>
          <p style={styles.userName}>Sachin Vishwakarma</p>
          <span style={styles.rocketEmoji}>🚀</span>
        </div>
      </div>
      
      {!isAnimating && (
        <button 
          onClick={resetAnimation}
          style={styles.resetButton}
        >
          Restart Deployment
        </button>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #1a202c, #2a4365)',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '16px'
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '32px'
  },
  logoBox: {
    width: '64px',
    height: '64px',
    marginRight: '16px',
    backgroundColor: 'white',
    padding: '8px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  },
  logo: {
    width: '100%',
    height: '100%'
  },
  heading: {
    fontSize: '48px',
    fontWeight: 'bold',
    background: 'linear-gradient(to right, #90cdf4, #d6bcfa)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  },
  progressCard: {
    width: '100%',
    maxWidth: '500px',
    backgroundColor: 'rgba(31, 41, 55, 0.5)',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    marginBottom: '32px'
  },
  progressHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px'
  },
  progressLabel: {
    color: '#93c5fd',
    fontWeight: '600'
  },
  progressPercentage: {
    color: '#93c5fd',
    fontWeight: 'bold'
  },
  progressBarContainer: {
    width: '100%',
    backgroundColor: '#374151',
    borderRadius: '9999px',
    height: '16px',
    marginBottom: '16px'
  },
  progressBar: {
    height: '16px',
    borderRadius: '9999px',
    background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
    transition: 'width 0.3s ease-out'
  },
  statusContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  statusText: {
    fontSize: '14px',
    color: '#d1d5db'
  },
  stepIndicators: {
    display: 'flex',
    gap: '4px'
  },
  stepDot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%'
  },
  consoleCard: {
    backgroundColor: 'rgba(31, 41, 55, 0.5)',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
    width: '100%',
    maxWidth: '500px',
    marginBottom: '32px'
  },
  consoleHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px'
  },
  consoleCommand: {
    color: '#4ade80',
    fontFamily: 'monospace'
  },
  consolePulse: {
    height: '12px',
    width: '12px',
    backgroundColor: '#4ade80',
    borderRadius: '50%',
    animation: 'pulse 2s infinite',
  },
  consoleOutput: {
    fontFamily: 'monospace',
    fontSize: '14px',
    color: '#d1d5db',
    lineHeight: '1.5'
  },
  successText: {
    color: '#4ade80'
  },
  blinkingText: {
    animation: 'blink 1.5s infinite'
  },
  deployedByContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  deployedByText: {
    fontSize: '20px',
    marginBottom: '8px',
    color: '#93c5fd'
  },
  userBadge: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(31, 41, 55, 0.5)',
    padding: '12px 24px',
    borderRadius: '9999px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  },
  userInitials: {
    width: '40px',
    height: '40px',
    backgroundColor: '#3b82f6',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '12px',
    color: 'white',
    fontWeight: 'bold'
  },
  userName: {
    fontSize: '20px',
    fontWeight: '600'
  },
  rocketEmoji: {
    marginLeft: '12px',
    fontSize: '24px',
    animation: 'bounce 1s infinite'
  },
  resetButton: {
    marginTop: '32px',
    padding: '8px 24px',
    backgroundColor: '#2563eb',
    borderRadius: '8px',
    color: 'white',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  }
};

// Add required CSS animations
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
  @keyframes pulse {
    0% { opacity: 0.5; }
    50% { opacity: 1; }
    100% { opacity: 0.5; }
  }
  
  @keyframes blink {
    0% { opacity: 0.2; }
    50% { opacity: 1; }
    100% { opacity: 0.2; }
  }
  
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
`;
document.head.appendChild(styleSheet);

export default App;