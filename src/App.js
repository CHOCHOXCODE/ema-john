import React from 'react';
import profileImage from './images/giphy.gif';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>My React App<h1>
      <h2>Author: Xubayer Mahmud<h2>
      <img src={profileImage} alt="Profile-Image" />
    </div>
  );
}

export default App;
