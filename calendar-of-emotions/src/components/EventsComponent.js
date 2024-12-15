import React, { useState, useEffect } from 'react';
import { getEvents, createUser, changeStatus} from '../services/ServerService';

export const EventsComponent = () => {
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

  const handleChangeStatus = async () => {
    const userId = 2;
    const eventId = 2;
    const action = "DONE";
    try {
      const data = await changeStatus(userId, eventId, action);
      setEvents(data);
    } catch (error) {
      console.error('Failed to create user:', error);
    }
  };

  return (
    <div>
      <h1>Events</h1>
      <button onClick={handleCreateUser}>Create User</button>
      {userId && <p>User ID: {userId}</p>}
      <h1>Change status</h1>
      <button onClick={handleChangeStatus}>Change status (eventId=2)</button>
      <ul>
        {events?.map(event => (
          <li key={event.id}>{event.id}. {event.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default EventsComponent;
