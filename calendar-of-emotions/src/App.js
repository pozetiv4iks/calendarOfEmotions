import React from 'react';
import './App.css';
import EventsComponent from './components/EventsComponent';
import Cards from './components/Cards/Cards.js';
import Header from './components/Header/Header.js'
function App() {
  return (
    <div className="app-container">
      <Header />
      <Cards />
      <EventsComponent />
    </div>
  );
}

export default App;
