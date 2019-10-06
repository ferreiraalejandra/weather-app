import React from 'react';
import Header from './components/Header.js';
import WeatherDisplay from './components/WeatherDisplay.js';

const styles = {
  textAlign: 'center',	
  background: 'linear-gradient(#C71585, orange)',
  height: '900px',
}

function App() {
  return (
    <div style={styles}>
      <Header />
      <WeatherDisplay />
    </div>
  );
}

export default App;
