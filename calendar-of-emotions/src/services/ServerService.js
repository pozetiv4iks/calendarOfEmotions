import axios from 'axios';

const API_URL = 'https://emotion-calendar-api-4a520068-d25a-4ef9-9662-a666d256d578.vercel.app'; 


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

const changeStatus = async (userId, eventId, action) => {
  try {
    const data = { items: [ { eventId: eventId, action: action} ] };
    const response = await axios.post(`${API_URL}/event/set-status/${userId}`, data);
    return response.data;
  } catch (error) {
    console.error('Error changing status:', error);
    throw error;
  }
};

const correctUser = async (userId) => {
  try {
    const data = {items : [ {eventId: 7, action: 'DONE'}]};
    const response = await axios.patch(`${API_URL}/user/${userId}`, data);
    return response.data
  } catch (error) {
    console.error('Error correct user:', error);
    throw error;
  }
};

const acceptStatus = async (id) => {
  try{
    const data = {items : [{eventId:id, action: 'DONE'}]};
    const response = await axios.post(`${API_URL}/event/set-status/${id}`, data);
    return response.data
  } catch (error) {
    console.error('Error accept status:', error);
    throw error;
  }
}

const updateDataUser = async (adult, personality, sex, userId) => {
  try{
    const data = {items : [{'adult': adult, 'personality': personality, 'sex': sex}]};
    const response = await axios.patch(`${API_URL}/user/${userId}`, data);
    return response.data
  } catch (error) {
    console.error('Error send data user:', error);
    throw error;
  }
}


export { getEvents, createUser, changeStatus, correctUser, acceptStatus, updateDataUser };
