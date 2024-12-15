import React, { useState } from 'react';
import './App.css';
import EventsComponent from './components/EventsComponent';
import Cards from './components/Cards/Cards.js';
import Header from './components/Header/Header.js'
import UserProfile from './components/UserProfile.js';
import Footer from './components/Footer/Footer.js';
import { UserContext } from './userContext.js';


function App() {
 const [userId , setUserId] = useState(null);
  
  return (
    <UserContext.Provider value={{userId, setUserId}}>
      <div className="app-container">
        <Header />
        <Cards />
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
