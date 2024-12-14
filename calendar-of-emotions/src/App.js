import React from 'react';
import './App.css';
import EventsComponent from './components/EventsComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calendar of emotins</h1>
        <EventsComponent />
      </header>
    </div>
  );
}

export default App;
