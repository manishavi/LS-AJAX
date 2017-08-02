import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';

export const getFriends = () => {
  const promise = axios.get('http://localhost:5000/friends');
  return {
    type: GET_FRIENDS,
    payload: promise
  };
};

export const postFriends = (friend) => {
  const postpromise = axios.post('http://localhost:5000/friends', friend)
     .then(response) => {
       return {
         type: GET_FRIENDS,
         payload: response.data
       }
     })
  console.log(postpromise);
}
