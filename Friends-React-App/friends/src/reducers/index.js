import { combineReducers } from 'redux';
import friendsReducer from './friendsReducer';

const friendsReducer = combineReducers({
  friends: friendsReducer
});

export default friendsReducer;
