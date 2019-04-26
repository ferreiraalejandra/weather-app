import React from 'react';
import './App.css';
import Header from './components/Header.js';
import WheatherDisplay from './components/WeatherDisplay.js';


function App() {
  return (
    <div className="App">
      <Header />
      <WheatherDisplay />
    </div>
  );
}

export default App;
