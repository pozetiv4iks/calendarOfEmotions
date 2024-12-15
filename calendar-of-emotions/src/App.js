import React, { useState } from 'react';
import './App.css';
import EventsComponent from './components/EventsComponent';
import Cards from './components/Cards/Cards.js';
import Header from './components/Header/Header.js'
import UserProfile from './components/UserProfile.js';
import Footer from './components/Footer/Footer.js';

function App() {

  

  return (
    <div className="app-container">
      <Header />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
