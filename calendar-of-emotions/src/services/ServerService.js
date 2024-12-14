import axios from 'axios';

const API_URL = 'https://emotion-calendar-api.vercel.app'; 

const getEvents = async () => {
  try {
    const response = await axios.get(`${API_URL}/event`);
    return response.data;
  } catch (error) {
    console.error('Error getting events:', error);
    throw error;
  }
};

const createUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/user`, userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export { getEvents, createUser };
