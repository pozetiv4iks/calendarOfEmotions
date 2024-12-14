import React, { useState, useEffect } from 'react';
import { getEvents, createUser} from '../services/ServerService';

const EventsComponent = () => {
  const [events, setEvents] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getEvents();
        setEvents(data);
      } catch (error) {
        console.error('Failed to get events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleCreateUser = async () => {
    const userData = { name: 'belysh'}; 
    try {
      const user = await createUser(userData);
      setUserId(user.id);
    } catch (error) {
      console.error('Failed to create user:', error);
    }
  };

  return (
    <div>
      <h1>Events</h1>
      <button onClick={handleCreateUser}>Create User</button>
      {userId && <p>User ID: {userId}</p>}
      <ul>
        {events?.map(event => (
          <li key={event.id}>{event.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default EventsComponent;
