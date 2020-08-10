import React from 'react';
import Deck from './components/Deck';
import './assets/style/App.scss';

function App() {
  return (
    <div className="App">
      <h1> 
          <span role='img' aria-label="Spade Suit"> ♠️ </span> 
          Card Picker 
          <span role='img' aria-label="Spade Suit"> ♠️ </span> 
      </h1>
      <Deck />
    </div>
  );
}

export default App;
