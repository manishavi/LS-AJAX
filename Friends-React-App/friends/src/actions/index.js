import axios from 'axios';
import addFriends from '../actions';

export const GET_FRIENDS = 'GET_FRIENDS';

export const getFriends = () => {
  const promise = axios.get('http://localhost:5000/friends');
  return {
    type: GET_FRIENDS,
    payload: promise
  };
};
