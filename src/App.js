import React from 'react';
import './App.css';
import Header from './components/Header.js';
import WeatherDisplay from './components/WeatherDisplay.js';


function App() {
  return (
    <div className="App">
      <Header />
      <WeatherDisplay />
    </div>
  );
}

export default App;
