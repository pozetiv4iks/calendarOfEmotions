import React, { useState } from 'react';
import './App.css';
import EventsComponent from './components/EventsComponent';
import Cards from './components/Cards/Cards.js';
import Header from './components/Header/Header.js'
import UserProfile from './components/UserProfile.js';
import Footer from './components/Footer/Footer.js';

function App() {

  const [headerValue, setHeaderValue] = useState(''); 
  const handleHeaderValueChange = (value) => { 
    setHeaderValue(value); 
  };

  return (
    <div className="app-container">
      <Header onValueChanges={handleHeaderValueChange}/>
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
