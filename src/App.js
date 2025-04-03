import React from 'react';

const App = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>My React Jenkins Test</h1>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg,rgb(228, 124, 5),rgba(210, 149, 219, 0.64))',
  },
  heading: {
    color: '#fff',
    fontSize: '90px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  },
};

export default App;
