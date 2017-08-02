import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions';
import axios from 'axios';

class FriendsList extends Component {
  componentDidMount() {
    this.props.getFriends();
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.friends.map((friend, i) => {
            return (
              <li key={i}>
                <p>{`Friend ${i+1}`}</p>
                <p>{`Name: ${friend.name}`}</p>
                <p>{`Age: ${friend.age}`}</p>
                <p>{`Email: ${friend.email}`}</p>
                <hr/>
                <button onClick={() => this.addFriends()} className="btn btn-primary">Make me older!</button>
             </li>
           );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends
  };
};

export default connect(mapStateToProps, {getFriends})(FriendsList);