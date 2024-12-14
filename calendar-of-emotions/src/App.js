import React from 'react';
import './App.css';
import EventsComponent from './components/EventsComponent';
import Cards from './components/Cards/Cards.js';
import Header from './components/Header/Header.js'
import UserProfile from './components/UserProfile.js';
function App() {
  return (
    <div className="app-container">
      <Header />
      <Cards />
      <EventsComponent />
      <UserProfile/>
    </div>
  );
}

export default App;
