import React from 'react';
import Weather from './Weather';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className='container'>
        <Weather />
        <footer>
          This project was coded by D.Sen and is <a href='https://github.com/dsen12/react-weather-app' target='_blank' rel="noreferrer">open-sourced on GitHub</a>.
        </footer>
      </div>
    </div>
  );
}

export default App;
