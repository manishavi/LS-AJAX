import axios from 'axios';

export const ADD_FRIENDS = 'ADD_FRIENDS';

export const addFriends = () => {
  const promise = axios.get('http://localhost:5000/friends');
  return {
    type: ADD_FRIENDS,
    payload: promise
  };
};
