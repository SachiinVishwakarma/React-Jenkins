import React from 'react';

const App = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Jenkins CI/CD Test</h1>
      <p style={styles.subText}>Deployed by Sachin Vishwakarma 🚀</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #ff7e5f, #feb47b)',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  heading: {
    fontSize: '80px',
    fontWeight: 'bold',
    textShadow: '3px 3px 8px rgba(0, 0, 0, 0.3)',
  },
  subText: {
    fontSize: '24px',
    marginTop: '10px',
    opacity: 0.9,
  },
};

export default App;
